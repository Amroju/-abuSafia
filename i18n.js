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
      "Medico, direttore dell'ospedale Kamal Adwan a Gaza. Detenuto senza processo dal 27 dicembre 2024. La sua vita è in pericolo immediato.",
    hero_cta: "Agisci ora",

    // Who is
    who_title: "Chi è il Dott. Hussam Abu Safiya",
    who_body:
      "Il Dott. Hussam Abu Safiya è il direttore dell'ospedale Kamal Adwan, uno dei pochi ospedali ancora in funzione nel nord della Striscia di Gaza. Medico da decenni, ha continuato a operare in condizioni estreme durante il conflitto, diventando un simbolo della resistenza umanitaria e della dedizione alla vita umana. È padre di famiglia e un punto di riferimento per la comunità medica palestinese e internazionale.",
    quote_text: "«La medicina non è solo una professione, è una promessa di proteggere la vita ad ogni costo, anche sotto il peso schiacciante della guerra.»",

    // Problem
    problem_title: "Qual è il problema",
    problem_body:
      "Il 27 dicembre 2024, le forze israeliane hanno fatto irruzione nell'ospedale Kamal Adwan, arrestando il Dott. Abu Safiya insieme ad altro personale medico e pazienti. Da quel momento è detenuto senza accuse formali né processo, ai sensi della legge israeliana sui «combattenti nemici illegali». Il 10 giugno 2026, la Corte Suprema israeliana ha respinto il suo appello e prolungato la detenzione. Fino ad allora era detenuto nel carcere di Ktzi'ot; è poi stato trasferito in isolamento nel carcere di Ganot e, il 24 giugno 2026, nella struttura sotterranea di interrogatorio Rakefet nel carcere di Nitzan.\n\nDurante una visita legale del 2 luglio 2026, l'avvocato Nasser Odeh lo ha trovato incatenato mani e piedi, con gravi ferite fresche a testa, occhi, orecchie e collo — al punto da faticare a riconoscerlo. Il Dott. Abu Safiya aveva difficoltà a respirare e parlare, appariva estremamente debole ed è più volte sembrato sul punto di perdere conoscenza. Ha riferito al suo avvocato di essere stato aggredito con un martello e bastoni subito dopo l'udienza del 10 giugno, e di subire pestaggi quotidiani dal 24 giugno, senza cure mediche adeguate.\n\nIl caso si inserisce in un contesto più ampio: il 30 marzo 2026 la Knesset ha approvato una legge che amplia il ricorso alla pena di morte, applicata in modo pressoché esclusivo a palestinesi giudicati da tribunali militari con garanzie processuali ridotte. Amnesty International e l'Alto Commissario ONU per i Diritti Umani, Volker Türk, ne hanno chiesto l'abrogazione.",
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
    input_gender_label: "Come vuoi firmarti?",
    gender_neutral: "Le sarei grato/a (Neutro)",
    gender_male: "Le sarei grato (Maschile)",
    gender_female: "Le sarei grata (Femminile)",

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
      "Doctor and director of Kamal Adwan Hospital in Gaza. Detained without trial since December 27, 2024. His life is in immediate danger.",
    hero_cta: "Act now",

    who_title: "Who is Dr. Hussam Abu Safiya",
    who_body:
      "Dr. Hussam Abu Safiya is the director of Kamal Adwan Hospital, one of the few hospitals still operating in northern Gaza. A doctor for decades, he continued working under extreme conditions throughout the conflict, becoming a symbol of humanitarian resistance and dedication to human life. He is a family man and a reference point for the Palestinian and international medical community.",
    quote_text: "«Medicine is not just a profession, it is a promise to protect life at all costs, even under the crushing weight of war.»",

    problem_title: "What is the problem",
    problem_body:
      "On December 27, 2024, Israeli forces raided Kamal Adwan Hospital, arresting Dr. Abu Safiya along with other medical staff and patients. Since then he has been held without formal charges or trial, under the Israeli law on «unlawful enemy combatants». On June 10, 2026, the Israeli Supreme Court rejected his appeal and extended his detention. He had been held in Ktzi'ot prison, then transferred in isolation to Ganot prison, and on June 24, 2026, to the underground interrogation facility Rakefet at Nitzan prison.\n\nDuring a legal visit on July 2, 2026, his lawyer Nasser Odeh found him chained hand and foot, with serious fresh wounds on his head, eyes, ears and neck — to the point of barely recognizing him. Dr. Abu Safiya had difficulty breathing and speaking, appeared extremely weak, and repeatedly seemed on the verge of losing consciousness. He told his lawyer he was attacked with a hammer and sticks right after the June 10 hearing, and has been beaten daily since June 24 without adequate medical care.\n\nThis case is part of a broader context: on March 30, 2026, the Knesset passed a law expanding the use of the death penalty, applied almost exclusively to Palestinians tried by military courts with reduced procedural guarantees. Amnesty International and UN High Commissioner for Human Rights Volker Türk have called for its repeal.",
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
    input_gender_label: "How do you wish to sign?",
    gender_neutral: "Le sarei grato/a (Neutral)",
    gender_male: "Le sarei grato (Male)",
    gender_female: "Le sarei grata (Female)",

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
      "طبيب ومدير مستشفى كمال عدوان في غزة. معتقل دون محاكمة منذ 27 ديسمبر 2024. حياته في خطر داهم.",
    hero_cta: "تصرّف الآن",

    who_title: "من هو الدكتور حسام أبو صفية",
    who_body:
      "الدكتور حسام أبو صفية هو مدير مستشفى كمال عدوان، أحد المستشفيات القليلة التي لا تزال تعمل في شمال قطاع غزة. ظل يعمل في ظروف بالغة القسوة طوال فترة النزاع، وأصبح رمزاً للمقاومة الإنسانية والتفاني في الحفاظ على الحياة البشرية. وهو رجل عائلة ومرجع للمجتمع الطبي الفلسطيني والدولي.",
    quote_text: "«الطب ليس مجرد مهنة، بل هو عهدٌ بحماية الحياة مهما كان الثمن، حتى تحت وطأة الحرب الساحقة.»",

    problem_title: "ما هي المشكلة",
    problem_body:
      "في 27 ديسمبر 2024، اقتحمت قوات الاحتلال الإسرائيلي مستشفى كمال عدوان واعتقلت الدكتور أبو صفية مع عدد من الكوادر الطبية والمرضى. ومنذ ذلك الحين هو رهن الاعتقال دون توجيه اتهامات رسمية أو محاكمة، استناداً إلى قانون «المقاتلين العدائيين غير الشرعيين» الإسرائيلي. في 10 يونيو 2026، رفضت المحكمة العليا الإسرائيلية استئنافه ومددت فترة احتجازه. ثم نُقل إلى سجن غانوت في عزل تام، وفي 24 يونيو 2026 إلى منشأة الاستجواب تحت الأرض «راكيفيت» في سجن نيتسان.\n\nخلال زيارة قانونية في 2 يوليو 2026، وجده محاميه ناصر عودة مكبّلاً يدين وقدمين، يحمل جروحاً طازجة بالغة في رأسه وعينيه وأذنيه ورقبته، حتى كاد لا يتعرف عليه. كان يعاني من صعوبة في التنفس والكلام، وبدا في غاية الوهن، وفقد وعيه مرات عدة. وأخبر محاميه بأنه تعرض للضرب بمطرقة وهراوات عقب جلسة 10 يونيو مباشرةً، وأنه يتعرض للضرب اليومي منذ 24 يونيو دون رعاية طبية كافية.\n\nتأتي هذه القضية في سياق أشمل: إذ أقرّ الكنيست الإسرائيلي في 30 مارس 2026 قانوناً يوسّع تطبيق عقوبة الإعدام بصورة تطال الفلسطينيين شبه حصرياً في المحاكم العسكرية ذات الضمانات الإجرائية المنقوصة. وطالبت منظمة العفو الدولية والمفرد السامي للأمم المتحدة لحقوق الإنسان فولكر تورك بإلغائه.",
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
    input_gender_label: "صيغة المُرسل:",
    gender_neutral: "Le sarei grato/a (مُحايد)",
    gender_male: "Le sarei grato (مُذكّر)",
    gender_female: "Le sarei grata (مُؤنث)",

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

{NAME}
{ADDRESS}
{EMAIL}`;

// Esporta
window.TRANSLATIONS = TRANSLATIONS;
window.EMAIL_SUBJECT = EMAIL_SUBJECT;
window.EMAIL_BODY_DEFAULT = EMAIL_BODY_DEFAULT;
