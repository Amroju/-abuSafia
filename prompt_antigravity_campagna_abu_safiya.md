# PROMPT PER ANTIGRAVITY — Sito Campagna "Libertà per Dr. Hussam Abu Safiya"

Copia-incolla tutto il testo qui sotto ad Antigravity come prompt iniziale.

---

## PROMPT

Crea un sito web statico (HTML + CSS + JavaScript vanilla, nessun framework necessario, tutto deve funzionare aprendo semplicemente `index.html` in un browser o con un web server statico qualsiasi) per una campagna di sensibilizzazione sui diritti umani. Il sito deve essere professionale, serio, minimale — ispirato allo stile delle pagine "Take Action" di Amnesty International (tipografia pulita, molto white space, colori sobri: nero/grigio scuro su bianco con UN colore d'accento, es. rosso scuro o verde scuro per i CTA, niente elementi decorativi superflui).

### 1. Struttura generale del sito

- **Header**: logo/nome campagna a sinistra, selettore lingua a destra (🇮🇹 IT / 🇬🇧 EN / 🇸🇦 AR) — vedi punto 5 per il multilingua.
- **Hero section**: immagine/titolo grande, nome del caso, un sottotitolo breve, e un bottone CTA "Agisci ora" che scrolla alla sezione azione.
- **Sezione "Chi è Dr. Hussam Abu Safiya"**: contesto e biografia breve.
- **Sezione "Qual è il problema"**: cronologia dei fatti (vedi contenuti al punto 3).
- **Sezione "I dati sui detenuti palestinesi"**: tabella/infografica con le statistiche (vedi punto 3).
- **Sezione "Cosa puoi fare"** (la più importante, deve essere la sezione azione — vedi punto 4 in dettaglio).
- **Sezione fonti**: elenco链ato delle fonti citate, numerate, ognuna con link cliccabile.
- **Footer**: nota legale minima, contatti, social (placeholder).

Il sito deve essere completamente responsive (mobile-first).

### 2. Multilingua (IT / EN / AR)

- Tutto il sito (testi, navigazione, bottoni) deve essere disponibile in **italiano, inglese e arabo**, con uno switcher in header che cambia lingua senza ricaricare la pagina (usa un oggetto JS di traduzioni tipo `{it: {...}, en: {...}, ar: {...}}` e aggiorna il DOM via `data-i18n` attributes).
- Quando la lingua è arabo, applica `dir="rtl"` all'elemento `<html>` e adatta il layout (l'arabo si legge da destra a sinistra).
- **IMPORTANTE**: la lingua dell'interfaccia è selezionabile in IT/EN/AR, ma **l'email che verrà inviata ai parlamentari deve essere SEMPRE in italiano**, indipendentemente dalla lingua che l'utente ha selezionato per navigare il sito (perché i destinatari sono parlamentari italiani). Non tradurre mai il contenuto dell'email.
- Per i contenuti narrativi in EN e AR puoi tradurre in modo fedele il contenuto italiano fornito qui sotto (punto 3), mantenendo tono e fatti identici, senza aggiungere o rimuovere informazioni.

### 3. Contenuti del sito (testo sorgente in italiano — da tradurre per EN/AR)

**Titolo hero**: "Liberate il Dott. Hussam Abu Safiya"
**Sottotitolo**: "Medico, direttore dell'ospedale Kamal Adwan a Gaza. Detenuto senza processo dal 27 dicembre 2024. La sua vita è in pericolo immediato."

**Sezione "Qual è il problema" — testo narrativo:**

Usa questi fatti (riscritti in prosa scorrevole, non solo elenco puntato):

