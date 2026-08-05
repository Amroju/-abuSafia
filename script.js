/**
 * script.js — Logica principale del sito
 * - Cambio lingua (IT/EN/AR) con RTL
 * - Caricamento parlamentari_by_region.json
 * - Costruzione mailto: con chunking
 * - Contatore email localstorage
 */

// ─── State ────────────────────────────────────────────────────────────────────
let currentLang = "it";
let parlamentari = {}; // dati dal JSON
let currentRegione = null;
let selectedEmails = []; // email selezionate dopo eventuale deselect
let emailCounter = parseInt(localStorage.getItem("emailCounter") || "0", 10);

const CHUNK_SIZE = 18;
const MAILTO_SAFE_LIMIT = 1800; // caratteri max per il campo To (sicuro cross-browser)

let userFormValid = false;

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  setupLangSwitcher();
  setupScrollSpy();
  setupScrollAnimations();
  setupUserForm();
  setupShareModal();
  updateCounter();
  fetchGlobalCounter();
  applyLang("it");
});

// ─── Dati ─────────────────────────────────────────────────────────────────────
async function loadData() {
  if (typeof window.PARLAMENTARI_DATA !== "undefined") {
    parlamentari = window.PARLAMENTARI_DATA;
    populateRegionSelect();
    buildAllParliamentGroups();
  } else {
    console.warn("Dati dei parlamentari non trovati in window.PARLAMENTARI_DATA.");
    showFetchError();
  }
}

function showFetchError() {
  const el = document.getElementById("fetch-error");
  if (el) el.style.display = "block";
}

// ─── Internazionalizzazione ───────────────────────────────────────────────────
function setupLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      applyLang(lang);
    });
  });
}

function applyLang(lang) {
  currentLang = lang;
  const t = window.TRANSLATIONS[lang];
  if (!t) return;

  // RTL per arabo
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Aggiorna tutti i data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Timeline dinamica
  renderTimeline(t);

  // Tabella statistiche
  renderStatsTable(t);

  // Aggiorna etichetta contatore
  updateCounter();

  // Aggiorna label lingua al cambio
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Ri-renderizza la sezione azione se una regione è già selezionata
  if (currentRegione) {
    handleRegionChange(currentRegione);
  }

  // Aggiorna l'anteprima (perché il default potrebbe aver cambiato lingua, anche se body e subject restano IT)
  updatePreview();
}

// ─── Timeline ─────────────────────────────────────────────────────────────────
function renderTimeline(t) {
  const container = document.getElementById("timeline-list");
  if (!container || !t.timeline) return;
  container.innerHTML = "";
  t.timeline.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "timeline-item fade-up-element";
    li.style.setProperty('--stagger-idx', index);
    li.innerHTML = `<span class="timeline-date">${item.date}</span><span class="timeline-text">${item.text}</span>`;
    container.appendChild(li);
    if (window.scrollObserver) {
      window.scrollObserver.observe(li);
    }
  });
}

// ─── Tabella statistiche ──────────────────────────────────────────────────────
function renderStatsTable(t) {
  const thead = document.getElementById("stats-thead");
  const tbody = document.getElementById("stats-tbody");
  const note = document.getElementById("stats-note");
  const source = document.getElementById("stats-source");
  if (!thead || !tbody) return;

  thead.innerHTML = `<tr>${t.stats_headers.map((h) => `<th>${h}</th>`).join("")}</tr>`;
  tbody.innerHTML = t.stats_rows
    .map(
      (row) =>
        `<tr>${row.map((cell, i) => `<td${i === 1 ? ' class="num"' : ""}>${cell}</td>`).join("")}</tr>`
    )
    .join("");

  if (note) note.textContent = t.stats_note;
  if (source) source.textContent = t.stats_source;
}

