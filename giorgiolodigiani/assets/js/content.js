/*
  =====================================================
  GUIDA RAPIDA ALL'AGGIORNAMENTO
  =====================================================
  1. Aggiorna prima il blocco CONTACTS qui sotto:
     telefono, email, WhatsApp, Instagram, disponibilità.
  2. Per cambiare i testi, modifica solo le frasi tra virgolette.
  3. Per sostituire le immagini, cambia il percorso "assets/images/..."
     oppure mantieni lo stesso nome file e rimpiazza l'immagine.
  4. Tutte le pagine leggono i contenuti da questo file.
  =====================================================
*/

(() => {
  // 1) AGGIORNA QUI I RECAPITI PRINCIPALI.
  const CONTACTS = {
    phoneDisplay: "+39 000 000 0000",
    phoneHref: "tel:+390000000000",
    whatsappHref: "https://wa.me/390000000000?text=Ciao%20Giorgio%2C%20vorrei%20ricevere%20una%20consulenza%20per%20un%20viaggio.",
    whatsappLabel: "Scrivimi su WhatsApp",
    email: "ciao@giorgiolodigiani.it",
    emailHref: "mailto:ciao@giorgiolodigiani.it",
    instagramLabel: "@giorgiolodigiani.travel",
    instagramHref: "https://instagram.com/giorgiolodigiani.travel",
    location: "Consulenza online in tutta Italia e incontri su richiesta",
    hours: "Lun - Ven | 09:00 - 19:00",
    note: "Ogni richiesta viene gestita personalmente entro 24 ore lavorative."
  };

  // 2) QUI PUOI CAMBIARE O SOSTITUIRE LE IMMAGINI PRINCIPALI.
  const IMAGES = {
    portrait: "assets/images/giorgio-portrait-placeholder.svg",
    amalfi: "assets/images/journey-amalfi.svg",
    marrakech: "assets/images/journey-marrakech.svg",
    nordic: "assets/images/journey-nordic.svg",
    safari: "assets/images/journey-safari.svg",
    tokyo: "assets/images/journey-tokyo.svg",
    tropics: "assets/images/journey-tropics.svg",
    galleryCoast: "assets/images/gallery-coast.svg",
    galleryDesert: "assets/images/gallery-desert.svg",
    galleryCity: "assets/images/gallery-city.svg",
    galleryLodge: "assets/images/gallery-lodge.svg",
    galleryIsland: "assets/images/gallery-island.svg",
    galleryMountain: "assets/images/gallery-mountain.svg"
  };

  const BRAND_PILLARS = [
    {
      icon: "compass",
      eyebrow: "Viaggi su misura",
      title: "Itinerari costruiti con metodo, ritmo e carattere",
      text: "Ogni progetto nasce da un confronto diretto e prende forma attorno a tempi, budget, desideri, comfort e stile di viaggio.",
      meta: ["Su misura", "Selezione mirata", "Un solo referente"]
    },
    {
      icon: "user",
      eyebrow: "",
      title: "Presenza diretta nei viaggi che richiedono piu supporto",
      text: "Per progetti selezionati Giorgio puo accompagnare personalmente il viaggio, coordinando sul posto passaggi chiave, ritmo e dettagli operativi.",
      meta: ["Presenza diretta", "Itinerari selezionati", "Taglio premium"]
    }
  ];

  // 3) CARD SERVIZI.
  const SERVICES = [
    {
      icon: "compass",
      title: "Progettazione del viaggio",
      text: "Definizione della struttura del viaggio, delle tappe, dei tempi e del tono del soggiorno con una proposta chiara e realistica.",
      meta: ["Brief iniziale", "Struttura", "Ritmo"]
    },
    {
      icon: "map",
      title: "Itinerari su misura",
      text: "Selezione coerente di destinazioni, soste, hotel ed esperienze per costruire un viaggio personale e leggibile.",
      meta: ["Su misura", "Destinazioni", "Esperienze"]
    },
    {
      icon: "heart",
      title: "Lune di miele e viaggi speciali",
      text: "Progetti dedicati a occasioni importanti, con attenzione al tono del viaggio, ai dettagli e alla qualita percepita.",
      meta: ["Occasioni speciali", "Romantic", "Selezione curata"]
    },
    {
      icon: "city",
      title: "City break e capitali",
      text: "Weekend e soggiorni brevi costruiti con hotel ben posizionati, quartieri giusti e un ritmo che funzioni davvero.",
      meta: ["Weekend", "Capitali", "Ritmo giusto"]
    },
    {
      icon: "waves",
      title: "Resort e pause rigeneranti",
      text: "Scelte pensate per chi cerca luce, comfort, privacy e un contesto capace di far rallentare con eleganza.",
      meta: ["Relax", "Resort", "Benessere"]
    },
    {
      icon: "family",
      title: "Viaggi family e multi generazione",
      text: "Soluzioni organizzate con attenzione alla logistica, ai tempi della famiglia e alla qualita complessiva dell'esperienza.",
      meta: ["Famiglie", "Gruppi", "Logistica"]
    },
    {
      icon: "user",
      title: "",
      text: "Per viaggi selezionati Giorgio puo essere presente in prima persona, seguendo sul posto il percorso e i momenti piu delicati.",
      meta: ["Presenza diretta", "Supporto sul posto", "Su richiesta"]
    }
  ];

  // 4) CARD "I MIEI VIAGGI".
  const JOURNEYS = [
    {
      image: IMAGES.amalfi,
      alt: "Vista mediterranea per un viaggio in Costiera Amalfitana",
      tag: "Mare e charme",
      title: "Costiera Amalfitana",
      text: "Boutique hotel, ritmo disteso, luce mediterranea e tappe dosate per vivere la destinazione con misura e piacere.",
      chips: ["Aprile - Ottobre", "Coppie", "Italia"]
    },
    {
      image: IMAGES.marrakech,
      alt: "Ispirazione viaggio Marrakech e deserto",
      tag: "Colori e atmosfera",
      title: "Marrakech e deserto",
      text: "Una combinazione di città, materia e silenzio, pensata per chi cerca design, esperienza e un cambio netto di ritmo.",
      chips: ["Autunno - Primavera", "Esperienziale", "Nord Africa"]
    },
    {
      image: IMAGES.nordic,
      alt: "Ispirazione viaggio Islanda on the road",
      tag: "Natura essenziale",
      title: "Islanda on the road",
      text: "Un itinerario di paesaggio forte e soste sensate, con comfort ben calibrato e spazio per vivere davvero la luce del Nord.",
      chips: ["Estate", "Road trip", "Outdoor"]
    },
    {
      image: IMAGES.safari,
      alt: "Ispirazione viaggio safari in Tanzania",
      tag: "Safari d'autore",
      title: "Tanzania tra safari e lodge",
      text: "Campi selezionati, passaggi fluidi e una regia attenta per far percepire il viaggio come intenso, ma sempre ben tenuto.",
      chips: ["Giugno - Ottobre", "Safari", "Signature"]
    },
    {
      image: IMAGES.tokyo,
      alt: "Ispirazione viaggio Tokyo e Kyoto",
      tag: "Città e cultura",
      title: "Tokyo e Kyoto",
      text: "Energia urbana, precisione e bellezza formale in un itinerario che alterna slancio contemporaneo e tempi più misurati.",
      chips: ["Marzo - Maggio", "Cultura", "Giappone"]
    },
    {
      image: IMAGES.tropics,
      alt: "Ispirazione viaggio Maldive",
      tag: "Pausa premium",
      title: "Maldive slow luxury",
      text: "Una parentesi di acqua, luce e privacy con strutture selezionate per chi desidera rallentare senza rinunciare al livello del soggiorno.",
      chips: ["Inverno", "Relax", "Oceano Indiano"]
    }
  ];

  const TESTIMONIALS = [
    {
      quote: "Giorgio ha trasformato un'idea ancora poco definita in un itinerario pulito, elegante e molto facile da vivere.",
      author: "Elena R.",
      trip: "Viaggio di nozze in Giappone",
      score: 5
    },
    {
      quote: "Ascolto vero, selezione mirata e nessuna dispersione. Ci siamo sentiti seguiti dall'inizio alla partenza.",
      author: "Marco e Silvia P.",
      trip: "Maldive con stopover",
      score: 5
    },
    {
      quote: "Weekend a Londra costruito benissimo: tempi giusti, hotel centrato e consigli pratici davvero utili.",
      author: "Chiara T.",
      trip: "City break a Londra",
      score: 5
    },
    {
      quote: "La presenza rapida nei momenti importanti ci ha fatto sentire tranquilli. Un riferimento concreto e professionale.",
      author: "Luca M.",
      trip: "Safari Tanzania",
      score: 5
    }
  ];

  const VISITED_LOCATIONS = [
    { name: "Roma", country: "Italia", lat: 41.9028, lon: 12.4964, featured: true },
    { name: "Parigi", country: "Francia", lat: 48.8566, lon: 2.3522 },
    { name: "Londra", country: "Regno Unito", lat: 51.5072, lon: -0.1276 },
    { name: "New York", country: "USA", lat: 40.7128, lon: -74.006, featured: true },
    { name: "Marrakech", country: "Marocco", lat: 31.6295, lon: -7.9811 },
    { name: "Zanzibar", country: "Tanzania", lat: -6.1659, lon: 39.2026 },
    { name: "Bangkok", country: "Thailandia", lat: 13.7563, lon: 100.5018 },
    { name: "Tokyo", country: "Giappone", lat: 35.6762, lon: 139.6503, featured: true },
    { name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093 },
    { name: "Male", country: "Maldive", lat: 4.1755, lon: 73.5093, featured: true }
  ];

  const GALLERY_ITEMS = [
    {
      image: IMAGES.galleryCoast,
      alt: "Paesaggio costiero elegante al tramonto",
      tag: "Costa e luce",
      title: "Linee pulite, luce calda, ritmo mediterraneo",
      text: "Un'immagine che racconta soggiorni vista mare, hotel di carattere e giornate costruite con tempi ampi e ben dosati.",
      location: "Mediterraneo",
      chips: ["Mare", "Hotel di charme"],
      layout: "wide"
    },
    {
      image: IMAGES.galleryDesert,
      alt: "Tenda premium nel deserto al tramonto",
      tag: "Deserto curato",
      title: "Silenzio, materia e cambio di ritmo",
      text: "Perfetta per evocare itinerari che alternano città, riad di gusto e una parentesi nel deserto dal tono più raccolto.",
      location: "Marocco",
      chips: ["Esperienziale", "Tramonto"],
      layout: "tall"
    },
    {
      image: IMAGES.galleryCity,
      alt: "Skyline urbana e hotel design",
      tag: "Taglio urbano",
      title: "Energia contemporanea con selezione mirata",
      text: "Una direzione adatta a city break e grandi città, con quartieri giusti, hotel ben scelti e agenda mai sovraccarica.",
      location: "Tokyo",
      chips: ["City break", "Design stay"]
    },
    {
      image: IMAGES.galleryLodge,
      alt: "Lodge raffinato immerso nella natura",
      tag: "Natura e comfort",
      title: "Paesaggio forte, accoglienza misurata",
      text: "Un riferimento visivo utile per viaggi in cui il contesto naturale resta protagonista senza rinunciare a comfort e servizio.",
      location: "Africa orientale",
      chips: ["Safari", "Lodge"]
    },
    {
      image: IMAGES.galleryIsland,
      alt: "Pontile privato in una laguna tropicale",
      tag: "Acqua e quiete",
      title: "Spazio, privacy e respiro",
      text: "Una scena che comunica acqua, luce e distanza dal rumore, ideale per raccontare pause rigeneranti dal tono alto.",
      location: "Oceano Indiano",
      chips: ["Resort", "Slow luxury"],
      layout: "wide"
    },
    {
      image: IMAGES.galleryMountain,
      alt: "Suite panoramica in montagna",
      tag: "Silenzio alpino",
      title: "Montagna contemporanea e tempo lento",
      text: "Perfetta per raccontare chalet di carattere, benessere e soggiorni costruiti con equilibrio tra paesaggio e comfort.",
      location: "Dolomiti",
      chips: ["Montagna", "Wellness"],
      layout: "tall"
    }
  ];

  // 7) PROCESSO DI LAVORO.
  const PROCESS = [
    {
      title: "Primo confronto",
      text: "Raccolgo obiettivi, tempi, budget e aspettative per definire fin da subito una direzione chiara."
    },
    {
      title: "Proposta strutturata",
      text: "Organizzo una selezione coerente di tappe, soggiorni ed esperienze con una logica leggibile e concreta."
    },
    {
      title: "Rifinitura finale",
      text: "Mettiamo a fuoco ritmo, priorità, dettagli pratici e richieste speciali fino a ottenere un progetto credibile."
    },
    {
      title: "Partenza e supporto",
      text: "Prima della partenza hai un quadro completo del viaggio. Nei progetti che lo richiedono posso anche affiancarti di persona."
    }
  ];

  // 8) VALORI E FAQ.
  const VALUES = [
    {
      icon: "ear",
      title: "Ascolto prima di proporre",
      text: "Il punto di partenza non è il catalogo ma la persona: desideri, limiti, tempi, budget e modo di stare in viaggio."
    },
    {
      icon: "spark",
      title: "Dettagli che cambiano l'esperienza",
      text: "Quartieri, orari, connessioni, ritmo delle tappe e piccoli accorgimenti incidono più di una lista infinita di attività."
    },
    {
      icon: "shield",
      title: "Scelte coerenti",
      text: "Ogni proposta deve essere elegante, ma anche sensata rispetto al tempo disponibile, al budget e al livello di energia richiesto."
    },
    {
      icon: "plane",
      title: "Un referente unico",
      text: "La consulenza resta diretta dall'inizio alla partenza, senza passaggi inutili e con una linea chiara nelle decisioni."
    }
  ];

  const FAQ = [
    {
      question: "Posso scriverti anche se non ho ancora scelto la meta?",
      answer: "Sì. Spesso il valore del primo confronto sta proprio nel dare forma a una direzione quando le idee sono ancora aperte."
    },
    {
      question: "Segui solo viaggi lunghi o anche soggiorni brevi?",
      answer: "Entrambi. Un weekend ben costruito richiede la stessa attenzione di un itinerario più articolato."
    },
    {
      question: "Puoi intervenire su un viaggio già impostato?",
      answer: "Sì. Se esiste già una base posso aiutarti a rifinire struttura, ritmo, soggiorni ed esperienze."
    },
    {
      question: "Come funziona l'?",
      answer: "Per viaggi selezionati posso essere presente in prima persona. Si valuta caso per caso, in base al tipo di progetto e al livello di supporto richiesto."
    },
    {
      question: "Come inizio concretamente?",
      answer: "Puoi scrivermi dalla pagina contatti, via email o su WhatsApp. Da lì organizziamo il primo confronto."
    }
  ];

  // 9) CANALI CONTATTO MOSTRATI NELLA PAGINA CONTATTI.
  const CONTACT_CHANNELS = [
    {
      icon: "phone",
      title: "Telefono",
      value: CONTACTS.phoneDisplay,
      note: "Per una prima richiesta rapida o per fissare direttamente un confronto.",
      href: CONTACTS.phoneHref
    },
    {
      icon: "mail",
      title: "Email",
      value: CONTACTS.email,
      note: "Ideale se vuoi spiegare con più calma meta, tempi e tipo di progetto.",
      href: CONTACTS.emailHref
    },
    {
      icon: "whatsapp",
      title: "WhatsApp",
      value: CONTACTS.whatsappLabel,
      note: "Canale diretto per un primo messaggio veloce e per avviare la conversazione.",
      href: CONTACTS.whatsappHref,
      external: true
    },
    {
      icon: "instagram",
      title: "Instagram",
      value: CONTACTS.instagramLabel,
      note: "Uno spazio visivo utile per seguire stile, ispirazioni e atmosfera del lavoro.",
      href: CONTACTS.instagramHref,
      external: true
    }
  ];

  // 10) TESTI DELLE PAGINE.
  window.siteContent = {
    global: {
      siteName: "Giorgio Lodigiani",
      role: "Consulente di viaggi",
      tagline: "Viaggi su misura e guida personale, con una regia chiara dall'idea alla partenza.",
      contacts: CONTACTS,
      footerText: "Una consulenza personale per costruire viaggi su misura e, quando serve, affiancarli con presenza diretta."
    },
    navigation: [
      { key: "home", label: "Home", href: "index.html" },
      { key: "about", label: "Chi sono", href: "chi-sono.html" },
      { key: "services", label: "Servizi", href: "servizi.html" },
      { key: "journeys", label: "I miei viaggi", href: "viaggi.html" },
      { key: "gallery", label: "Galleria", href: "galleria.html" },
      { key: "contact", label: "Contatti", href: "contatti.html" }
    ],
    shared: {
      brandPillars: BRAND_PILLARS,
      services: SERVICES,
      journeys: JOURNEYS,
      process: PROCESS,
      testimonials: TESTIMONIALS,
      visitedLocations: VISITED_LOCATIONS,
      galleryItems: GALLERY_ITEMS,
      values: VALUES,
      faq: FAQ,
      contactChannels: CONTACT_CHANNELS,
      promiseList: [
        "Progetto costruito su tempi, budget e stile reale del viaggio",
        "Possibilita di presenza diretta nei viaggi che richiedono piu regia",
        "Un solo referente per tutta la parte di consulenza",
        "Lettura chiara del progetto prima della partenza"
      ],
      homeStats: [
        {
          value: "2",
          label: "pilastri chiari",
          text: "Viaggi su misura e accompagnamento personale hanno lo stesso peso nel posizionamento."
        },
        {
          value: "1",
          label: "regia unica",
          text: "Dall'idea iniziale alla partenza il riferimento resta diretto."
        },
        {
          value: "24h",
          label: "tempo di risposta",
          text: "Le richieste vengono lette e gestite in modo rapido e ordinato."
        }
      ],
      tripStyles: [
        {
          icon: "heart",
          title: "Viaggi di coppia ben calibrati",
          text: "Proposte pensate per dare ritmo, privacy e qualità percepita a soggiorni importanti o momenti speciali."
        },
        {
          icon: "city",
          title: "Città con taglio preciso",
          text: "Hotel ben posizionati, quartieri giusti e una costruzione del tempo che valorizza davvero la destinazione."
        },
        {
          icon: "waves",
          title: "Pause di respiro",
          text: "Mare, resort e contesti rilassanti selezionati per chi desidera staccare senza abbassare il livello."
        }
      ]
    },
    pages: {
      home: {
        seo: {
          title: "Giorgio Lodigiani | Viaggi su misura e accompagnamento personale",
          description: "Giorgio Lodigiani progetta viaggi su misura e accompagna personalmente itinerari selezionati. Presentazione, servizi, viaggi, galleria e contatti."
        },
        hero: {
          eyebrow: "Consulenza viaggi | progetto e presenza",
          title: "Viaggi su misura, con guida personale.",
          description: "Giorgio Lodigiani lavora su due direttrici complementari: costruire viaggi su misura con un metodo chiaro e, quando il progetto lo richiede, accompagnarli personalmente sul campo.",
          primaryCta: { label: "Scrivimi", href: "contatti.html#contact-form" },
          secondaryCta: { label: "Scopri i servizi", href: "servizi.html" },
          pills: ["Viaggi su misura", "Accompagnamento personale", "Un solo referente"],
          badge: "Consulenza viaggi",
          image: IMAGES.portrait,
          imageAlt: "Ritratto professionale di Giorgio Lodigiani",
          cardTitle: "Giorgio Lodigiani",
          cardText: "Consulenza, selezione e presenza diretta dove servono davvero: il progetto resta sempre leggibile e ben governato.",
          cardMeta: "Progetto e accompagnamento"
        },
        pillarsSection: {
          title: "Due pilastri, una sola regia",
          text: "Il lavoro si muove su due aree principali: progettare viaggi su misura e, per itinerari selezionati, accompagnarli in prima persona."
        },
        intro: {
          title: "Non una semplice proposta, ma un progetto ben impostato",
          text: "Il valore non sta nell'accumulare opzioni, ma nel trovare l'equilibrio giusto tra meta, ritmo, qualità delle tappe e modalità di supporto."
        },
        signature: {
          title: "Ogni viaggio deve avere coerenza prima ancora che spettacolarità",
          text: "Un viaggio ben costruito regge nei tempi, nelle connessioni, nel livello delle strutture e nella sensazione generale che lascia durante tutto il percorso."
        },
        servicesSection: {
          title: "Cosa posso fare per te",
          text: "Dalla progettazione completa del viaggio all'accompagnamento personale, i servizi sono pensati per dare chiarezza e presenza."
        },
        journeysSection: {
          title: "I miei viaggi",
          text: "Una selezione di direzioni, atmosfere e itinerari che raccontano il mio modo di costruire un progetto di viaggio."
        },
        gallerySection: {
          title: "Galleria ispirazionale",
          text: "Paesaggi, hotel, dettagli e atmosfere che aiutano a mettere a fuoco il tono del prossimo viaggio.",
          cta: { label: "Scopri la galleria completa", href: "galleria.html" }
        },
        processSection: {
          title: "Come lavoro",
          text: "Un flusso semplice, leggibile e professionale, pensato per dare ordine alle idee e costruire bene il viaggio."
        },
        reviewsSection: {
          title: "Cosa dicono i clienti",
          text: "Pareri di chi ha scelto un progetto su misura o un supporto diretto nei momenti più importanti del viaggio."
        },
        band: {
          title: "Se hai in mente un viaggio da costruire bene, partiamo da qui.",
          text: "Posso aiutarti a progettare l'itinerario o valutare insieme se l'accompagnamento personale è la soluzione giusta.",
          primaryCta: { label: "Parliamone", href: "contatti.html#contact-form" },
          secondaryCta: { label: "Scrivimi su WhatsApp", href: CONTACTS.whatsappHref }
        }
      },
      about: {
        seo: {
          title: "Chi sono | Giorgio Lodigiani",
          description: "Il metodo di Giorgio Lodigiani: consulenza viaggi personale, selezione attenta, itinerari su misura e accompagnamento in progetti selezionati."
        },
        hero: {
          eyebrow: "Chi sono",
          title: "Metodo chiaro, gusto sobrio, presenza personale.",
          description: "Il mio lavoro parte dall'ascolto e arriva a una proposta precisa. Tolgo rumore, do ordine alle scelte e costruisco viaggi coerenti con chi parte e con il tipo di esperienza che desidera vivere.",
          primaryCta: { label: "Scrivimi ora", href: "contatti.html#contact-form" },
          secondaryCta: { label: "Vedi i servizi", href: "servizi.html" },
          pills: ["Ascolto reale", "Selezione netta", "Regia personale"],
          badge: "Profilo",
          image: IMAGES.portrait,
          imageAlt: "Foto professionale Giorgio Lodigiani",
          cardTitle: "Consulenza personale",
          cardText: "Ogni progetto viene letto, impostato e rifinito direttamente, con una linea coerente dall'inizio alla partenza.",
          cardMeta: "Ascolto, selezione, direzione"
        },
        story: {
          title: "Il viaggio come progetto, non come accumulo di opzioni",
          paragraphs: [
            "Ogni richiesta parte da una domanda semplice: che viaggio vuoi vivere davvero. Da qui nasce una consulenza che mette al centro ritmo, atmosfera, priorita e qualita percepita.",
            "L'itinerario non viene costruito per sommare tappe, ma per dare logica alla sequenza, equilibrio alle giornate e coerenza al soggiorno nel suo insieme.",
            "Accanto al lavoro su misura, seguo anche progetti in cui la presenza diretta diventa un valore aggiunto, con accompagnamento personale su itinerari selezionati."
          ]
        },
        method: {
          title: "Cosa porto nel progetto",
          text: "La differenza sta nella selezione, nella capacita di chiarire le priorita e nel tenere insieme estetica, fattibilita e ritmo. Meno dispersione, piu direzione."
        },
        band: {
          title: "Se vuoi capire se c'e la direzione giusta, scrivimi.",
          text: "Possiamo partire da un'idea ancora aperta oppure da un viaggio gia impostato e da rifinire con piu ordine.",
          primaryCta: { label: "Parliamone", href: "contatti.html#contact-form" },
          secondaryCta: { label: "Vedi i viaggi", href: "viaggi.html" }
        }
      },
      services: {
        seo: {
          title: "Servizi | Giorgio Lodigiani",
          description: "Servizi di Giorgio Lodigiani: viaggi su misura e accompagnamento personale, con una consulenza ordinata dal brief iniziale alla partenza."
        },
        hero: {
          eyebrow: "Servizi",
          title: "Due aree principali, una sola regia.",
          description: "Il lavoro si sviluppa su due pilastri con pari importanza: progettare viaggi su misura e, quando utile, accompagnare personalmente itinerari selezionati.",
          primaryCta: { label: "Richiedi una consulenza", href: "contatti.html#contact-form" },
          secondaryCta: { label: "Scopri il profilo", href: "chi-sono.html" },
          pills: ["Viaggi su misura", "Accompagnamento personale", "Selezione chiara"],
          badge: "Servizi",
          image: IMAGES.amalfi,
          imageAlt: "Servizi consulenza viaggi",
          cardTitle: "Struttura e presenza",
          cardText: "Ogni servizio nasce per rendere il progetto piu leggibile, solido e ben accompagnato nei passaggi davvero importanti.",
          cardMeta: "Progetto su misura"
        },
        intro: {
          title: "Servizi pensati per decidere bene",
          text: "Non una lista dispersiva, ma un sistema di lavoro leggibile: capire il viaggio, impostarlo bene e seguirlo con il livello di presenza piu adatto."
        },
        pillarsSection: {
          title: "Viaggi su misura e accompagnamento personale",
          text: "Le due aree principali lavorano insieme: da un lato la costruzione precisa dell'itinerario, dall'altro la possibilita di una presenza diretta nei progetti che lo richiedono."
        },
        includeTitle: "Cosa comprende la consulenza",
        includes: [
          "Primo confronto per definire obiettivi, priorita, tempi e budget",
          "Selezione ragionata di tappe, soggiorni, esperienze e taglio del viaggio",
          "Struttura dell'itinerario con ritmo credibile e passaggi ben costruiti",
          "Rifinitura finale di dettagli pratici, esigenze specifiche e livello del soggiorno",
          "Riferimento diretto fino alla partenza, senza passaggi superflui",
          "Valutazione dell'accompagnamento personale per viaggi selezionati"
        ],
        faqTitle: "Domande frequenti",
        faqText: "Le risposte ai dubbi piu comuni, per aiutarti a capire rapidamente come funziona la consulenza.",
        band: {
          title: "Se il taglio ti convince, il passo successivo e semplice.",
          text: "Scrivimi e valutiamo insieme se serve un progetto su misura, un affinamento dell'itinerario o un accompagnamento personale.",
          primaryCta: { label: "Scrivimi", href: "contatti.html#contact-form" },
          secondaryCta: { label: "WhatsApp", href: CONTACTS.whatsappHref }
        }
      },
      journeys: {
        seo: {
          title: "I miei viaggi | Giorgio Lodigiani",
          description: "Viaggi, atmosfere e mete seguite da Giorgio Lodigiani: una selezione editoriale utile per immaginare itinerari su misura o valutare un accompagnamento personale."
        },
        hero: {
          eyebrow: "I miei viaggi",
          title: "Destinazioni, ritmo e presenza sul campo.",
          description: "Questa pagina raccoglie atmosfere, itinerari e mete reali da cui partire per costruire un progetto su misura o valutare un accompagnamento personale.",
          primaryCta: { label: "Chiedi un viaggio su misura", href: "contatti.html#contact-form" },
          secondaryCta: { label: "Scopri i servizi", href: "servizi.html" },
          pills: ["Destinazioni reali", "Mappa precisa", "Presenza diretta su richiesta"],
          badge: "Ispirazioni",
          image: IMAGES.tokyo,
          imageAlt: "Galleria viaggi",
          cardTitle: "Viaggi letti sul serio",
          cardText: "Ogni itinerario viene valutato per ritmo, livello delle soste, tenuta del percorso e coerenza complessiva dell'esperienza.",
          cardMeta: "Selezione e accompagnamento"
        },
        intro: {
          title: "Ispirazioni che diventano direzione",
          text: "Le immagini e le destinazioni non servono a mostrare un catalogo, ma ad aiutare a capire tono, ritmo e livello del viaggio che vuoi costruire."
        },
        editorialTitle: "Come leggere questa selezione",
        editorialList: [
          "Ogni proposta suggerisce un taglio di viaggio, non un pacchetto preconfezionato.",
          "La mappa permette di vedere mete reali gia seguite e punti localizzati con precisione.",
          "Su alcuni itinerari posso affiancare il progetto anche con accompagnamento personale."
        ],
        accompanimentPanel: {
          title: "Quando l'accompagnamento fa la differenza",
          text: "Ci sono viaggi in cui il valore non sta solo nella costruzione dell'itinerario, ma anche nella presenza diretta. Per gruppi, itinerari articolati o progetti con molte variabili, l'accompagnamento personale puo dare continuita, fluidita e un riferimento unico anche sul posto."
        },
        stylesTitle: "Tagli di viaggio",
        stylesText: "Tre chiavi di lettura per raccontare il tono del soggiorno, il tipo di esperienza e il livello di costruzione del progetto.",
        mapSection: {
          eyebrow: "Mappa",
          title: "Mappa delle mete visitate",
          text: "Una mappa reale delle mete gia seguite, con punti localizzati in modo preciso e una lettura chiara delle aree gia esplorate.",
          note: "Seleziona una meta nell'elenco per evidenziarla sulla mappa e visualizzare il punto esatto."
        },
        band: {
          title: "Se una direzione ti rappresenta, trasformiamola in un progetto reale.",
          text: "Possiamo partire da una destinazione, da un'immagine o da un'idea di accompagnamento e darle subito una struttura concreta.",
          primaryCta: { label: "Parliamone", href: "contatti.html#contact-form" },
          secondaryCta: { label: "Chiamami", href: CONTACTS.phoneHref }
        }
      },
      gallery: {
        seo: {
          title: "Galleria | Giorgio Lodigiani",
          description: "Gallery editoriale di Giorgio Lodigiani: paesaggi, dettagli e atmosfere che raccontano uno stile di viaggio curato e su misura."
        },
        hero: {
          eyebrow: "Galleria",
          title: "Atmosfere, dettagli e immagini con una direzione chiara.",
          description: "Una selezione visiva pensata per raccontare paesaggi, strutture e tagli di viaggio coerenti con uno stile sobrio, curato e ben riconoscibile.",
          primaryCta: { label: "Scrivimi", href: "contatti.html#contact-form" },
          secondaryCta: { label: "Scopri i viaggi", href: "viaggi.html" },
          pills: ["Paesaggi selezionati", "Hotel e dettagli", "Tono del viaggio"],
          badge: "Galleria",
          image: IMAGES.galleryIsland,
          imageAlt: "Vista tropicale per la galleria ispirazionale",
          cardTitle: "Selezione editoriale",
          cardText: "Una raccolta di immagini con brevi testi per far emergere atmosfera, livello e tipo di esperienza in modo immediato.",
          cardMeta: "Paesaggi e dettagli"
        },
        intro: {
          title: "Immagini che aiutano a definire il tono del progetto",
          text: "La galleria non e un archivio decorativo: e uno strumento editoriale per riconoscere atmosfere, materiali, luce e tipo di soggiorno."
        },
        notesTitle: "Cosa racconta questa selezione",
        notesList: [
          "Atmosfere reali, non immagini inserite solo per riempire la pagina",
          "Dettagli utili a leggere il tono del soggiorno e il livello dell'esperienza",
          "Spunti che possono diventare il punto di partenza di un viaggio su misura"
        ],
        gallerySection: {
          title: "Selezione fotografica",
          text: "Ogni immagine e accompagnata da una breve descrizione per chiarire il tipo di esperienza che suggerisce."
        },
        band: {
          title: "Se una di queste atmosfere ti rappresenta, costruiamola bene.",
          text: "Partiamo dall'immagine giusta e costruiamo insieme un itinerario coerente, pratico e personale.",
          primaryCta: { label: "Richiedi una consulenza", href: "contatti.html#contact-form" },
          secondaryCta: { label: "Vai ai servizi", href: "servizi.html" }
        }
      },
      contact: {
        seo: {
          title: "Contatti | Giorgio Lodigiani",
          description: "Contatti di Giorgio Lodigiani: email, telefono, WhatsApp e modulo per richiedere un viaggio su misura o valutare un accompagnamento personale."
        },
        hero: {
          eyebrow: "Contatti",
          title: "Scrivimi e impostiamo il progetto nel modo giusto.",
          description: "Puoi contattarmi per un viaggio da costruire da zero, per affinare un itinerario gia definito o per valutare un accompagnamento personale.",
          primaryCta: { label: "Vai al modulo", href: "#contact-form" },
          secondaryCta: { label: "Scrivimi su WhatsApp", href: CONTACTS.whatsappHref },
          pills: ["Telefono", "Email", "WhatsApp", "Accompagnamento personale"],
          badge: "Contatti",
          image: IMAGES.tropics,
          imageAlt: "Contatti consulente di viaggi",
          cardTitle: "Canali diretti",
          cardText: "Scegli il canale piu comodo e raccontami la tua idea con il livello di dettaglio che preferisci: rispondero in modo chiaro e ordinato.",
          cardMeta: CONTACTS.hours
        },
        contactTitle: "Scegli il canale piu comodo",
        contactText: "Telefono, email e WhatsApp sono pensati per esigenze diverse, ma il punto resta lo stesso: avviare un confronto semplice e ben impostato.",
        form: {
          title: "Raccontami il viaggio che hai in mente",
          text: "Compila il modulo con i dettagli principali. Puoi indicare una meta, un periodo, il tipo di esperienza che cerchi oppure la necessita di un accompagnamento personale.",
          submitLabel: "Prepara la richiesta",
          feedbackIdle: "Dopo l'invio si aprira il client di posta predefinito del dispositivo.",
          feedbackSuccess: "La richiesta e pronta. Se non si apre il client di posta, scrivi direttamente a",
          fields: {
            name: "Nome e cognome",
            email: "Email",
            type: "Tipologia di viaggio",
            period: "Periodo indicativo",
            guests: "Viaggiatori",
            message: "Raccontami il progetto"
          },
          options: [
            "Da definire",
            "Viaggio di coppia",
            "City break",
            "Relax e resort",
            "Famiglia",
            "Lungo raggio",
            "Esperienza su misura",
            "Accompagnamento in viaggio"
          ]
        },
        planningTitle: "Prima del primo contatto",
        planningList: [
          "Meta desiderata oppure tipo di esperienza che vuoi vivere",
          "Periodo indicativo o finestre disponibili",
          "Numero di viaggiatori ed eventuali esigenze particolari",
          "Budget orientativo, se gia definito"
        ],
        supportPanel: {
          title: "Viaggio su misura o accompagnamento personale",
          text: "Se il progetto richiede piu presenza, puoi indicarlo subito. Alcuni viaggi vengono seguiti anche con accompagnamento personale, valutato in base alla struttura dell'itinerario e al tipo di supporto richiesto.",
          note: "Ogni richiesta viene letta personalmente prima di proporre la forma di supporto piu adatta."
        }
      }
    }
  };
})();
