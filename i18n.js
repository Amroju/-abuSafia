/**
 * i18n.js — Traduzioni IT / EN / AR
 * La lingua dell'email ai parlamentari è SEMPRE in italiano,
 * indipendentemente dalla lingua selezionata.
 */

const TRANSLATIONS = {
  it: {
    // Labels
    hero_tag: "Campagna diritti umani — Azione urgente",
    label_situazione: "Situazione",
    label_dati: "Dati",
    label_azione: "Azione",
    label_documentazione: "Documentazione",

    // Header / Nav
    nav_title: "Libertà per Abu Safiya",
    lang_label: "Lingua",

    // Hero
    hero_title: "Liberate il Dott. Hussam Abu Safiya",
    hero_subtitle:
      "Medico, direttore dell'ospedale Kamal Adwan a Gaza. Detenuto senza processo dal 27 dicembre 2024, oggi in pericolo di vita — mentre una nuova legge israeliana amplia il ricorso alla pena di morte contro i palestinesi come lui.",
    hero_cta: "Agisci ora",

    // Who is
    who_title: "Chi è il Dott. Hussam Abu Safiya",
    who_body:
      "Il Dott. Hussam Abu Safiya è il direttore dell'ospedale Kamal Adwan, uno dei pochi ospedali ancora in funzione nel nord della Striscia di Gaza. Medico da decenni, ha continuato a operare in condizioni estreme durante il conflitto, diventando un simbolo della resistenza umanitaria e della dedizione alla vita umana. È padre di famiglia e un punto di riferimento per la comunità medica palestinese e internazionale.",
    quote_text: "«La medicina non è solo una professione, è una promessa di proteggere la vita ad ogni costo, anche sotto il peso schiacciante della guerra.»",

    // Problem
    problem_title: "Qual è il problema",
    problem_body:
      "Il Dott. Hussam Abu Safiya è il direttore dell'ospedale Kamal Adwan, nel nord di Gaza. È stato arrestato dalle forze israeliane il 27 dicembre 2024, durante l'irruzione nell'ospedale, insieme ad altro personale medico e pazienti. È detenuto da allora senza accuse formali né processo, ai sensi della legge israeliana sui \"combattenti nemici illegali\".\n\nIl 10 giugno 2026 la Corte Suprema israeliana ha respinto il suo appello, estendendo la sua detenzione — pochi mesi dopo che, il 30 marzo 2026, la Knesset aveva approvato una legge che amplia il ricorso alla pena di morte, applicata in modo pressoché esclusivo a palestinesi giudicati da tribunali militari, con garanzie processuali ridotte rispetto agli standard internazionali. Amnesty International e l'Alto Commissario ONU per i Diritti Umani, Volker Türk, hanno chiesto l'abrogazione della legge, definendola discriminatoria. È in questo quadro giuridico sempre più duro che si aggrava, nelle settimane successive, la vicenda del Dott. Abu Safiya.\n\nFino a inizio giugno 2026 era detenuto nel carcere di Ktzi'ot; è poi stato trasferito in isolamento nel carcere di Ganot e, il 24 giugno 2026, nella struttura sotterranea di interrogatorio Rakefet nel carcere di Nitzan. Secondo l'organizzazione Physicians for Human Rights Israel (PHRI) e il suo avvocato Nasser Odeh, dopo questi trasferimenti le sue condizioni sono gravemente peggiorate.\n\nDurante una visita legale del 2 luglio 2026, l'avvocato Odeh lo ha trovato incatenato mani e piedi, con gravi ferite fresche a testa, occhi, orecchie e collo — al punto da faticare a riconoscerlo. Il Dott. Abu Safiya aveva difficoltà a respirare e parlare, appariva estremamente debole ed è più volte sembrato sul punto di perdere conoscenza.\n\nHa riferito al suo avvocato di essere stato aggredito con un martello e bastoni da guardie carcerarie subito dopo l'udienza d'appello del 10 giugno 2026, e di aver subito pestaggi quotidiani dal 24 giugno, con più episodi di perdita di coscienza, senza cure mediche adeguate. Ha espresso il timore di essere stato portato in quella struttura per essere ucciso, temendo di non sopravvivere.\n\nL'avvocato Odeh ha presentato un ricorso urgente al Servizio Penitenziario israeliano; PHRI ha inviato appelli urgenti al Procuratore Generale, al Commissario del Servizio Penitenziario, al Difensore Pubblico e alle commissioni parlamentari competenti, chiedendo una visita indipendente e una valutazione medica urgente. La sua storia rende visibile, in un caso concreto e attuale, ciò che rischia di diventare sempre più comune per i detenuti palestinesi sotto un sistema giudiziario che si sta inasprendo.",
    timeline_title: "Cronologia",
    timeline: [
      { date: "27 dic 2024", text: "Arresto nell'ospedale Kamal Adwan" },
      {
        date: "30 mar 2026",
        text: "La Knesset approva la legge sulla pena di morte",
      },
      {
        date: "10 giu 2026",
        text: "La Corte Suprema israeliana respinge il suo appello",
      },
      { date: "24 giu 2026", text: "Trasferimento alla struttura di Rakefet (Nitzan)" },
      {
        date: "2 lug 2026",
        text: "L'avvocato Odeh lo trova in condizioni gravissime durante la visita legale",
      },
    ],

    // Stats
    stats_title: "I dati sui detenuti palestinesi",
    stats_source: "Fonte: Addameer, aggiornamento 13 maggio 2026",
    stats_note:
      "I dati sui detenuti cambiano frequentemente e possono variare in base alla fonte. Il numero dei detenuti di Gaza classificati come «unlawful combatants» potrebbe non includere tutte le persone trattenute nei centri gestiti dall'esercito israeliano (fonte: Addameer, HaMoked).",
    stats_headers: ["Categoria", "Numero"],
    stats_rows: [
      ["Totale prigionieri politici palestinesi", "9.400"],
      ["Donne detenute", "87"],
      ["Minori detenuti", "360"],
      ["Detenzione amministrativa (senza accusa né processo)", "3.376"],
      ["Detenuti di Gaza classificati «unlawful combatants»", "1.283"],
    ],

    // Action
    action_title: "Cosa puoi fare",
    action_intro:
      "Puoi scrivere ai parlamentari italiani della tua regione. Seleziona la tua regione, personalizza il testo se vuoi, poi apri la tua email e invia.",
    region_label: "Seleziona la tua regione",
    region_placeholder: "— Scegli una regione —",
    recipients_info: "Il messaggio sarà inviato a",
    recipients_suffix: "parlamentari",
    list_toggle_show: "Mostra destinatari",
    list_toggle_hide: "Nascondi destinatari",
    email_text_label: "Testo dell'email (puoi modificarlo prima di inviare):",
    send_btn: "Apri la tua email e invia ora",
    send_group_btn: "Invia gruppo",
    send_group_of: "di",
    all_parliament_title: "Vuoi scrivere a tutti i parlamentari italiani?",
    all_parliament_intro:
      "Se vuoi coprire tutto il Parlamento, usa i pulsanti qui sotto. I destinatari sono divisi in gruppi da ~25 per rispettare i limiti dei client email.",
    all_parliament_btn: "Invia gruppo",
    counter_label: "Hai generato",
    counter_suffix: "email da questo dispositivo",
    global_counter_label: "Persone hanno già scritto ai parlamentari",
    camera_label: "Camera",
    senate_label: "Senato",
    deselect_all: "Deseleziona tutti",
    select_all: "Seleziona tutti",
    input_name_label: "Nome e cognome",
    input_name_placeholder: "Es. Mario Rossi",
    input_address_label: "Indirizzo o CAP",
    input_address_note: "Serve a dimostrare che sei un elettore/un'elettrice",
    input_address_placeholder: "Es. 00100 Roma",
    input_email_label: "La tua email",
    input_email_placeholder: "es. mario@email.com",
    preview_label: "Anteprima del messaggio",
    error_required: "Questo campo è obbligatorio",
    error_email: "Inserisci un indirizzo email valido",
    personal_send_btn: "Invia email personale",
    input_gender_label: "Sei...",
    gender_male: "Uomo",
    gender_female: "Donna",

    // Sources
    sources_title: "Fonti",

    // Footer
    footer_legal:
      "Questa pagina è uno strumento di advocacy civile. Non raccoglie dati personali né installa cookie. L'invio delle email avviene esclusivamente tramite il tuo client email personale.",
    footer_action: "Liberiamo il Dott. Abu Safiya",
    
    // Share Modal
    share_title: "Grazie per aver agito!",
    share_body: "Il tuo messaggio è stato generato. Ora moltiplica il tuo impatto: chiedi ai tuoi amici di fare lo stesso condividendo questa campagna.",
    share_wa: "Condividi su WhatsApp",
    share_tw: "Condividi su X",
    share_fb: "Condividi su Facebook",
  },

  en: {
    // Labels
    hero_tag: "Human Rights Campaign — Urgent Action",
    label_situazione: "Situation",
    label_dati: "Data",
    label_azione: "Action",
    label_documentazione: "Documentation",

    nav_title: "Free Abu Safiya",
    lang_label: "Language",

    hero_title: "Free Dr. Hussam Abu Safiya",
    hero_subtitle:
      "Doctor, director of the Kamal Adwan hospital in Gaza. Detained without trial since December 27, 2024, now in imminent danger of life — while a new Israeli law expands the use of the death penalty against Palestinians like him.",
    hero_cta: "Act now",

    who_title: "Who is Dr. Hussam Abu Safiya",
    who_body:
      "Dr. Hussam Abu Safiya is the director of Kamal Adwan Hospital, one of the few hospitals still operating in northern Gaza. A doctor for decades, he continued working under extreme conditions throughout the conflict, becoming a symbol of humanitarian resistance and dedication to human life. He is a family man and a reference point for the Palestinian and international medical community.",
    quote_text: "«Medicine is not just a profession, it is a promise to protect life at all costs, even under the crushing weight of war.»",

    problem_title: "What is the problem",
    problem_body:
      "Dr. Hussam Abu Safiya is the director of the Kamal Adwan hospital in northern Gaza. He was arrested by Israeli forces on December 27, 2024, during a raid on the hospital, along with other medical staff and patients. He has been detained ever since without formal charges or trial, under the Israeli law on \"unlawful enemy combatants\".\n\nOn June 10, 2026, the Israeli Supreme Court rejected his appeal, extending his detention — a few months after the Knesset passed a law on March 30, 2026, that expands the use of the death penalty, applied almost exclusively to Palestinians judged by military courts, with reduced procedural guarantees compared to international standards. Amnesty International and the UN High Commissioner for Human Rights, Volker Türk, have called for the law's repeal, calling it discriminatory. It is within this increasingly harsh legal framework that Dr. Abu Safiya's case worsens in the following weeks.\n\nUntil early June 2026, he was held in Ktzi'ot prison; he was then transferred to solitary confinement in Ganot prison and, on June 24, 2026, to the Rakefet underground interrogation facility in Nitzan prison. According to Physicians for Human Rights Israel (PHRI) and his lawyer Nasser Odeh, his condition has severely deteriorated following these transfers.\n\nDuring a legal visit on July 2, 2026, lawyer Odeh found him shackled hand and foot, with severe fresh wounds to his head, eyes, ears, and neck — to the point of struggling to recognize him. Dr. Abu Safiya had difficulty breathing and speaking, appeared extremely weak, and seemed on the verge of losing consciousness several times.\n\nHe reported to his lawyer that he was attacked with a hammer and clubs by prison guards immediately after the June 10, 2026 appeal hearing, and that he has endured daily beatings since June 24, with multiple episodes of losing consciousness, without adequate medical care. He expressed the fear of having been brought to that facility to be killed, fearing he would not survive.\n\nLawyer Odeh filed an urgent petition with the Israeli Prison Service; PHRI sent urgent appeals to the Attorney General, the Prison Service Commissioner, the Public Defender, and the relevant parliamentary committees, demanding an independent visit and an urgent medical assessment. His story makes visible, in a concrete and current case, what risks becoming increasingly common for Palestinian detainees under an increasingly harsh judicial system.",
    timeline_title: "Timeline",
    timeline: [
      { date: "Dec 27, 2024", text: "Arrested at Kamal Adwan Hospital" },
      { date: "Mar 30, 2026", text: "Knesset passes the death penalty law" },
      {
        date: "Jun 10, 2026",
        text: "Israeli Supreme Court rejects his appeal",
      },
      {
        date: "Jun 24, 2026",
        text: "Transferred to Rakefet underground facility (Nitzan)",
      },
      {
        date: "Jul 2, 2026",
        text: "Lawyer Odeh finds him in critical condition during legal visit",
      },
    ],

    stats_title: "Data on Palestinian detainees",
    stats_source: "Source: Addameer, updated May 13, 2026",
    stats_note:
      "Data on detainees changes frequently and may vary by source. The number of Gaza detainees classified as «unlawful combatants» may not include all persons held in Israeli military-run facilities (source: Addameer, HaMoked).",
    stats_headers: ["Category", "Number"],
    stats_rows: [
      ["Total Palestinian political prisoners", "9,400"],
      ["Women detained", "87"],
      ["Children detained", "360"],
      ["Administrative detention (without charge or trial)", "3,376"],
      ["Gaza detainees classified as «unlawful combatants»", "1,283"],
    ],

    action_title: "What you can do",
    action_intro:
      "You can write to Italian members of parliament from your region. Select your region, customize the text if you wish, then open your email and send. Note: the email is always in Italian, as it is addressed to Italian parliamentarians.",
    region_label: "Select your region",
    region_placeholder: "— Choose a region —",
    recipients_info: "The message will be sent to",
    recipients_suffix: "parliamentarians",
    list_toggle_show: "Show recipients",
    list_toggle_hide: "Hide recipients",
    email_text_label: "Email text (you can edit it before sending):",
    send_btn: "Open your email and send now",
    send_group_btn: "Send group",
    send_group_of: "of",
    all_parliament_title: "Want to write to all Italian parliamentarians?",
    all_parliament_intro:
      "If you want to cover the entire Parliament, use the buttons below. Recipients are split into groups of ~25 to respect email client limits.",
    all_parliament_btn: "Send group",
    counter_label: "You have generated",
    counter_suffix: "emails from this device",
    global_counter_label: "People have already written to MPs",
    camera_label: "Chamber",
    senate_label: "Senate",
    deselect_all: "Deselect all",
    select_all: "Select all",
    input_name_label: "Full Name",
    input_name_placeholder: "e.g. John Doe",
    input_address_label: "Address or ZIP Code",
    input_address_note: "Proves you are a constituent",
    input_address_placeholder: "e.g. 10001 New York",
    input_email_label: "Your Email",
    input_email_placeholder: "e.g. john@email.com",
    preview_label: "Message Preview",
    error_required: "This field is required",
    error_email: "Please enter a valid email address",
    personal_send_btn: "Send personal email",
    input_gender_label: "You are...",
    gender_male: "Man",
    gender_female: "Woman",

    sources_title: "Sources",

    footer_legal:
      "This page is a civil advocacy tool. It does not collect personal data or install cookies. Emails are sent exclusively through your own email client.",
    footer_action: "Amnesty International — Sign the petition",
    
    // Share Modal
    share_title: "Thanks for taking action!",
    share_body: "Your message has been generated. Now multiply your impact: ask your friends to do the same by sharing this campaign.",
    share_wa: "Share on WhatsApp",
    share_tw: "Share on X",
    share_fb: "Share on Facebook",
  },

  ar: {
    // Labels
    hero_tag: "حملة حقوق الإنسان — تحرك عاجل",
    label_situazione: "الوضع الحالي",
    label_dati: "البيانات",
    label_azione: "تحرك الآن",
    label_documentazione: "التوثيق",

    nav_title: "الحرية لأبو صفية",
    lang_label: "اللغة",

    hero_title: "أطلقوا سراح الدكتور حسام أبو صفية",
    hero_subtitle:
      "طبيب، ومدير مستشفى كمال عدوان في غزة. معتقل بدون محاكمة منذ 27 ديسمبر 2024، وحياته الآن في خطر محدق — في حين يُوسّع قانون إسرائيلي جديد نطاق تطبيق عقوبة الإعدام ضد الفلسطينيين أمثاله.",
    hero_cta: "تصرّف الآن",

    who_title: "من هو الدكتور حسام أبو صفية",
    who_body:
      "الدكتور حسام أبو صفية هو مدير مستشفى كمال عدوان، أحد المستشفيات القليلة التي لا تزال تعمل في شمال قطاع غزة. ظل يعمل في ظروف بالغة القسوة طوال فترة النزاع، وأصبح رمزاً للمقاومة الإنسانية والتفاني في الحفاظ على الحياة البشرية. وهو رجل عائلة ومرجع للمجتمع الطبي الفلسطيني والدولي.",
    quote_text: "«الطب ليس مجرد مهنة، بل هو عهدٌ بحماية الحياة مهما كان الثمن، حتى تحت وطأة الحرب الساحقة.»",

    problem_title: "ما هي المشكلة",
    problem_body:
      "الدكتور حسام أبو صفية هو مدير مستشفى كمال عدوان في شمال غزة. اعتقلته القوات الإسرائيلية في 27 ديسمبر 2024، خلال اقتحامها للمستشفى، مع طواقم طبية أخرى ومرضى. وهو معتقل منذ ذلك الحين دون تهم رسمية أو محاكمة، بموجب القانون الإسرائيلي الخاص بـ \"المقاتلين الأعداء غير الشرعيين\".\n\nفي 10 يونيو 2026، رفضت المحكمة العليا الإسرائيلية استئنافه، ومددت فترة اعتقاله — بعد بضعة أشهر من إقرار الكنيست في 30 مارس 2026 لقانون يوسع من استخدام عقوبة الإعدام، والتي تُطبق بشكل شبه حصري على الفلسطينيين الذين يُحاكمون أمام المحاكم العسكرية، مع ضمانات إجرائية منخفضة مقارنة بالمعايير الدولية. وطالبت منظمة العفو الدولية والمفوض السامي للأمم المتحدة لحقوق الإنسان، فولكر تورك، بإلغاء القانون واصفين إياه بالتمييزي. في هذا الإطار القانوني المتشدد بشكل متزايد، تفاقمت قضية الدكتور أبو صفية في الأسابيع التالية.\n\nحتى أوائل يونيو 2026، كان محتجزاً في سجن كتسيعوت؛ ثم نُقل إلى العزل الانفرادي في سجن جانوت، وفي 24 يونيو 2026 إلى منشأة راكيفيت للتحقيق تحت الأرض في سجن نيتسان. ووفقاً لمنظمة أطباء من أجل حقوق الإنسان في إسرائيل (PHRI) ومحاميه ناصر عودة، تدهورت حالته الصحية بشكل خطير بعد عمليات النقل هذه.\n\nخلال زيارة قانونية في 2 يوليو 2026، وجده المحامي عودة مقيد اليدين والقدمين، ومصاباً بجروح حديثة وخطيرة في الرأس والعينين والأذنين والرقبة — لدرجة أنه بالكاد استطاع التعرف عليه. كان الدكتور أبو صفية يجد صعوبة في التنفس والتحدث، وبدا ضعيفاً للغاية، وبدا على وشك فقدان الوعي عدة مرات.\n\nوأبلغ محاميه أنه تعرض لاعتداء بمطرقة وهراوات من قبل حراس السجن فور انتهاء جلسة الاستئناف في 10 يونيو 2026، وأنه تعرض لضرب مبرح يومياً منذ 24 يونيو، مع فقدانه الوعي عدة مرات، دون تلقي رعاية طبية مناسبة. وأعرب عن خشيته من إحضاره إلى تلك المنشأة لقتله، مبدياً خوفه من عدم النجاة.\n\nقدم المحامي عودة التماساً عاجلاً إلى مصلحة السجون الإسرائيلية؛ وأرسلت منظمة أطباء من أجل حقوق الإنسان نداءات عاجلة إلى النائب العام ومفوض مصلحة السجون والمحامي العام واللجان البرلمانية ذات الصلة، مطالبة بزيارة مستقلة وتقييم طبي عاجل. إن قصته تجعل ما يهدد بأن يصبح شائعاً بشكل متزايد للمحتجزين الفلسطينيين في ظل نظام قضائي يزداد قسوة، ملموساً وحاضراً من خلال حالة فعلية.",
    timeline_title: "الجدول الزمني",
    timeline: [
      { date: "27 ديسمبر 2024", text: "الاعتقال في مستشفى كمال عدوان" },
      {
        date: "30 مارس 2026",
        text: "الكنيست يُقرّ قانون عقوبة الإعدام",
      },
      {
        date: "10 يونيو 2026",
        text: "المحكمة العليا الإسرائيلية ترفض استئنافه",
      },
      {
        date: "24 يونيو 2026",
        text: "النقل إلى منشأة راكيفيت تحت الأرض (نيتسان)",
      },
      {
        date: "2 يوليو 2026",
        text: "المحامي عودة يجده في حالة بالغة الخطورة خلال الزيارة القانونية",
      },
    ],

    stats_title: "بيانات المعتقلين الفلسطينيين",
    stats_source: "المصدر: أضمير، تحديث 13 مايو 2026",
    stats_note:
      "تتغير أرقام المعتقلين بشكل متكرر وقد تتباين من مصدر لآخر. قد لا يشمل عدد معتقلي غزة المصنّفين «مقاتلين غير شرعيين» جميع المحتجزين في مراكز تديرها المؤسسة العسكرية الإسرائيلية (المصدر: أضمير، هاموكيد).",
    stats_headers: ["الفئة", "العدد"],
    stats_rows: [
      ["مجموع السجناء السياسيين الفلسطينيين", "9,400"],
      ["النساء المعتقلات", "87"],
      ["الأطفال المعتقلون", "360"],
      ["الاعتقال الإداري (دون اتهام أو محاكمة)", "3,376"],
      ["معتقلو غزة المصنّفون «مقاتلين غير شرعيين»", "1,283"],
    ],

    action_title: "ماذا يمكنك أن تفعل",
    action_intro:
      "يمكنك الكتابة إلى البرلمانيين الإيطاليين في منطقتك. اختر منطقتك، عدّل النص إن شئت، ثم افتح بريدك الإلكتروني وأرسل. ملاحظة: الرسالة دائماً بالإيطالية لأن المُرسَل إليهم برلمانيون إيطاليون.",
    region_label: "اختر منطقتك",
    region_placeholder: "— اختر منطقة —",
    recipients_info: "ستُرسل الرسالة إلى",
    recipients_suffix: "برلمانياً",
    list_toggle_show: "عرض المستلمين",
    list_toggle_hide: "إخفاء المستلمين",
    email_text_label: "نص الرسالة (يمكنك تعديله قبل الإرسال):",
    send_btn: "افتح بريدك الإلكتروني وأرسل الآن",
    send_group_btn: "إرسال المجموعة",
    send_group_of: "من",
    all_parliament_title: "هل تريد الكتابة لجميع البرلمانيين الإيطاليين؟",
    all_parliament_intro:
      "إن أردت تغطية البرلمان كاملاً، استخدم الأزرار أدناه. المستلمون مقسّمون إلى مجموعات من ~25 لاحترام حدود برامج البريد الإلكتروني.",
    all_parliament_btn: "إرسال المجموعة",
    counter_label: "لقد أنشأت",
    counter_suffix: "رسالة من هذا الجهاز",
    global_counter_label: "أشخاص أرسلوا للمسؤولين بالفعل",
    camera_label: "مجلس النواب",
    senate_label: "مجلس الشيوخ",
    deselect_all: "إلغاء تحديد الكل",
    select_all: "تحديد الكل",
    input_name_label: "الاسم الكامل",
    input_name_placeholder: "مثال: أحمد محمد",
    input_address_label: "العنوان أو الرمز البريدي",
    input_address_note: "يُثبت أنك ناخب مسجل",
    input_address_placeholder: "مثال: 00100 روما",
    input_email_label: "البريد الإلكتروني",
    input_email_placeholder: "ahmad@email.com :مثال",
    preview_label: "معاينة الرسالة",
    error_required: "هذا الحقل مطلوب",
    error_email: "يرجى إدخال بريد إلكتروني صالح",
    personal_send_btn: "إرسال رسالة شخصية",
    input_gender_label: "أنت...",
    gender_male: "رجل",
    gender_female: "امرأة",

    sources_title: "المصادر",

    footer_legal:
      "هذه الصفحة أداة مناصرة مدنية. لا تجمع بيانات شخصية ولا تثبّت ملفات تعريف الارتباط. يتم إرسال الرسائل حصراً عبر برنامج البريد الإلكتروني الخاص بك.",
    footer_action: "منظمة العفو الدولية — وقّع العريضة",
    
    // Share Modal
    share_title: "شكراً لك على التحرك!",
    share_body: "تم إنشاء رسالتك بنجاح. الآن يمكنك مضاعفة تأثيرك: اطلب من أصدقائك القيام بالمثل عبر مشاركة هذه الحملة.",
    share_wa: "شارك عبر واتساب",
    share_tw: "شارك عبر X",
    share_fb: "شارك عبر فيسبوك",
  },
};