// ─── Selettore regione ────────────────────────────────────────────────────────
function populateRegionSelect() {
  const sel = document.getElementById("region-select");
  if (!sel) return;

  const regioni = Object.keys(parlamentari).sort((a, b) => {
    // Metti "SENATORI A VITA" e "CIRCOSCRIZIONI ESTERE" in fondo
    const special = ["SENATORI A VITA", "CIRCOSCRIZIONI ESTERE"];
    const aS = special.indexOf(a);
    const bS = special.indexOf(b);
    if (aS !== -1 && bS === -1) return 1;
    if (bS !== -1 && aS === -1) return -1;
    return a.localeCompare(b, "it");
  });

  regioni.forEach((r) => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = toTitleCase(r);
    sel.appendChild(opt);
  });

  sel.addEventListener("change", () => {
    handleRegionChange(sel.value);
  });
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function handleRegionChange(regione) {
  currentRegione = regione;
  const t = window.TRANSLATIONS[currentLang];
  if (!regione || !parlamentari[regione]) return;

  const lista = parlamentari[regione];
  selectedEmails = lista.map((p) => p.email);

  // Info count
  const countEl = document.getElementById("recipients-count");
  const countInfo = document.getElementById("recipients-info");
  if (countEl) countEl.textContent = lista.length;
  if (countInfo) countInfo.style.display = "block";

  // Render lista checkbox
  renderRecipientList(lista, regione);

  // Genera bottoni invio
  renderSendButtons(lista, regione);

  // Mostra sezione azione
  document.getElementById("action-panel").style.display = "block";
  document.getElementById("all-region-action").style.display = "block";
}

function renderRecipientList(lista, regione) {
  const container = document.getElementById("recipient-list-container");
  const t = window.TRANSLATIONS[currentLang];
  if (!container) return;

  container.innerHTML = "";

  // Controlli seleziona/deseleziona tutti
  const controls = document.createElement("div");
  controls.className = "list-controls";
  const selAll = document.createElement("button");
  selAll.type = "button";
  selAll.className = "link-btn";
  selAll.textContent = t.select_all;
  selAll.addEventListener("click", () => {
    container.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.checked = true;
    });
    updateSelectedEmails(regione);
  });

  const desAll = document.createElement("button");
  desAll.type = "button";
  desAll.className = "link-btn";
  desAll.textContent = t.deselect_all;
  desAll.addEventListener("click", () => {
    container.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.checked = false;
    });
    updateSelectedEmails(regione);
  });

  controls.appendChild(selAll);
  controls.appendChild(desAll);
  container.appendChild(controls);

  const ul = document.createElement("ul");
  ul.className = "recipient-list";
  lista.forEach((p, idx) => {
    const li = document.createElement("li");
    const id = `parl-${regione}-${idx}`;
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = id;
    cb.value = p.email;
    cb.checked = true;
    cb.addEventListener("change", () => updateSelectedEmails(regione));

    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerHTML = `${p.nome} <span class="camera-badge ${
      p.camera === "Camera" ? "badge-camera" : "badge-senate"
    }">${p.camera === "Camera" ? t.camera_label : t.senate_label}</span>`;

    const btnPersonal = document.createElement("a");
    btnPersonal.href = "#";
    btnPersonal.className = "btn personal-send-btn send-btn";
    btnPersonal.textContent = t.personal_send_btn;
    
    // Start disabled (validateUserData will enable it)
    if (!userFormValid) {
      btnPersonal.classList.add("disabled");
      btnPersonal.setAttribute("disabled", "true");
      btnPersonal.style.pointerEvents = "none";
    }

    btnPersonal.addEventListener("click", (e) => {
      e.preventDefault();
      if (!userFormValid) return;
      incrementCounter();
      window.location.href = buildPersonalMailto(p);
      setTimeout(showShareModal, 1000);
    });

    li.appendChild(cb);
    li.appendChild(label);
    li.appendChild(btnPersonal);
    ul.appendChild(li);
  });
  container.appendChild(ul);

  // Toggle visibilità
  const toggleBtn = document.getElementById("list-toggle-btn");
  const listSection = document.getElementById("list-section");
  if (toggleBtn) {
    toggleBtn.textContent = t.list_toggle_show;
    toggleBtn.onclick = () => {
      const isHidden = listSection.style.display === "none" || !listSection.style.display || listSection.classList.contains("hidden");
      if (isHidden) {
        listSection.style.display = "block";
        listSection.classList.remove("hidden");
        toggleBtn.textContent = t.list_toggle_hide;
      } else {
        listSection.style.display = "none";
        listSection.classList.add("hidden");
        toggleBtn.textContent = t.list_toggle_show;
      }
    };
    listSection.style.display = "none";
    listSection.classList.add("hidden");
  }
}