- Il Dott. Hussam Abu Safiya è il direttore dell'ospedale Kamal Adwan, nel nord di Gaza. È stato arrestato dalle forze israeliane il 27 dicembre 2024, durante l'irruzione nell'ospedale, insieme ad altro personale medico e pazienti.
- È detenuto senza accuse formali né processo, ai sensi della legge israeliana sui "combattenti nemici illegali".
- Il suo appello è stato respinto dalla Corte Suprema israeliana il 10 giugno 2026, e la sua detenzione è stata estesa.
- Fino a inizio giugno 2026 era detenuto nel carcere di Ktzi'ot; è poi stato trasferito in isolamento nel carcere di Ganot e, il 24 giugno 2026, nella struttura sotterranea di interrogatorio Rakefet nel carcere di Nitzan.
- Secondo l'organizzazione Physicians for Human Rights Israel (PHRI) e il suo avvocato Nasser Odeh, dopo questi trasferimenti le sue condizioni sono gravemente peggiorate.
- Durante una visita legale del 2 luglio 2026, l'avvocato Odeh lo ha trovato incatenato mani e piedi, con gravi ferite fresche a testa, occhi, orecchie e collo — al punto da faticare a riconoscerlo. Il Dott. Abu Safiya aveva difficoltà a respirare e parlare, appariva estremamente debole ed è più volte sembrato sul punto di perdere conoscenza.
- Ha riferito al suo avvocato di essere stato aggredito con un martello e bastoni da guardie carcerarie subito dopo l'udienza d'appello del 10 giugno 2026, e di aver subito pestaggi quotidiani dal 24 giugno, con più episodi di perdita di coscienza, senza cure mediche adeguate.
- Le sue parole riportate dall'avvocato: ha espresso il timore di essere stato portato in quella struttura per essere ucciso, temendo di non sopravvivere.
- L'avvocato Odeh ha presentato un ricorso urgente al Servizio Penitenziario israeliano; PHRI ha inviato appelli urgenti al Procuratore Generale, al Commissario del Servizio Penitenziario, al Difensore Pubblico e alle commissioni parlamentari competenti, chiedendo una visita indipendente e una valutazione medica urgente.
- Il caso si inserisce in un contesto più ampio: il 30 marzo 2026 la Knesset israeliana ha approvato una legge che amplia il ricorso alla pena di morte, applicata in modo pressoché esclusivo a palestinesi giudicati da tribunali militari, con garanzie processuali ridotte. Amnesty International e l'Alto Commissario ONU per i Diritti Umani, Volker Türk, ne hanno chiesto l'abrogazione.

**Sezione "I dati sui detenuti palestinesi"** (tabella, fonte Addameer, aggiornamento 13 maggio 2026 — specifica sempre data e fonte accanto ai numeri):

| Categoria | Numero |
|---|---|
| Totale prigionieri politici palestinesi | 9.400 |
| Donne detenute | 87 |
| Minori detenuti | 360 |
| Detenzione amministrativa (senza accusa né processo) | 3.376 |
| Detenuti di Gaza classificati "unlawful combatants" | 1.283 |

Nota sotto la tabella: "I dati sui detenuti cambiano frequentemente e possono variare in base alla fonte. Il numero dei detenuti di Gaza classificati come 'unlawful combatants' potrebbe non includere tutte le persone trattenute nei centri gestiti dall'esercito israeliano (fonte: Addameer, HaMoked)."

**Sezione fonti** (elenco numerato, ogni voce con link cliccabile — usa `rel="noopener"` e apri in nuova scheda):

1. Amnesty International, "Israel/OPT: Newly adopted death penalty law must be repealed", 30 marzo 2026 — https://www.amnesty.org/en/latest/news/2026/03/israel-opt-newly-adopted-death-penalty-law-must-be-repealed/
2. Addameer, "Statistics", aggiornamento 13 maggio 2026 — https://addameer.ps/statistics
3. HaMoked, "Prisoners charts" — https://hamoked.org/prisoners-charts.php
4. Inter-Parliamentary Union, "Case N° PAL/02 - Marwan Barghouti", 19 aprile 2026 — https://www.ipu.org/file/23585/download
5. Amnesty International, "Release Dr. Hussam Abu Safiya!" — https://www.amnesty.org/en/petition/release-dr-hussam-abu-safiya/
6. Comitato Internazionale della Croce Rossa, "FAQ on ICRC and Palestinian detainees", 5 novembre 2025 — https://www.icrc.org/en/article/FAQ-icrc-and-palestinian-detainees
7. Reuters, "Israeli Supreme Court strikes down ban on Red Cross prison visits", 4 giugno 2026 — https://www.reuters.com/world/middle-east/israeli-supreme-court-strikes-down-ban-red-cross-prison-visits-2026-06-04/
8. Defense for Children International – Palestine, "More than half of Palestinian child detainees have no charges", 18 marzo 2026 — https://www.dci-palestine.org/more_than_half_of_palestinian_child_detainees_have_no_charges
9. B'Tselem, "Statistics on Palestinian minors in Israeli custody", aggiornamento 29 marzo 2026 — https://www.btselem.org/statistics/minors_in_custody