// Testo email — SEMPRE in italiano, non tradurre mai
const EMAIL_SUBJECT =
  "Azione urgente contro la pena di morte in Israele e per i diritti dei detenuti palestinesi";

const EMAIL_BODY_DEFAULT = `Gentile Parlamentare,

Le scrivo per chiederLe un intervento urgente contro la nuova legge israeliana sulla pena di morte e per la tutela delle cittadine e dei cittadini palestinesi detenuti da Israele. Mi oppongo alla pena di morte in ogni circostanza: è una punizione irreversibile, crudele e disumana, incompatibile con il diritto alla vita e con la dignità umana. Secondo Amnesty International e l’Alto Commissario ONU per i Diritti Umani, la recente normativa israeliana amplia il ricorso alla pena capitale in modo discriminatorio, con effetti quasi esclusivamente sui palestinesi e con gravi rischi per il diritto a un processo equo.

Le chiedo quindi di sollecitare il Governo italiano affinché:
- condanni pubblicamente la legge israeliana sulla pena di morte e chieda la sua immediata abrogazione;
- agisca in sede diplomatica ed europea per prevenire qualsiasi esecuzione di prigionieri palestinesi;
- chieda l’accesso immediato e regolare del Comitato Internazionale della Croce Rossa a tutti i detenuti palestinesi;
- sostenga il rilascio immediato di Marwan Barghouti, in linea con l’ultima decisione dell’Unione Interparlamentare;
- chieda il rilascio immediato e incondizionato del dott. Hussam Abu Safiya e degli operatori sanitari palestinesi detenuti arbitrariamente;
- promuova indagini indipendenti su torture, maltrattamenti, negligenza medica e detenzioni arbitrarie, e sostenga misure concrete perché Israele rispetti il diritto internazionale umanitario e dei diritti umani.

Nella pagina seguente ho raccolto le fonti principali e i dati aggiornati sui detenuti, inclusi il numero di donne e minori palestinesi in prigionia.

Le sarei {GRATO_GRATA} se mi comunicasse quali iniziative intende intraprendere.

Grazie per l'attenzione,
distinti saluti,

{NAME}
{ADDRESS}
{EMAIL}`;

// Esporta
window.TRANSLATIONS = TRANSLATIONS;
window.EMAIL_SUBJECT = EMAIL_SUBJECT;
window.EMAIL_BODY_DEFAULT = EMAIL_BODY_DEFAULT;