function updateSelectedEmails(regione) {
  const lista = parlamentari[regione];
  if (!lista) return;
  selectedEmails = [];
  lista.forEach((p, idx) => {
    const cb = document.getElementById(`parl-${regione}-${idx}`);
    if (cb && cb.checked) selectedEmails.push(p.email);
  });
  // Rigenera bottoni con selezione aggiornata
  renderSendButtons(lista, regione, selectedEmails);

  const countEl = document.getElementById("recipients-count");
  if (countEl) countEl.textContent = selectedEmails.length;
}

// ─── Validazione Dati Utente & Anteprima ─────────────────────────────────────
function setupUserForm() {
  const nameInput = document.getElementById("sender-name");
  const addressInput = document.getElementById("sender-address");
  const emailInput = document.getElementById("sender-email");
  const genderInputs = Array.from(document.querySelectorAll('input[name="sender-gender"]'));
  
  if (!nameInput || !addressInput || !emailInput) {
    console.error("setupUserForm: Input fields not found in DOM");
    return;
  }

  const inputs = [nameInput, addressInput, emailInput, ...genderInputs];
  const updateRoutine = () => {
    try {
      validateUserData();
    } catch (e) {
      console.error("Error in validateUserData:", e);
    }
    try {
      updatePreview();
    } catch (e) {
      console.error("Error in updatePreview:", e);
    }
  };

  inputs.forEach(input => {
    input.addEventListener("input", updateRoutine);
    input.addEventListener("change", updateRoutine);
    input.addEventListener("keyup", updateRoutine);
  });
  
  // Chiamata iniziale
  updateRoutine();
}

function validateUserData() {
  const nameInput = document.getElementById("sender-name");
  const addressInput = document.getElementById("sender-address");
  const emailInput = document.getElementById("sender-email");
  if (!nameInput || !addressInput || !emailInput) return;
  
  let valid = true;
  
  if (nameInput.value.trim() === "") {
    valid = false;
    nameInput.classList.add("error");
    document.getElementById("err-name").style.display = "block";
  } else {
    nameInput.classList.remove("error");
    document.getElementById("err-name").style.display = "none";
  }

  if (addressInput.value.trim() === "") {
    valid = false;
    addressInput.classList.add("error");
    document.getElementById("err-address").style.display = "block";
  } else {
    addressInput.classList.remove("error");
    document.getElementById("err-address").style.display = "none";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    valid = false;
    emailInput.classList.add("error");
    document.getElementById("err-email").style.display = "block";
  } else {
    emailInput.classList.remove("error");
    document.getElementById("err-email").style.display = "none";
  }

  const genderChecked = document.querySelector('input[name="sender-gender"]:checked');
  const errGender = document.getElementById("err-gender");
  if (!genderChecked) {
    valid = false;
    if (errGender) errGender.style.display = "block";
  } else {
    if (errGender) errGender.style.display = "none";
  }

  userFormValid = valid;
  
  // Abilita/Disabilita bottoni
  document.querySelectorAll(".send-btn").forEach(btn => {
    if (valid) {
      btn.classList.remove("disabled");
      btn.removeAttribute("disabled");
      btn.style.pointerEvents = "auto";
    } else {
      btn.classList.add("disabled");
      btn.setAttribute("disabled", "true");
      btn.style.pointerEvents = "none";
    }
  });
}