### 4. Sezione "Cosa puoi fare" — meccanismo di azione (LA PARTE PIÙ IMPORTANTE)

Questa sezione permette al visitatore di inviare un'email pre-scritta ai parlamentari italiani della propria regione, tramite un link `mailto:` che apre il client email predefinito del visitatore con destinatari, oggetto e corpo già compilati. **Il visitatore deve sempre premere lui stesso "invia" dal proprio client email — non deve mai esserci invio automatico lato server.** Questo è fondamentale sia per motivi tecnici (niente backend/hosting email necessario) sia perché rende ogni messaggio un'azione reale di un cittadino, non spam automatizzato.

**Perché serve un selettore di regione (NON un unico bottone "invia a tutti"):** Il link `mailto:` ha un limite di lunghezza (circa 2.000 caratteri in modo sicuro cross-browser). Con quasi 600 parlamentari totali, un unico `mailto:` con tutti i destinatari non funzionerebbe (si romperebbe o verrebbe troncato). La soluzione, che è anche più efficace come advocacy (i parlamentari danno più peso a messaggi di elettori del proprio collegio), è:

**A) Flusso principale — "Scrivi ai parlamentari della tua regione":**
1. Un menu a tendina con l'elenco delle regioni/circoscrizioni italiane (i dati sono nel file `parlamentari_by_region.json` allegato — struttura: oggetto con chiave = nome regione, valore = array di `{nome, email, camera}` dove `camera` è `"Camera"` o `"Senato"`).
2. Quando l'utente seleziona una regione, mostra sotto il numero di parlamentari che riceveranno l'email (es. "Il messaggio sarà inviato a 43 parlamentari dell'Emilia Romagna") e opzionalmente la lista con nome + ruolo (Camera/Senato), spuntabile per deselezionare singoli destinatari se si vuole.
3. Un bottone "Apri la tua email e invia ora" che costruisce un link `mailto:` con:
   - **To**: tutte le email selezionate per quella regione, separate da virgola
   - **Subject**: `Azione urgente contro la pena di morte in Israele e per i diritti dei detenuti palestinesi`
   - **Body**: il testo esatto riportato al punto 4-bis qui sotto (fai attenzione a fare url-encode corretto di tutto il testo con `encodeURIComponent`, incluse le interruzioni di riga come `%0D%0A`)
4. **Gestione regioni molto grandi (es. Lombardia con 85, Lazio con 55)**: se la stringa `mailto:` supera ~1800 caratteri, dividi automaticamente i destinatari di quella regione in gruppi (chunk) da massimo ~25-30 indirizzi ciascuno, e genera un bottone per ogni gruppo (es. "Invia al gruppo 1 di 3", "Invia al gruppo 2 di 3"...) così l'utente può coprire tutta la sua regione con pochi click.

**B) Opzione secondaria — "Scrivi a tutto il Parlamento":**
Sotto il flusso principale, aggiungi un accordion/sezione collassabile "Vuoi scrivere a tutti i parlamentari italiani?" che genera automaticamente una serie di bottoni "Invia gruppo 1/24", "Invia gruppo 2/24"... (chunk da ~25 email ciascuno sui 590 totali) così chi vuole fare l'azione completa può farlo con una ventina di click veloci in sequenza.

**C) Testo dell'email modificabile:** Prima del bottone di invio, mostra il testo dell'email in una `<textarea>` editabile (pre-compilata col testo ufficiale), cosicché l'utente possa personalizzarla con il proprio nome/indirizzo prima di generare il `mailto:` — il link deve leggere il contenuto aggiornato dalla textarea al momento del click, non un valore fisso.

### 4-bis. Testo esatto dell'email (in italiano, NON tradurre mai)

