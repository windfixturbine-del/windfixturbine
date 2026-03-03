// WindFixTurbine GmbH — Enterprise site JS
// - i18n (PL/DE/EN)
// - language auto-detect + remember
// - smooth scroll
// - reveal-on-scroll animations (IntersectionObserver)
// - quick inquiry -> mailto

const EMAIL = "windfixturbine@gmail.com";

const I18N = {
  en: {
    nav_about:"About", nav_offer:"Offer", nav_process:"Process", nav_faq:"FAQ", nav_contact:"Contact", nav_email:"Email",
    badge_world:"Global coverage",
    hero_h1_a:"Import & export of", hero_h1_b:"wind turbines",
    hero_lead:"We supply 6MW-class wind turbines and support the full commercial & logistics workflow — from inquiry to delivery. Pricing and availability are provided upon email request.",
    hero_cta_quote:"Request quotation", hero_cta_offer:"View offer", hero_contact_label:"Contact",
    panel_title:"Company details", panel_company:"Company", panel_contact:"Contact", panel_email:"Email", panel_address:"Address",
    panel_note:"Prices are available on request. Email us with delivery location and quantity to receive an offer.",
    trust_title:"What you get", trust_sub:"A focused, B2B-ready workflow designed for clarity.",
    trust_1_t:"Worldwide operations", trust_1_p:"Import/export support across markets with documentation aligned to destination requirements.",
    trust_2_t:"Commercial clarity", trust_2_p:"Incoterms and scope aligned to your project needs — quoting via email for accuracy.",
    trust_3_t:"Logistics support", trust_3_p:"Heavy transport coordination and structured handover for complex deliveries.",
    about_title:"About", about_sub:"Minimal communication. Strong delivery, documentation and execution.",
    about_card1_t:"Global operations", about_card1_m:"We work worldwide.", about_card1_p:"We support import and export of 6MW wind turbines, including availability checks, commercial steps and delivery coordination.",
    about_card2_t:"B2B workflow", about_card2_m:"Clear steps. Fast response.", about_card2_p:"Price depends on configuration, delivery terms and market conditions — therefore we quote only via email after receiving your inquiry.",
    offer_title:"Offer — 6MW turbines", offer_sub:"Example configurations. Pricing and availability only via email.",
    offer_pill_a:"6MW · Onshore", offer_a_t:"6MW Turbine — Configuration A", offer_a_m:"Standard onshore configuration for utility projects.",
    offer_pill_b:"6MW · Onshore", offer_b_t:"6MW Turbine — Configuration B", offer_b_m:"Variant for projects with specific delivery requirements.",
    offer_pill_c:"6MW · Global", offer_c_t:"6MW Turbine — Configuration C", offer_c_m:"International variant tailored to market and documentation needs.",
    spec_power:"Rated power", spec_use:"Use case", spec_onshore:"Onshore", spec_scope:"Supply scope", spec_on_request:"On request",
    spec_logistics:"Logistics", spec_heavy:"Heavy transport", spec_options:"Options", spec_custom:"Custom", spec_incoterms:"Incoterms",
    spec_agreed:"To be agreed", spec_market:"Delivery", spec_world:"Worldwide", spec_docs:"Documentation", spec_timeline:"Timeline", spec_depends:"Depends on availability",
    price_note:"Price: upon email request", offer_email_link:"Send inquiry",
    process_title:"Process", process_sub:"Simple steps, built for B2B decision-making.",
    process_1_t:"1) Email inquiry", process_1_m:"Location, quantity, timeframe.", process_1_p:"The more detail you provide, the faster we can confirm availability and prepare a quotation.",
    process_2_t:"2) Offer & terms", process_2_m:"Availability, Incoterms, documentation.", process_2_p:"We respond with commercial terms and delivery assumptions aligned with your project needs.",
    process_3_t:"3) Delivery coordination", process_3_m:"Export/import support & logistics.", process_3_p:"We support the delivery workflow according to the agreed schedule and conditions.",
    faq_title:"FAQ", faq_sub:"Most common questions from buyers.",
    faq1_q:"Why are prices not listed?", faq1_a:"Pricing depends on configuration, scope, delivery terms, documentation, and current availability. We provide accurate quotes by email.",
    faq2_q:"What should I include in the inquiry?", faq2_a:"Delivery location, quantity, preferred timeline, and if possible the desired Incoterms and any technical/documentation requirements.",
    faq3_q:"Do you operate worldwide?", faq3_a:"Yes. We support import/export globally and adapt logistics and documentation to the target market.",
    faq4_q:"How quickly do you respond?", faq4_a:"Typically within 1–2 business days, depending on the completeness of the inquiry and current availability checks.",
    contact_title:"Contact", contact_sub:"Fastest way: email inquiry. You can also use the quick form below (opens your email client).",
    contact_details:"Company details", contact_ceo:"CEO", contact_cta_email:"Email inquiry", contact_note:"We reply with availability and a tailored quotation.",
    form_title:"Quick inquiry", form_sub:"This will open your email client with a pre-filled message.",
    form_location:"Delivery location", form_qty:"Quantity", form_time:"Preferred timeline", form_msg:"Additional requirements",
    form_send:"Create email", form_priv:"No data is stored on the website — your email is created locally in your browser.",
    footer_line:"Global Wind Energy Solutions · Import & Export · 6MW Class",
    mail_subject:"6MW Inquiry",
    mail_body_intro:"Hello,\n\nPlease send availability and quotation for 6MW wind turbines.\n\n- Delivery location: ",
    mail_body_qty:"\n- Quantity: ",
    mail_body_time:"\n- Preferred timeline: ",
    mail_body_more:"\n- Additional requirements: ",
    mail_body_end:"\n\nThank you,"
  },

  pl: {
    nav_about:"O firmie", nav_offer:"Oferta", nav_process:"Proces", nav_faq:"FAQ", nav_contact:"Kontakt", nav_email:"E-mail",
    badge_world:"Obszar działania: cały świat",
    hero_h1_a:"Import i eksport", hero_h1_b:"turbin wiatrowych",
    hero_lead:"Dostarczamy turbiny wiatrowe klasy 6MW i wspieramy cały proces handlowo‑logistyczny — od zapytania po dostawę. Ceny i dostępność podajemy wyłącznie mailowo.",
    hero_cta_quote:"Zapytaj o wycenę", hero_cta_offer:"Zobacz ofertę", hero_contact_label:"Kontakt",
    panel_title:"Dane firmy", panel_company:"Firma", panel_contact:"Kontakt", panel_email:"E-mail", panel_address:"Adres",
    panel_note:"Ceny podajemy na zapytanie. Napisz maila z lokalizacją dostawy i ilością — wrócimy z ofertą.",
    trust_title:"Co dostajesz", trust_sub:"Prosty proces B2B zaprojektowany pod czytelność.",
    trust_1_t:"Globalne działania", trust_1_p:"Wsparcie importu/eksportu i dokumentacji dopasowanej do rynku docelowego.",
    trust_2_t:"Jasne warunki", trust_2_p:"Incoterms i zakres dopasowane do projektu — wycena mailowo dla dokładności.",
    trust_3_t:"Wsparcie logistyki", trust_3_p:"Koordynacja transportu ponadgabarytowego i uporządkowane przekazanie dostawy.",
    about_title:"O firmie", about_sub:"Minimalizm w komunikacji. Maksimum konkretu w dostawach i dokumentacji.",
    about_card1_t:"Globalne działania", about_card1_m:"Obsługa na całym świecie.", about_card1_p:"Wspieramy import i eksport turbin 6MW, w tym weryfikację dostępności, kroki handlowe i koordynację dostawy.",
    about_card2_t:"Proces B2B", about_card2_m:"Jasne zasady. Szybka odpowiedź.", about_card2_p:"Cena zależy od konfiguracji, warunków dostawy i rynku — dlatego wycenę przygotowujemy mailowo po otrzymaniu zapytania.",
    offer_title:"Oferta — turbiny 6MW", offer_sub:"Przykładowe konfiguracje. Cena i dostępność wyłącznie mailowo.",
    offer_pill_a:"6MW · Onshore", offer_a_t:"Turbina 6MW — konfiguracja A", offer_a_m:"Standardowa konfiguracja dla projektów lądowych.",
    offer_pill_b:"6MW · Onshore", offer_b_t:"Turbina 6MW — konfiguracja B", offer_b_m:"Wariant pod projekty o specyficznych wymaganiach dostawy.",
    offer_pill_c:"6MW · Global", offer_c_t:"Turbina 6MW — konfiguracja C", offer_c_m:"Wariant międzynarodowy dopasowany do rynku i dokumentacji.",
    spec_power:"Moc znamionowa", spec_use:"Zastosowanie", spec_onshore:"Onshore", spec_scope:"Zakres dostawy", spec_on_request:"Na zapytanie",
    spec_logistics:"Logistyka", spec_heavy:"Transport ponadgabarytowy", spec_options:"Opcje", spec_custom:"Wg potrzeb",
    spec_incoterms:"Incoterms", spec_agreed:"Do ustalenia", spec_market:"Dostawa", spec_world:"Cały świat", spec_docs:"Dokumentacja", spec_timeline:"Harmonogram", spec_depends:"Zależny od dostępności",
    price_note:"Cena: wyłącznie na zapytanie mailowe", offer_email_link:"Wyślij zapytanie",
    process_title:"Proces", process_sub:"Proste kroki, przygotowane pod decyzje B2B.",
    process_1_t:"1) Zapytanie e-mail", process_1_m:"Lokalizacja, ilość, termin.", process_1_p:"Im więcej danych w wiadomości, tym szybciej potwierdzimy dostępność i przygotujemy wycenę.",
    process_2_t:"2) Oferta i warunki", process_2_m:"Dostępność, Incoterms, dokumentacja.", process_2_p:"Wysyłamy warunki handlowe i założenia dostawy dopasowane do Twojego projektu.",
    process_3_t:"3) Koordynacja dostawy", process_3_m:"Wsparcie eksport/import i logistyka.", process_3_p:"Wspieramy przebieg dostawy zgodnie z ustalonym harmonogramem i warunkami.",
    faq_title:"FAQ", faq_sub:"Najczęstsze pytania kupujących.",
    faq1_q:"Dlaczego nie ma cen na stronie?", faq1_a:"Cena zależy od konfiguracji, zakresu, warunków dostawy, dokumentacji i dostępności. Dokładną wycenę wysyłamy mailowo.",
    faq2_q:"Co wysłać w zapytaniu?", faq2_a:"Lokalizację dostawy, ilość, preferowany termin oraz (jeśli możesz) Incoterms i wymagania techniczne/dokumentacyjne.",
    faq3_q:"Czy działacie na całym świecie?", faq3_a:"Tak. Wspieramy import/eksport globalnie, dopasowując logistykę i dokumenty do rynku docelowego.",
    faq4_q:"Jak szybko odpowiadacie?", faq4_a:"Zwykle w ciągu 1–2 dni roboczych, zależnie od kompletności zapytania i weryfikacji dostępności.",
    contact_title:"Kontakt", contact_sub:"Najszybciej: e-mail. Możesz też użyć formularza poniżej (otwiera klienta poczty).",
    contact_details:"Dane firmy", contact_ceo:"CEO", contact_cta_email:"Wyślij zapytanie", contact_note:"Odpowiemy dostępnością i dopasowaną wyceną.",
    form_title:"Szybkie zapytanie", form_sub:"Otworzy Twoją pocztę z przygotowaną treścią.",
    form_location:"Lokalizacja dostawy", form_qty:"Ilość", form_time:"Preferowany termin", form_msg:"Dodatkowe wymagania",
    form_send:"Utwórz e-mail", form_priv:"Strona niczego nie zapisuje — e-mail tworzony jest lokalnie w przeglądarce.",
    footer_line:"Global Wind Energy Solutions · Import & Export · Klasa 6MW",
    mail_subject:"Zapytanie 6MW",
    mail_body_intro:"Dzień dobry,\n\nProszę o informację dot. dostępności i wyceny turbin 6MW.\n\n- Lokalizacja dostawy: ",
    mail_body_qty:"\n- Ilość: ",
    mail_body_time:"\n- Preferowany termin: ",
    mail_body_more:"\n- Dodatkowe wymagania: ",
    mail_body_end:"\n\nZ góry dziękuję,"
  },

  de: {
    nav_about:"Über uns", nav_offer:"Angebot", nav_process:"Ablauf", nav_faq:"FAQ", nav_contact:"Kontakt", nav_email:"E‑Mail",
    badge_world:"Einsatzgebiet: weltweit",
    hero_h1_a:"Import & Export von", hero_h1_b:"Windturbinen",
    hero_lead:"Wir liefern Windkraftanlagen der 6MW‑Klasse und unterstützen den kompletten kaufmännisch‑logistischen Ablauf — von der Anfrage bis zur Lieferung. Preise und Verfügbarkeit nur per E‑Mail auf Anfrage.",
    hero_cta_quote:"Angebot anfragen", hero_cta_offer:"Angebot ansehen", hero_contact_label:"Kontakt",
    panel_title:"Unternehmensdaten", panel_company:"Unternehmen", panel_contact:"Kontakt", panel_email:"E‑Mail", panel_address:"Adresse",
    panel_note:"Preise nur auf Anfrage. Senden Sie uns Standort und Stückzahl — wir melden uns mit einem Angebot.",
    trust_title:"Was Sie bekommen", trust_sub:"Ein klarer B2B‑Prozess, optimiert für Lesbarkeit.",
    trust_1_t:"Weltweite Abwicklung", trust_1_p:"Import/Export‑Support mit Dokumentation passend zum Zielmarkt.",
    trust_2_t:"Klare Konditionen", trust_2_p:"Incoterms & Umfang passend zum Projekt — Angebot per E‑Mail für Genauigkeit.",
    trust_3_t:"Logistik‑Unterstützung", trust_3_p:"Schwertransport‑Koordination und strukturierte Übergabe bei komplexen Lieferungen.",
    about_title:"Über uns", about_sub:"Minimalistische Kommunikation. Starke Lieferung, Dokumentation und Umsetzung.",
    about_card1_t:"Weltweite Abwicklung", about_card1_m:"Wir arbeiten global.", about_card1_p:"Wir unterstützen Import und Export von 6MW‑Turbinen inklusive Verfügbarkeitsprüfung, kaufmännischen Schritten und Lieferkoordination.",
    about_card2_t:"B2B Prozess", about_card2_m:"Klare Schritte. Schnelle Rückmeldung.", about_card2_p:"Der Preis hängt von Konfiguration, Lieferbedingungen und Markt ab — daher erstellen wir Angebote ausschließlich per E‑Mail nach Ihrer Anfrage.",
    offer_title:"Angebot — 6MW Turbinen", offer_sub:"Beispiel‑Konfigurationen. Preis & Verfügbarkeit nur per E‑Mail.",
    offer_pill_a:"6MW · Onshore", offer_a_t:"6MW Turbine — Konfiguration A", offer_a_m:"Standard‑Onshore‑Konfiguration für Utility‑Projekte.",
    offer_pill_b:"6MW · Onshore", offer_b_t:"6MW Turbine — Konfiguration B", offer_b_m:"Variante für Projekte mit speziellen Lieferanforderungen.",
    offer_pill_c:"6MW · Global", offer_c_t:"6MW Turbine — Konfiguration C", offer_c_m:"Internationale Variante je nach Markt und Dokumentation.",
    spec_power:"Nennleistung", spec_use:"Einsatz", spec_onshore:"Onshore", spec_scope:"Lieferumfang", spec_on_request:"Auf Anfrage",
    spec_logistics:"Logistik", spec_heavy:"Schwertransport", spec_options:"Optionen", spec_custom:"Individuell",
    spec_incoterms:"Incoterms", spec_agreed:"Zu vereinbaren", spec_market:"Lieferung", spec_world:"Weltweit", spec_docs:"Dokumentation", spec_timeline:"Zeitplan", spec_depends:"Abhängig von Verfügbarkeit",
    price_note:"Preis: nur per E‑Mail auf Anfrage", offer_email_link:"Anfrage senden",
    process_title:"Ablauf", process_sub:"Einfache Schritte für B2B‑Entscheidungen.",
    process_1_t:"1) E‑Mail Anfrage", process_1_m:"Ort, Menge, Zeitraum.", process_1_p:"Je mehr Details, desto schneller können wir Verfügbarkeit bestätigen und ein Angebot erstellen.",
    process_2_t:"2) Angebot & Konditionen", process_2_m:"Verfügbarkeit, Incoterms, Dokumente.", process_2_p:"Wir antworten mit Konditionen und Lieferannahmen passend zu Ihrem Projekt.",
    process_3_t:"3) Lieferkoordination", process_3_m:"Export/Import‑Support & Logistik.", process_3_p:"Wir unterstützen den Lieferprozess gemäß vereinbartem Zeitplan und Bedingungen.",
    faq_title:"FAQ", faq_sub:"Häufige Fragen von Käufern.",
    faq1_q:"Warum sind keine Preise gelistet?", faq1_a:"Preise hängen von Konfiguration, Umfang, Lieferbedingungen, Dokumentation und Verfügbarkeit ab. Wir bieten nur per E‑Mail an.",
    faq2_q:"Was gehört in die Anfrage?", faq2_a:"Lieferort, Stückzahl, gewünschter Zeitraum sowie (wenn möglich) Incoterms und technische/Dokumentationsanforderungen.",
    faq3_q:"Arbeiten Sie weltweit?", faq3_a:"Ja. Wir unterstützen globalen Import/Export und passen Logistik & Dokumente an den Zielmarkt an.",
    faq4_q:"Wie schnell antworten Sie?", faq4_a:"In der Regel innerhalb von 1–2 Werktagen, abhängig von Anfragequalität und Verfügbarkeitsprüfung.",
    contact_title:"Kontakt", contact_sub:"Am schnellsten per E‑Mail. Alternativ: Formular unten (öffnet Ihr E‑Mail‑Programm).",
    contact_details:"Unternehmensdaten", contact_ceo:"CEO", contact_cta_email:"Anfrage senden", contact_note:"Wir antworten mit Verfügbarkeit und Angebot.",
    form_title:"Schnellanfrage", form_sub:"Öffnet Ihr E‑Mail‑Programm mit vorausgefülltem Text.",
    form_location:"Lieferort", form_qty:"Menge", form_time:"Zeitraum", form_msg:"Zusätzliche Anforderungen",
    form_send:"E‑Mail erstellen", form_priv:"Keine Datenspeicherung auf der Website — die E‑Mail wird lokal im Browser erstellt.",
    footer_line:"Global Wind Energy Solutions · Import & Export · 6MW‑Klasse",
    mail_subject:"Anfrage 6MW",
    mail_body_intro:"Guten Tag,\n\nbitte senden Sie Verfügbarkeit und Angebot für 6MW‑Windkraftanlagen.\n\n- Lieferort: ",
    mail_body_qty:"\n- Menge: ",
    mail_body_time:"\n- Gewünschter Zeitraum: ",
    mail_body_more:"\n- Zusätzliche Anforderungen: ",
    mail_body_end:"\n\nVielen Dank,"
  }
};

