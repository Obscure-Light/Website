/**
 * formazione.alessandropila.it
 * Config centrale: contenuti + feature flags + opzioni UI.
 * Modifica qui testi/contatti/link/programmi/FAQ.
 */

export const siteConfig = {
  flags: {
    enableHeaderCta: true,
    enableHeroCta: true,
    showPrograms: true,
    showTarget: true,
    showMethod: true,
    showFaq: true,
    showAbout: true,
    showContacts: true,
    enablePrograms: {
      base: true,
      phishing: true,
      auth: true,
      smartphone: true,
      social: true,
      parents: true,
      aiBasics: true,
      aiAdvanced: true,
      aiSafety: true,
      privacy: true,
      incident: true,
      homeSecurity: true,
    },
  },

  ui: {
    defaultTheme: "system",
    accentColor: "#0b6bcb",
    scrollOffset: 84,
  },

  metadata: {
    lang: "it",
    title: "Formazione sicurezza digitale | Alessandro Pila",
    description:
      "Percorsi pratici di sicurezza digitale e AI sicura per scuole, enti, associazioni e cittadini: phishing, account robusti, smartphone, social e uso consapevole dell'intelligenza artificiale.",
    canonicalUrl: "https://formazione.alessandropila.it/",
    ogImageDataUri:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'%3E%3Crect width='1200' height='630' fill='%230b1220'/%3E%3Ctext x='80' y='220' font-family='system-ui, -apple-system, Segoe UI, Roboto' font-size='64' fill='%23ffffff'%3ESicurezza digitale%3C/text%3E%3Ctext x='80' y='300' font-family='system-ui, -apple-system, Segoe UI, Roboto' font-size='34' fill='%23b3c0d9'%3EFormazione per cittadini, scuole e territorio%3C/text%3E%3Crect x='80' y='360' width='340' height='64' rx='32' fill='%230b6bcb'/%3E%3Ctext x='110' y='404' font-family='system-ui, -apple-system, Segoe UI, Roboto' font-size='28' fill='%23ffffff'%3ERichiedi disponibilit%C3%A0%3C/text%3E%3C/svg%3E",
  },

  branding: {
    brand: "Alessandro Pila - Formazione",
    subtitle: "Interventi formativi di sicurezza digitale e AI sicura",
    logos: {
      light: "./assets/logo-black.png",
      dark: "./assets/logo-white.png",
      alt: "Logo Alessandro Pila",
    },
  },

  navigation: [
    { label: "Programmi", anchor: "#programmi" },
    { label: "A chi è rivolto", anchor: "#target" },
    { label: "Metodo", anchor: "#metodo" },
    { label: "FAQ", anchor: "#faq" },
    { label: "Contatti", anchor: "#contatti" },
  ],

  hero: {
    title: "Sicurezza digitale e AI, spiegate con esempi reali.",
    subtitle:
      "Percorsi pratici per scuole, enti, associazioni e cittadini: phishing, account sicuri, smartphone e social, uso consapevole dell'AI. Linguaggio semplice, dimostrazioni concrete, zero marketing.",
    badges: ["Per scuole e enti", "Per famiglie e cittadini", "Esempi reali", "AI sicura"],
    ctaPrimary: { label: "Richiedi disponibilità", anchor: "#contatti" },
    ctaSecondary: { label: "Vedi i programmi", anchor: "#programmi" },
    fineprint: "Pagina informativa senza tracking o cookie banner.",
    sidePanel: {
      title: "Cosa trovi",
      bullets: [
        "Moduli adattabili (60-120 min) per pubblico e contesto",
        "Dimostrazioni pratiche, casi reali e checklist operative",
        "Materiali essenziali e supporto prima/dopo l'incontro",
      ],
      micro: "Porta esempi reali (email, SMS, prompt AI): li analizziamo insieme, in modo sicuro.",
    },
  },

  sections: {
    programs: {
      title: "Programmi",
      description:
        "Moduli brevi, chiari e pratici. Ogni incontro è pensato per prevenire rischi digitali con esempi reali e comportamenti concreti.",
      note: "Personalizzabili per livello e pubblico. Possibile ciclo di incontri progressivi.",
      items: [
        {
          id: "base",
          title: "Sicurezza digitale di base",
          duration: "90-120 min",
          goals: ["Regole d'oro essenziali", "Comportamenti sicuri nel quotidiano", "Cosa fare in caso di problema"],
          idealFor: ["Cittadini", "Biblioteche", "Associazioni"],
          enabledFlag: "base",
        },
        {
          id: "phishing",
          title: "Truffe online & phishing",
          duration: "60-120 min",
          goals: ["Riconoscere i segnali", "Esempi email/SMS/WhatsApp", "Come reagire e cosa non fare"],
          idealFor: ["Cittadini", "Scuole", "Eventi pubblici"],
          enabledFlag: "phishing",
        },
        {
          id: "auth",
          title: "Password & autenticazione",
          duration: "60-90 min",
          goals: ["Password robuste e gestibili", "2FA: cosa cambia davvero", "Gestione sicura degli account"],
          idealFor: ["Studenti", "Genitori", "Docenti"],
          enabledFlag: "auth",
        },
        {
          id: "smartphone",
          title: "Smartphone sicuro",
          duration: "90-120 min",
          goals: ["Permessi app: cosa conta", "Truffe da SMS/chiamate", "Backup e blocco: impostazioni base"],
          idealFor: ["Cittadini", "Senior", "Famiglie"],
          enabledFlag: "smartphone",
        },
        {
          id: "social",
          title: "Social e reputazione digitale",
          duration: "60-90 min",
          goals: ["Privacy: impostazioni e confini", "Profili falsi e manipolazioni", "Regole di condivisione"],
          idealFor: ["Studenti", "Genitori", "Associazioni"],
          enabledFlag: "social",
        },
        {
          id: "parents",
          title: "Genitori e minori online",
          duration: "120 min",
          goals: ["Rischi principali", "Dialogo in famiglia", "Strumenti e buone pratiche"],
          idealFor: ["Genitori", "Scuole", "Comunità educante"],
          enabledFlag: "parents",
        },
        {
          id: "aiBasics",
          title: "AI: base e prompt sicuri",
          duration: "60-90 min",
          goals: ["Come funziona l'AI generativa", "Prompt chiari e responsabili", "Limiti, bias e sicurezza"],
          idealFor: ["Docenti", "Studenti", "Enti e associazioni"],
          enabledFlag: "aiBasics",
        },
        {
          id: "aiAdvanced",
          title: "AI avanzata: workflow e rischi",
          duration: "90-120 min",
          goals: ["Automazioni e catene di prompt", "Rischi di data leak e copyright", "Policy d'uso e check di qualità"],
          idealFor: ["Scuole superiori", "Formatori", "Operatori pubblici"],
          enabledFlag: "aiAdvanced",
        },
        {
          id: "aiSafety",
          title: "Uso sicuro dell'AI",
          duration: "60-90 min",
          goals: ["Cosa non caricare mai", "Valutare le risposte", "Strumenti e settaggi per privacy e sicurezza"],
          idealFor: ["Cittadini", "Docenti", "Enti"],
          enabledFlag: "aiSafety",
        },
        {
          id: "privacy",
          title: "Privacy quotidiana e dati personali",
          duration: "60-90 min",
          goals: ["Dati sensibili e condivisione consapevole", "Settaggi privacy su servizi e app", "Backup e recupero"],
          idealFor: ["Cittadini", "Scuole", "Associazioni"],
          enabledFlag: "privacy",
        },
        {
          id: "incident",
          title: "Incidenti digitali: cosa fare subito",
          duration: "60-90 min",
          goals: ["Riconoscere un incidente", "Primo soccorso digitale", "Chi chiamare e cosa NON fare"],
          idealFor: ["Enti", "Scuole", "Cittadini"],
          enabledFlag: "incident",
        },
        {
          id: "homeSecurity",
          title: "Casa e dispositivi sicuri",
          duration: "90-120 min",
          goals: ["Wi-Fi e device aggiornati", "Backup e antifurto digitale", "Controlli rapidi per privacy e sicurezza"],
          idealFor: ["Famiglie", "Senior", "Studenti"],
          enabledFlag: "homeSecurity",
        },
      ],
    },

    target: {
      title: "A chi è rivolto",
      description: "Interventi pensati per contesti reali: linguaggio chiaro, esempi concreti, zero ansia da tecnicismi.",
      columns: [
        {
          title: "Cittadini e famiglie",
          text: "Prevenzione truffe, uso consapevole di account, smartphone e social. Obiettivo: ridurre rischi con poche regole chiare.",
        },
        {
          title: "Scuole",
          text: "Studenti, genitori, docenti: reputazione digitale, sicurezza degli account, uso responsabile di AI e social.",
        },
        {
          title: "Enti / associazioni / biblioteche",
          text: "Eventi divulgativi e progetti educativi sul territorio: incontri accessibili, materiali pratici, spazio per domande.",
        },
      ],
      notThis: {
        title: "Cosa NON è",
        text: "Non è consulenza IT aziendale né vendita di prodotti. È educazione e prevenzione digitale.",
      },
    },

    method: {
      title: "Metodo",
      description: "Un formato essenziale e replicabile: dal contesto alle azioni concrete, con spazio per domande reali.",
      steps: [
        { title: "Contesto e obiettivi", text: "Allineiamo pubblico, livello e obiettivi. Zero contenuti copia-incolla." },
        { title: "Esempi reali e casi pratici", text: "Pattern di truffe, errori comuni, impostazioni chiave: vedere per capire." },
        { title: "Checklist e azioni concrete", text: "Pochi punti, ad alto impatto: cosa fare oggi, cosa evitare domani." },
        { title: "Q&A e materiali finali", text: "Domande, chiarimenti e materiali essenziali per continuare in autonomia." },
      ],
      materials: {
        title: "Materiali inclusi",
        items: ["Slide essenziali", "Checklist PDF", "Risorse consigliate"],
      },
    },

    faq: {
      title: "FAQ",
      description: "Risposte rapide alle domande più comuni. Per casi specifici, scrivimi: rispondo in modo semplice e diretto.",
      items: [
        {
          q: "Serve competenza tecnica?",
          a: "No. L'incontro è pensato per chi vuole capire e proteggersi con un linguaggio semplice e molti esempi.",
        },
        {
          q: "Online o in presenza?",
          a: "Entrambe le modalità sono possibili. Si decide in base a pubblico, logistica e obiettivi.",
        },
        {
          q: "Quanto dura un incontro?",
          a: "In genere 60-120 minuti. Si possono pianificare cicli di incontri con moduli progressivi.",
        },
        {
          q: "Si può personalizzare per scuola/età?",
          a: "Sì. Contenuti, esempi e ritmo vengono adattati al gruppo (età, esperienza, interessi).",
        },
        {
          q: "Rilasci materiali?",
          a: "Sì. Checklist PDF, risorse consigliate e slide leggere quando utili.",
        },
        {
          q: "Come richiedere disponibilità?",
          a: "Scrivimi dai contatti: puoi usare il modulo per comporre il messaggio e copiarlo via email.",
        },
      ],
    },

    about: {
      title: "Chi sono",
      description:
        "Lavoro in cybersecurity (detection & response) e porto la stessa attenzione alla divulgazione: esempi concreti, linguaggio chiaro, focus su prevenzione.",
      bullets: [
        "Esperienza in cybersecurity (detection & response) in ambito enterprise",
        "Approccio pratico, centrato sulle persone",
        "Disponibile per scuole, enti, biblioteche e territorio",
      ],
    },

    contacts: {
      title: "Contatti",
      description:
        "Scrivimi per verificare disponibilità, contesto e pubblico. Nessuna pressione commerciale: prima capiamo se è utile.",
      email: "formazione@alessandropila.it",
      helperTitle: "Cosa scrivermi",
      helperItems: [
        "Chi partecipa (scuola, ente, cittadini) e età/ruolo.",
        "Formato preferito: online o in presenza, durata indicativa.",
        "Obiettivo principale e un esempio di situazione concreta.",
      ],
      helperNote: "Rispondo entro 24h lavorative con proposta e materiali inclusi.",
      contactHighlights: ["Online o in presenza", "Slide + checklist incluse", "Zero vendita, solo formazione"],
      labels: {
        name: "Nome e cognome",
        email: "Email",
        org: "Organizzazione (opzionale)",
        message: "Messaggio",
      },
      actions: {
        submit: "Apri email",
        copyEmail: "",
        copyMessage: "",
      },
      privacyNote: "Nessun tracciamento. Il form apre il tuo client email con il messaggio precompilato; nessun dato viene salvato qui.",
      fakeSubmitToast: {
        title: "Mail pronta",
        body: "Si apre il tuo client email con il messaggio precompilato.",
      },
    },
  },

  footer: {
    quickLinksTitle: "Link rapidi",
    whoamiLabel: "whoami.alessandropila.it",
    whoamiUrl: "https://whoami.alessandropila.it/",
  },

  structuredData: {
    person: {
      "@type": "Person",
      name: "Alessandro Pila",
      url: "https://formazione.alessandropila.it/",
    },
    website: {
      "@type": "WebSite",
      name: "Alessandro Pila - Formazione",
      url: "https://formazione.alessandropila.it/",
      inLanguage: "it-IT",
    },
  },
};
