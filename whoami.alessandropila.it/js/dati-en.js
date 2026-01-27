export const profileData = {
  photo: 'assets/fotoprofilo.webp',
  // Definizione dei due loghi
  logoDark: 'assets/logo-white.png',   // Logo Bianco (per sfondo scuro)
  logoLight: 'assets/logo-black.png', // Logo Scuro (per sfondo chiaro)

  name: 'Alessandro Pila',
  role: 'Cybersecurity Engineer',
  location: 'Milan, IT',

  socials: [
    { label: 'Save Contact', url: 'assets/alessandro-pila.vcf', icon: 'vcard', download: true },
    { label: 'Download CV', url: 'assets/cv_onepage_en.pdf', icon: 'download', download: true },
    { label: 'Email Me', url: 'mailto:contact@alessandropila.it', icon: 'email' },
    { label: 'LinkedIn', url: 'https://go.alessandropila.it/linkedin', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://go.alessandropila.it/github', icon: 'github' },
    { label: 'Instagram', url: 'https://go.alessandropila.it/instagram', icon: 'instagram' },
  ]
};

export const sections = [
  {
    type: 'about',
    title: 'About me',
    content: `I work in end-to-end cybersecurity, operating across multi-cloud and hybrid environments, with responsibilities ranging from solution design to real-world operational effectiveness.

At Accenture, I focus on securing complex enterprise infrastructures, integrating technology, processes, and governance to reduce actual risk, not just theoretical exposure.

I come from a background in electronics and hardware repair, which strongly influences my approach: understanding systems deeply, identifying weaknesses, and fixing them structurally, not just placing protective layers on top.

I am currently studying Computer Engineering (MSc – LM-32) and attending a Master’s program in Management & Cybersecurity, with a strong focus on operational effectiveness, resilience, and technical accountability.

Technology · Ethics · Discipline · Vision`,
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
    title: 'Numbers',
    items: [
      { value: '+3', label: 'Years in Cybersecurity' },
      { value: '+30', label: 'Security Projects' },
      { value: '+10', label: 'Vendors & Technologies' },
      { value: '+300', label: 'Certifications' },
      { value: '+7', label: 'Enterprise Platforms' },
      { value: '+9', label: 'Security Domains' },
    ]
  },
  {
    type: 'method',
    title: 'How I work',
    items: [
      'understand the context before defining the solution',
      'Measure real risk, not just noise',
      'Build repeatable processes, not heroic interventions',
      'Automate where it adds value, simplify where possible',
      'Documentation, always useful',
      'Technical responsibility before shortcuts',
    ]
  },
  {
    type: 'service',
    title: 'Civic, political and security service',
    items: [
      { label: 'Ass. Naz. Carabinieri', icon: '⚖️' },
      { label: 'Volunteer Firefighter', icon: '🔥' },
      { label: 'Italian Red Cross Military', icon: '🚑' },
    ]
  },
  {
    type: 'projects',
    title: 'Main projects',
    items: [
      { label: 'DNSAnalyzer', desc: 'DNS analysis and diagnostics with automated configuration checks.' },
      { label: 'EmailTester', desc: 'Testing email delivery and configuration health.' },
      { label: 'IPHostResolver', desc: 'Fast host and IP resolution utilities.' },
    ]
  },
  {
    type: 'links',
    title: 'Training & badges',
    items: [
      { label: 'Credly', url: 'https://go.alessandropila.it/credly' },
      { label: 'Microsoft Learn', url: 'https://learn.microsoft.com/it-it/users/pilaalessandro-4080/' },
      { label: 'Accredible', url: 'https://go.alessandropila.it/accredible' },
      { label: 'OneDrive - Portfolio', url: 'https://go.alessandropila.it/portfolio' },
    ]
  },
  {
    type: 'links',
    title: 'Contacts & resources',
    items: [
      { label: 'Connect on LinkedIn', url: 'https://go.alessandropila.it/linkedin' },
      { label: 'Follow on GitHub', url: 'https://go.alessandropila.it/github' },
      { label: 'Training', url: 'https://formazione.alessandropila.it' },
    ]
  }
];