function normalizeLang(x){
  const v = String(x || "").toLowerCase();
  if (v.startsWith("pl")) return "pl";
  if (v.startsWith("de")) return "de";
  if (v.startsWith("en")) return "en";
  return null;
}
function getLangFromUrl(){
  const p = new URLSearchParams(location.search);
  return normalizeLang(p.get("lang"));
}
function setPressed(lang){
  ["pl","de","en"].forEach(l=>{
    const b = document.getElementById("btn-"+l);
    if (b) b.setAttribute("aria-pressed", String(l===lang));
  });
}
function applyI18n(lang){
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i]").forEach(el=>{
    const key = el.getAttribute("data-i");
    if (dict[key] != null) el.textContent = dict[key];
  });

  // Update mail links (subject in correct language)
  const subj = encodeURIComponent(dict.mail_subject);
  const navEmail = document.getElementById("navEmail");
  const heroQuote = document.getElementById("heroQuote");
  if (navEmail) navEmail.href = `mailto:${EMAIL}?subject=${subj}`;

  if (heroQuote){
    const body = dict.mail_body_intro + "\n" +
      "- " + dict.form_location + ": \n" +
      dict.mail_body_qty + "\n" +
      dict.mail_body_time + "\n" +
      dict.mail_body_more + "\n" +
      dict.mail_body_end;

    heroQuote.href = `mailto:${EMAIL}?subject=${subj}&body=${encodeURIComponent(body)}`;
  }

  // Title + meta description (simple, accurate)
  const titles = {
    en: "WindFixTurbine GmbH | Import & Export of 6MW Wind Turbines",
    pl: "WindFixTurbine GmbH | Import i eksport turbin wiatrowych 6MW",
    de: "WindFixTurbine GmbH | Import & Export von 6MW Windkraftanlagen"
  };
  document.title = titles[lang] || titles.en;

  const descs = {
    en: "WindFixTurbine GmbH — global import & export of 6MW wind turbines. Availability and pricing on request via email.",
    pl: "WindFixTurbine GmbH — globalny import i eksport turbin wiatrowych 6MW. Dostępność i wycena na zapytanie mailowe.",
    de: "WindFixTurbine GmbH — globaler Import & Export von 6MW Windkraftanlagen. Verfügbarkeit und Preis nur per E‑Mail auf Anfrage."
  };
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", descs[lang] || descs.en);

  setPressed(lang);
}
function setLang(lang){
  const L = normalizeLang(lang) || "en";
  localStorage.setItem("wft_lang", L);

  const url = new URL(location.href);
  url.searchParams.set("lang", L);
  history.replaceState({}, "", url.toString());

  applyI18n(L);
}
function initLang(){
  const fromUrl = getLangFromUrl();
  const fromStore = normalizeLang(localStorage.getItem("wft_lang"));
  const fromBrowser = normalizeLang(navigator.language || navigator.userLanguage);
  const lang = fromUrl || fromStore || fromBrowser || "en";
  setLang(lang);
}

