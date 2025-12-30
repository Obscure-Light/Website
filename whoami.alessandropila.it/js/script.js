const profileData = {
  photo: 'assets/fotoprofilo.webp', 
  // Definizione dei due loghi
  logoDark: 'assets/logo-white.png',   // Logo Bianco (per sfondo scuro)
  logoLight: 'assets/logo-black.png', // Logo Scuro (per sfondo chiaro)
  
  name: 'Alessandro Pila',
  role: 'Cybersecurity Engineer',
  location: 'Milano, IT',
  
  socials: [
    { label: 'Save Contact', url: 'assets/alessandro-pila.vcf', icon: 'vcard', download: true },
    { label: 'Email Me', url: 'mailto:contact@alessandropila.it', icon: 'email' },
    { label: 'LinkedIn', url: 'https://go.alessandropila.it/linkedin', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://go.alessandropila.it/github', icon: 'github' },
    { label: 'Instagram', url: 'https://go.alessandropila.it/instagram', icon: 'instagram' },
  ]
};

const sections = [
  {
    type: 'about',
    title: 'About Me',
    content: `Mi occupo di cybersecurity end-to-end, operando su ambienti multi-cloud e ibridi con focus su protezione, rilevamento e risposta agli incidenti.

In Accenture lavoro sulla sicurezza di infrastrutture complesse, integrando tecnologia, processi e governance per ridurre il rischio reale.

Provengo da un background in elettronica e riparazione hardware, che guida il mio approccio: capire i sistemi a fondo, individuare i punti deboli e ripararli, non solo proteggerli.

Studio Ingegneria Informatica (LM-32) e frequento un Master in Management & Cybersecurity, con un approccio orientato all’operatività, alla resilienza e alla responsabilità tecnica.

    Tecnologia · Etica · Disciplina · Visione`,
    tags: [
      'Cloud Security', 
      'Detection & Response', 
      'Governance', 
      'IT/OT', 
      'Incident Response', 
      'Automation', 
      'Identity & Access'
    ]
  },
  {
    type: 'service',
    title: 'Impegno Civico, Politico & Sicurezza',
    items: [
      { label: 'Associazione Naz. Carabinieri', icon: '⚖️' },
      { label: 'Vigile del Fuoco Volontario', icon: '🔥' },
      { label: 'Croce Rossa Italiana Militare', icon: '🚑' },
      { label: 'RLS (Sicurezza sul Lavoro)', icon: '🦺' },
      { label: 'RSU (Rappresentanza Sindacale)', icon: '📢' },
      { label: "Fratelli d'Italia", icon: '🇮🇹' },
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
      { label: 'Connect on LinkedIn', url: 'https://go.alessandropila.it/linkedin' },
      { label: 'Follow on GitHub', url: 'https://go.alessandropila.it/github' },
    ]
  }
];

const icons = {
  email: '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  linkedin: '<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
  github: '<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  instagram: '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
  vcard: '<svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="M10 9h-4"/><path d="M10 12h-4"/><path d="M10 15h-4"/><path d="M14.5 9.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"/><path d="M17 16c0-1.657-1.567-3-3.5-3s-3.5 1.343-3.5 3"/></svg>'
};

const createEl = (tag, classes) => {
  const el = document.createElement(tag);
  if (classes) el.className = classes;
  return el;
};

// --- RENDER PROFILE ---
const renderProfile = (container) => {
  const card = createEl('header', 'glass-box profile-card');
  
  // 1. Avatar
  const ring = createEl('div', 'avatar-ring');
  const img = createEl('img', 'profile__avatar');
  img.src = profileData.photo;
  img.alt = profileData.name;
  ring.appendChild(img);

  // 2. Identity Block (Nome + Logo Adattivo)
  const identity = createEl('div', 'profile__identity');
  
  const name = createEl('h1', 'profile__name');
  name.textContent = profileData.name;
  
  // LOGICA LOGO ADATTIVO
  if (profileData.logoDark) {
    const picture = document.createElement('picture');
    
    // Light Mode -> usa logos.png
    const sourceLight = document.createElement('source');
    sourceLight.srcset = profileData.logoLight;
    sourceLight.media = '(prefers-color-scheme: light)';
    
    // Default (Dark) -> usa logo.png
    const imgLogo = createEl('img', 'profile__logo');
    imgLogo.src = profileData.logoDark;
    imgLogo.alt = 'Logo';
    
    picture.append(sourceLight, imgLogo);
    identity.append(name, picture);
  } else {
    identity.appendChild(name);
  }

  // 3. Ruolo e Location
  const role = createEl('div', 'profile__role');
  role.textContent = profileData.role;

  // 4. Social Row
  const socials = createEl('div', 'social-row');
  profileData.socials.forEach(s => {
    const a = createEl('a', 'social-btn');
    a.href = s.url;
    if (s.download) {
      a.setAttribute('download', 'Alessandro-Pila.vcf');
    } else if (!s.url.startsWith('mailto:')) {
      a.target = '_blank';
      a.rel = 'noreferrer noopener';
    }
    a.innerHTML = icons[s.icon] || s.label;
    a.setAttribute('aria-label', s.label);
    socials.appendChild(a);
  });
  
  if (profileData.location) {
    const loc = createEl('div', 'profile__location');
    loc.innerHTML = `<span>📍</span> ${profileData.location}`;
    card.append(ring, identity, role, loc, socials);
  } else {
    card.append(ring, identity, role, socials);
  }

  container.appendChild(card);
};

// --- RENDER SECTIONS ---
const renderAbout = (container, data) => {
  const card = createEl('section', 'glass-box');
  const title = createEl('h2', 'section-title');
  title.textContent = data.title;
  
  const text = createEl('div', 'about-text');
  text.innerText = data.content;

  if (data.tags) {
    const badgeContainer = createEl('div', 'badges-container');
    data.tags.forEach(tag => {
      const badge = createEl('span', 'tech-badge');
      badge.textContent = tag;
      badgeContainer.appendChild(badge);
    });
    text.appendChild(badgeContainer);
  }

  card.append(title, text);
  container.appendChild(card);
};

const renderService = (container, data) => {
  const card = createEl('section', 'glass-box');
  const title = createEl('h2', 'section-title');
  title.textContent = data.title;

  const grid = createEl('div', 'service-grid');
  data.items.forEach(item => {
    const box = createEl('div', 'service-card');
    const icon = createEl('div', 'service-icon');
    icon.textContent = item.icon;
    const label = createEl('div', 'service-label');
    label.textContent = item.label;
    box.append(icon, label);
    grid.appendChild(box);
  });

  card.append(title, grid);
  container.appendChild(card);
};

const renderLinks = (container, data) => {
  const card = createEl('section', 'glass-box');
  const title = createEl('h2', 'section-title');
  title.textContent = data.title;

  const grid = createEl('div', 'link-grid');
  data.items.forEach(item => {
    const a = createEl('a', 'link-item');
    a.href = item.url;
    a.target = '_blank';
    const span = createEl('span');
    span.textContent = item.label;
    const arrow = createEl('span', 'link-arrow');
    arrow.textContent = '→'; 
    a.append(span, arrow);
    grid.appendChild(a);
  });

  card.append(title, grid);
  container.appendChild(card);
};

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;
  renderProfile(app);
  sections.forEach(section => {
    if (section.type === 'about') renderAbout(app, section);
    else if (section.type === 'service') renderService(app, section);
    else if (section.type === 'links') renderLinks(app, section);
  });
});