function getDynamicEmailBody() {
  // Use a fresh copy of the original string
  let body = window.EMAIL_BODY_DEFAULT || "";
  
  const nameInput = document.getElementById("sender-name");
  const addressInput = document.getElementById("sender-address");
  const emailInput = document.getElementById("sender-email");
  
  const nameVal = (nameInput && nameInput.value.trim() !== "") ? nameInput.value.trim() : "[Il tuo nome]";
  const addressVal = (addressInput && addressInput.value.trim() !== "") ? addressInput.value.trim() : "[Il tuo indirizzo o codice postale]";
  const emailVal = (emailInput && emailInput.value.trim() !== "") ? emailInput.value.trim() : "[Il tuo indirizzo email]";

  const genderChecked = document.querySelector('input[name="sender-gender"]:checked');
  let gratoGrata = "grato/a";
  if (genderChecked) {
    gratoGrata = genderChecked.value === "female" ? "grata" : "grato";
  }

  // Use global regex replacement to ensure ALL occurrences are replaced, even if the template was mutated
  body = body.replace(/{NAME}/g, nameVal);
  body = body.replace(/{ADDRESS}/g, addressVal);
  body = body.replace(/{EMAIL}/g, emailVal);
  body = body.replace(/{GRATO_GRATA}/g, gratoGrata);
  
  return body;
}

function updatePreview() {
  const previewBox = document.getElementById("email-preview");
  if (previewBox) {
    previewBox.textContent = getDynamicEmailBody();
  } else {
    console.error("updatePreview: #email-preview box not found");
  }
}

// ─── Costruzione mailto ───────────────────────────────────────────────────────
function buildMailto(emails) {
  const body = getDynamicEmailBody();
  const subject = encodeURIComponent(window.EMAIL_SUBJECT);
  const bodyEncoded = encodeURIComponent(body);
  const to = emails.join(",");
  return `mailto:?bcc=${to}&subject=${subject}&body=${bodyEncoded}`;
}

function getPersonalGreeting(p) {
  if (p.camera === "Camera") {
    return "Gentile Onorevole,";
  } else {
    // Basic heuristic for Italian names: last word ending in 'a' usually female, except common male names
    const parts = p.nome.trim().split(" ");
    const firstName = parts[parts.length - 1].toLowerCase();
    const maleExceptions = ["andrea", "luca", "nicola", "mattia", "elia", "enea", "giona", "isaia", "tobia", "battista", "titta"];
    
    if (firstName.endsWith("a") && !maleExceptions.includes(firstName)) {
      return "Gentile Senatrice,";
    }
    return "Gentile Senatore,";
  }
}

function buildPersonalMailto(p) {
  let body = getDynamicEmailBody();
  const greeting = getPersonalGreeting(p);
  
  // Replace the default neutral greeting with the personal one
  body = body.replace(/^Gentile Parlamentare,/i, greeting);
  
  const subject = encodeURIComponent(window.EMAIL_SUBJECT);
  const bodyEncoded = encodeURIComponent(body);
  const to = p.email;
  return `mailto:${to}?subject=${subject}&body=${bodyEncoded}`;
}

function chunkEmails(emails) {
  // Prima proviamo con chunk "naturale" di CHUNK_SIZE
  const chunks = [];
  for (let i = 0; i < emails.length; i += CHUNK_SIZE) {
    chunks.push(emails.slice(i, i + CHUNK_SIZE));
  }
  // Verifica lunghezza To per ogni chunk e suddividi ulteriormente se necessario
  const finalChunks = [];
  chunks.forEach((ch) => {
    const toStr = ch.join(",");
    if (toStr.length <= MAILTO_SAFE_LIMIT) {
      finalChunks.push(ch);
    } else {
      // suddividi di più
      const half = Math.ceil(ch.length / 2);
      finalChunks.push(ch.slice(0, half));
      finalChunks.push(ch.slice(half));
    }
  });
  return finalChunks;
}