```
Oggetto: Azione urgente contro la pena di morte in Israele e per i diritti dei detenuti palestinesi

Gentile Onorevole/Senatore/Senatrice,

Le scrivo per chiederLe un intervento urgente contro la nuova legge israeliana sulla pena di morte e per la tutela delle cittadine e dei cittadini palestinesi detenuti da Israele. Mi oppongo alla pena di morte in ogni circostanza: è una punizione irreversibile, crudele e disumana, incompatibile con il diritto alla vita e con la dignità umana. Secondo Amnesty International e l'Alto Commissario ONU per i Diritti Umani, la recente normativa israeliana amplia il ricorso alla pena capitale in modo discriminatorio, con effetti quasi esclusivamente sui palestinesi e con gravi rischi per il diritto a un processo equo.

Le chiedo quindi di sollecitare il Governo italiano affinché:

- condanni pubblicamente la legge israeliana sulla pena di morte e chieda la sua immediata abrogazione;
- agisca in sede diplomatica ed europea per prevenire qualsiasi esecuzione di prigionieri palestinesi;
- chieda l'accesso immediato e regolare del Comitato Internazionale della Croce Rossa a tutti i detenuti palestinesi;
- sostenga il rilascio immediato di Marwan Barghouti, in linea con l'ultima decisione dell'Unione Interparlamentare;
- chieda il rilascio immediato e incondizionato del dott. Hussam Abu Safiya e degli operatori sanitari palestinesi detenuti arbitrariamente;
- promuova indagini indipendenti su torture, maltrattamenti, negligenza medica e detenzioni arbitrarie, e sostenga misure concrete perché Israele rispetti il diritto internazionale umanitario e dei diritti umani.

Le sarei grato/a se mi comunicasse quali iniziative intende intraprendere.

Grazie per l'attenzione,
distinti saluti,

[Il tuo nome]
[Il tuo indirizzo o codice postale — per confermare che sei un elettore]
[Il tuo indirizzo email]
```

Nota: lascia i placeholder `[Il tuo nome]`, `[Il tuo indirizzo o codice postale]`, `[Il tuo indirizzo email]` nel testo precompilato — l'utente li completerà nella textarea prima di inviare.

### 5. File dati da usare

Ti allego (o troverai nella cartella del progetto) il file **`parlamentari_by_region.json`**, già pulito e strutturato così:

```json
{
  "EMILIA ROMAGNA": [
    {"nome": "Cognome Nome", "email": "email@camera.it", "camera": "Camera"},
    ...
  ],
  "LOMBARDIA": [ ... ],
  ...
}
```

Contiene 22 gruppi (20 regioni italiane + "CIRCOSCRIZIONI ESTERE" + "SENATORI A VITA") per un totale di 590 parlamentari. Carica questo file via `fetch('parlamentari_by_region.json')` all'avvio della pagina (o incorporalo direttamente come oggetto JS costante se preferisci evitare fetch per un file aperto localmente con `file://`).

**Nota per i Senatori a Vita**: non rappresentano una regione geografica, quindi nel menu a tendina inseriscili come voce separata "Senatori a Vita (5)" invece che tra le regioni.

### 6. Requisiti tecnici finali

- Nessuna dipendenza da backend/server: tutto client-side (HTML/CSS/JS puro), così l'utente può ospitarlo dove vuole (Netlify, Vercel, GitHub Pages, hosting statico qualsiasi).
- Nessun tracking, nessun cookie non necessario.
- Accessibilità: contrasto colori adeguato (WCAG AA), `alt` text sulle immagini, focus states visibili sui bottoni.
- Performance: nessuna immagine pesante non ottimizzata; usa SVG per icone.
- Il codice deve essere pulito, commentato, diviso in file separati (`index.html`, `style.css`, `script.js`, `i18n.js`, `parlamentari_by_region.json`).
- Aggiungi un piccolo contatore locale (in `localStorage`, solo lato client, nessun tracking esterno) che mostra "Hai generato N email da questo dispositivo" per dare un feedback di completamento all'utente — non è un contatore globale né condiviso.

---

## File da fornire ad Antigravity insieme al prompt

Allega anche il file `parlamentari_by_region.json` (lo trovi qui sotto, generato dai tuoi dati) — mettilo nella cartella del progetto prima di far partire Antigravity, così può leggerlo direttamente.
