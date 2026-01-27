export const profileData = {
  photo: 'assets/fotoprofilo.webp',
  // Definizione dei due loghi
  logoDark: 'assets/logo-white.png',   // Logo Bianco (per sfondo scuro)
  logoLight: 'assets/logo-black.png', // Logo Scuro (per sfondo chiaro)

  name: 'Alessandro Pila',
  role: 'Cybersecurity Engineer',
  location: 'Milano, IT',

  socials: [
    { label: 'Salva contatto', url: 'assets/alessandro-pila.vcf', icon: 'vcard', download: true },
    { label: 'Scarica CV', url: 'assets/cv_onepage_it.pdf', icon: 'download', download: true },
    { label: 'Scrivimi', url: 'mailto:contact@alessandropila.it', icon: 'email' },
    { label: 'LinkedIn', url: 'https://go.alessandropila.it/linkedin', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://go.alessandropila.it/github', icon: 'github' },
    { label: 'Instagram', url: 'https://go.alessandropila.it/instagram', icon: 'instagram' },
  ]
};

export const sections = [
  {
    type: 'about',
    title: 'Chi sono',
    content: `Mi occupo di cybersecurity end-to-end, operando su ambienti multi-cloud e ibridi con responsabilità che vanno dalla progettazione all’operatività reale delle soluzioni di sicurezza.

In Accenture lavoro sulla protezione di infrastrutture enterprise complesse, integrando tecnologia, processi e governance per ridurre il rischio concreto, non solo quello teorico.

Provengo da un background in elettronica e riparazione hardware, che guida il mio approccio: comprendere i sistemi a fondo, individuare i punti deboli e intervenire in modo strutturato, non limitarmi a “coprire” i problemi.

Studio Ingegneria Informatica (LM-32) e frequento un Master in Management & Cybersecurity, con un’impostazione orientata all’operatività, alla resilienza e alla responsabilità tecnica.

Tecnologia · Etica · Disciplina · Visione`,
    tags: [
      'Cloud Security',
      'Detection & Response',
      'Governance',
      'IT/OT',
      'Incident Response',
      'Automation',
      'Identity & Access',
    ]
  },
  {
    type: 'numbers',
    title: 'Numeri',
    items: [
      { value: '+3', label: 'Anni in cybersecurity' },
      { value: '+30', label: 'Progetti conclusi' },
      { value: '+10', label: 'Tecnologie' },
      { value: '+300', label: 'Certificazioni' },
      { value: '+7', label: 'Piattaforme enterprice' },
      { value: '+9', label: 'Domini di sicurezza' },
    ]
  },
  {
    type: 'method',
    title: 'Come lavoro',
    items: [
      'Capisco il contesto prima di definire la soluzione',
      'Misuro il rischio, non solo il rumore',
      'Privilegio processi ripetibili, non interventi eroici',
      'Automatizzo dove serve, semplifico dove possibile',
      'Documentazione sempre utile',
      'Responsabilita tecnica prima delle scorciatoie',
    ]
  },
  {
    type: 'service',
    title: 'Impegno Civico, Politico & Sicurezza',
    items: [
      { label: 'Ass. Naz. Carabinieri', icon: '⚖️' },
      { label: 'Vigile del Fuoco Volontario', icon: '🔥' },
      { label: 'Croce Rossa Italiana Militare', icon: '🚑' },
    ]
  },
  {
    type: 'projects',
    title: 'Progetti principali',
    items: [
      { label: 'DNSAnalyzer', desc: 'DNS analysis and diagnostics with automated configuration checks.' },
      { label: 'EmailTester', desc: 'Email delivery verification and security configuration testing.' },
      { label: 'Website ANC Pavia', desc: 'Official website for the National Carabinieri Association – Pavia section.' },
      { label: 'VVFscheduler', desc: 'Randomized shift scheduling management for volunteer firefighters.' },
    ]
  },
  {
    type: 'links',
    title: 'Formazione & Badge',
    items: [
      { label: 'Credly', url: 'https://go.alessandropila.it/credly' },
      { label: 'Microsoft Learn', url: 'https://learn.microsoft.com/it-it/users/pilaalessandro-4080/' },
      { label: 'Accredible', url: 'https://go.alessandropila.it/accredible' },
      { label: 'OneDrive - Portfolio', url: 'https://go.alessandropila.it/portfolio' },
    ]
  },
  {
    type: 'links',
    title: 'Contatti & Risorse',
    items: [
      { label: 'Collegati su LinkedIn', url: 'https://go.alessandropila.it/linkedin' },
      { label: 'Segui su GitHub', url: 'https://go.alessandropila.it/github' },
      { label: 'Formazione', url: 'https://formazione.alessandropila.it' },
    ]
  }
];