function renderSendButtons(lista, regione, emailsOverride) {
  const container = document.getElementById("send-buttons-container");
  const t = window.TRANSLATIONS[currentLang];
  if (!container) return;
  container.innerHTML = "";

  const emails = emailsOverride || lista.map((p) => p.email);
  if (emails.length === 0) return;

  const chunks = chunkEmails(emails);

  chunks.forEach((chunk, idx) => {
    const btn = document.createElement("a");
    btn.href = "#";
    btn.className = "cta-btn send-btn";
    btn.setAttribute("role", "button");
    if (chunks.length === 1) {
      btn.textContent = t.send_btn;
    } else {
      btn.textContent = `${t.send_group_btn} ${idx + 1} ${t.send_group_of} ${chunks.length}`;
    }
    btn.setAttribute(
      "aria-label",
      `${t.send_group_btn} ${idx + 1} — ${chunk.length} destinatari`
    );
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const mailto = buildMailto(chunk);
      window.location.href = mailto;
      incrementCounter();
      setTimeout(showShareModal, 1000);
    });
    container.appendChild(btn);
  });
  
  // Dopo aver generato i bottoni, applica lo stato corretto
  validateUserData();
}

// ─── Tutti i parlamentari ─────────────────────────────────────────────────────
function buildAllParliamentGroups() {
  const container = document.getElementById("all-parl-buttons");
  if (!container) return;

  // Raccoglie tutte le email
  const allEmails = [];
  Object.values(parlamentari).forEach((lista) => {
    lista.forEach((p) => allEmails.push(p.email));
  });

  const chunks = chunkEmails(allEmails);
  container.innerHTML = "";

  chunks.forEach((chunk, idx) => {
    const btn = document.createElement("a");
    btn.href = "#";
    btn.className = "cta-btn send-btn send-btn--secondary";
    btn.setAttribute("role", "button");
    const t = window.TRANSLATIONS[currentLang];
    btn.textContent = `${t ? t.all_parliament_btn : "Invia gruppo"} ${idx + 1}/${chunks.length}`;
    btn.dataset.chunkIdx = idx;
    btn.dataset.chunkTotal = chunks.length;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const mailto = buildMailto(chunk);
      window.location.href = mailto;
      incrementCounter();
      setTimeout(showShareModal, 1000);
    });
    container.appendChild(btn);
  });

  // Salva per aggiornare le label al cambio lingua
  window._allChunksTotal = chunks.length;
  
  // Dopo aver generato i bottoni, applica lo stato corretto
  validateUserData();
}

function refreshAllParliamentLabels() {
  const t = window.TRANSLATIONS[currentLang];
  const btns = document.querySelectorAll(
    "#all-parl-buttons .send-btn--secondary"
  );
  btns.forEach((btn) => {
    const idx = parseInt(btn.dataset.chunkIdx, 10) + 1;
    const total = btn.dataset.chunkTotal;
    btn.textContent = `${t.all_parliament_btn} ${idx}/${total}`;
  });
}

// ─── Contatore email ──────────────────────────────────────────────────────────
function incrementCounter() {
  emailCounter++;
  localStorage.setItem("emailCounter", emailCounter);
  updateCounter();
  incrementaContatoreGlobale();
}

function updateCounter() {
  const t = window.TRANSLATIONS[currentLang];
  const el = document.getElementById("email-counter");
  if (el) {
    el.innerHTML = `<span class="counter-number">${emailCounter}</span> ${t ? t.counter_suffix : "email da questo dispositivo"}`;
  }
  const label = document.getElementById("counter-label");
  if (label && t) label.textContent = t.counter_label;
}

// ─── Textarea pristine tracking ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("email-body");
  if (textarea) {
    textarea.value = window.EMAIL_BODY_DEFAULT;
    textarea.dataset.pristine = "true";
    textarea.addEventListener("input", () => {
      textarea.dataset.pristine = "false";
    });
  }
});