function openPrefilledEmail(){
  const lang = normalizeLang(document.documentElement.lang) || "en";
  const dict = I18N[lang] || I18N.en;

  const loc = (document.getElementById("f_location")?.value || "").trim();
  const qty = (document.getElementById("f_qty")?.value || "").trim();
  const tim = (document.getElementById("f_time")?.value || "").trim();
  const msg = (document.getElementById("f_msg")?.value || "").trim();

  const subject = encodeURIComponent(dict.mail_subject);
  const body =
    dict.mail_body_intro + (loc || "-") +
    dict.mail_body_qty + (qty || "-") +
    dict.mail_body_time + (tim || "-") +
    dict.mail_body_more + (msg || "-") +
    dict.mail_body_end;

  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

// Smooth scroll for anchor links
document.addEventListener("click", (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href");
  if (!id || id.length < 2) return;
  const el = document.querySelector(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({behavior:"smooth", block:"start"});
});

// Reveal animations
function initReveal(){
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)){
    items.forEach(el=>el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    for (const ent of entries){
      if (ent.isIntersecting){
        ent.target.classList.add("is-in");
        io.unobserve(ent.target);
      }
    }
  }, {threshold: 0.12});
  items.forEach(el=>io.observe(el));
}

document.getElementById("year").textContent = new Date().getFullYear();
initLang();
initReveal();

window.setLang = setLang;
window.openPrefilledEmail = openPrefilledEmail;