// ─── Accordion "tutti i parlamentari" ────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const accordionBtn = document.getElementById("all-parl-toggle");
  const accordionBody = document.getElementById("all-parl-body");
  if (accordionBtn && accordionBody) {
    accordionBtn.addEventListener("click", () => {
      const isOpen = accordionBody.style.display === "block";
      accordionBody.style.display = isOpen ? "none" : "block";
      accordionBtn.setAttribute("aria-expanded", !isOpen);
      accordionBtn.classList.toggle("open", !isOpen);
    });
  }
});

// ─── Scroll spy per header ────────────────────────────────────────────────────
function setupScrollSpy() {
  const header = document.getElementById("site-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}

// ─── Smooth scroll CTA ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// ─── Aggiorna label lingua al cambio ─────────────────────────────────────────
const origApplyLang = window.applyLang;
// Monkey-patch per aggiornare anche i bottoni "tutti i parlametari" al cambio lingua
const _applyLangBase = applyLang;
window.applyLang = function (lang) {
  _applyLangBase(lang);
  refreshAllParliamentLabels();
};
// ─── Scroll Animations ─────────────────────────────────────────────────────────
function setupScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll(
    '.section-label, h2, .problem-text, .timeline-title, .timeline-list li, .stats-note, .stats-source, .action-intro, .region-select-wrap, .stats-table-wrap, .quote-block'
  );
  
  elementsToAnimate.forEach(el => {
    el.classList.add('fade-up-element');
  });

  window.scrollObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px" });

  document.querySelectorAll('.fade-up-element').forEach(el => window.scrollObserver.observe(el));
}

// ─── Share Modal ──────────────────────────────────────────────────────────────
function setupShareModal() {
  const modal = document.getElementById('share-modal');
  const closeBtn = document.getElementById('close-modal');
  const btnWa = document.getElementById('share-wa');
  const btnTw = document.getElementById('share-tw');
  const btnFb = document.getElementById('share-fb');
  if (!modal || !closeBtn) return;

  // Setup social links
  const currentUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Aiutami a liberare il Dott. Hussam Abu Safiya! 🕊️ Scopri di più qui:");
  if (btnWa) btnWa.href = `https://api.whatsapp.com/send?text=${shareText} ${currentUrl}`;
  if (btnTw) btnTw.href = `https://twitter.com/intent/tweet?text=${shareText}&url=${currentUrl}`;
  if (btnFb) btnFb.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

  // Close logic
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('is-open');
  });
}

function showShareModal() {
  const modal = document.getElementById('share-modal');
  if (modal) modal.classList.add('is-open');
}

// --- Contatore Globale Firebase ---
const FIREBASE_URL = "https://abusafyia-default-rtdb.europe-west1.firebasedatabase.app/counter.json";

async function fetchGlobalCounter() {
  try {
    const res = await fetch(FIREBASE_URL);
    if (!res.ok) return;
    const data = await res.json();
    const count = data || 0;
    const box = document.getElementById("global-counter-box");
    const val = document.getElementById("global-counter-value");
    if (box && val && count > 0) {
      val.textContent = count;
      box.style.display = "flex";
    }
  } catch(e) {
    // silent fail
  }
}

async function incrementaContatoreGlobale() {
  if (sessionStorage.getItem("azioneGiaContata") === "true") return;
  sessionStorage.setItem("azioneGiaContata", "true");
  
  try {
    const res = await fetch(FIREBASE_URL);
    if (!res.ok) return;
    const data = await res.json();
    const newCount = (data || 0) + 1;
    
    await fetch(FIREBASE_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCount)
    });
    
    const val = document.getElementById("global-counter-value");
    const box = document.getElementById("global-counter-box");
    if (val && box) {
      val.textContent = newCount;
      box.style.display = "flex";
    }
  } catch(e) {
    // silent fail
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
