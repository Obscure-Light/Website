const linkData = Object.freeze([
  {
    type: 'profile',
    photo: 'assets/fotoprofilo.webp',
    name: 'Alessandro Pila',
    title: 'Cybersecurity Engineer \u00b7 Cloud & Infrastructure \u00b7 Detection & Response',
    bio: 'Progetto, proteggo e governo infrastrutture cloud e ibride complesse. Opero in ambienti cloud e on-prem integrando cybersecurity, networking, automazione e governance, con un approccio operativo orientato alla resilienza e alla gestione del rischio reale.',
    socials: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alessandropila',
        icon: 'linkedin',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/Obscure-Light',
        icon: 'github',
      },
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/pila.alessandro/#',
        icon: 'instagram',
      },
    ],
  },
  {
    type: 'section',
    title: 'About Me',
    buttons: [
      {
        label: `\uD83D\uDEE1\uFE0F Cybersecurity Engineer

Mi occupo di sicurezza informatica a 360\u00b0.
Lavoro in Accenture, operando su ambienti multi-cloud, ibridi e locali, dalla prevenzione dei sistemi IT/OT alla risposta agli incidenti, fino alla governance.

Studio Ingegneria Informatica (LM-32) e frequento un Master di I livello in Management & Cybersecurity, perch\u00e9 credo che la sicurezza efficace nasca dall'incontro tra competenza tecnica e capacit\u00e0 decisionale.

Mi formo continuamente per essere pronto quando il contesto \u00e8 complesso e non c'\u00e8 margine di errore.

\uD83E\uDD1D Impegno civico
RLS \u00b7 RSU FIOM \u00b7 Volontario ANC \u00b7 Vigile del Fuoco Volontario
Vivo la sicurezza anche fuori dall'IT come responsabilit\u00e0 verso le persone e presenza sul campo.

\uD83D\uDCDC 369+ certificazioni e abilitazioni
Dal digitale alla sicurezza operativa, una visione completa e concreta della protezione.

\uD83D\uDD11 Tecnologia \u00b7 Etica \u00b7 Disciplina \u00b7 Visione
\uD83D\uDCCD Milano \u2014 operativo ovunque
\uD83D\uDE80 Percorso verso ruoli di Security Manager`,
        variant: 'about',
      },
    ],
  },
  {
    type: 'section',
    title: 'Formazione',
    buttons: [
      {
        label: 'Credly - Portfolio Badge',
        url: 'https://www.credly.com/users/alessandro-pila',
      },
      {
        label: 'Accredible - Skillsoft Wallet',
        url: 'https://skillsoft.digitalbadges.skillsoft.com/profile/alessandropila256379/wallet',
      },
      {
        label: 'Microsoft Learn Dashboard',
        url: 'https://learn.microsoft.com/it-it/users/pilaalessandro-4080/',
      },
      {
        label: 'OneDrive - Attestati e Portfolio',
        url: 'https://1drv.ms/f/c/a293a790e56ccdc0/IgAqZtKVJYoeRLiFwfCf9UvYAUB8KFEv8u8Bo0dXBXLHwpA',
      },
    ],
  },
  {
    type: 'section',
    title: 'Contatti',
    buttons: [
      {
        label: 'LinkedIn - Networking',
        url: 'https://www.linkedin.com/in/alessandropila',
      },
      {
        label: 'GitHub - Obscure-Light',
        url: 'https://github.com/Obscure-Light',
      },
      {
        label: 'Instagram - pila.alessandro',
        url: 'https://www.instagram.com/pila.alessandro/#',
      },
    ],
  },
]);

const iconMarkup = {
  instagram:
    '<svg class="socials__icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" stroke-width="1.8" fill="none"></rect><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8" fill="none"></circle><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"></circle></svg>',
  github:
    '<svg class="socials__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.9 9.4.5.1.6-.2.6-.4v-1.6c-2.8.6-3.4-1.3-3.4-1.3-.4-1-1-1.2-1-1.2-.8-.5.1-.5.1-.5.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.3-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 4-2.4 4.9-4.7 5.2.4.4.6 1 .6 1.9v2.8c0 .2.1.5.6.4A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10Z" fill="currentColor"/></svg>',
  linkedin:
    '<svg class="socials__icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" ry="3" stroke="currentColor" stroke-width="1.5" fill="none"></rect><rect x="6.3" y="10.3" width="2.6" height="7.7" fill="currentColor"></rect><rect x="6.3" y="6" width="2.6" height="2.5" fill="currentColor"></rect><path d="M15 10.2c-1.7 0-2.4.9-2.8 1.6V10h-2.6v8h2.6v-4.4c0-.7.3-1.6 1.4-1.6 1.1 0 1.2.9 1.2 1.7V18H17v-4.6c0-2-1-3.2-2-3.2z" fill="currentColor"></path></svg>',
};

const renderProfile = (container, data) => {
  const header = document.createElement('header');
  header.className = 'profile';

  const img = document.createElement('img');
  img.src = data.photo;
  img.alt = `Foto profilo di ${data.name}`;
  img.className = 'profile__avatar';

  const name = document.createElement('h1');
  name.className = 'profile__name';
  name.textContent = data.name;

  const logo = document.createElement('img');
  logo.src = 'assets/logo.png';
  logo.alt = 'Logo di Alessandro Pila';
  logo.className = 'profile__logo';

  const headline = document.createElement('div');
  headline.className = 'profile__headline';
  headline.append(name, logo);

  const title = document.createElement('p');
  title.className = 'profile__title';
  title.textContent = data.title;

  const bio = document.createElement('p');
  bio.className = 'profile__bio';
  bio.textContent = data.bio;

  header.append(img, headline, title, bio);

  if (Array.isArray(data.socials) && data.socials.length) {
    const nav = document.createElement('nav');
    nav.className = 'socials';
    nav.setAttribute('aria-label', 'Link social');

    data.socials.forEach((social) => {
      const anchor = document.createElement('a');
      anchor.className = 'socials__link';
      anchor.href = social.url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.setAttribute('aria-label', social.label);
      anchor.innerHTML = iconMarkup[social.icon] || '';
      nav.append(anchor);
    });

    header.append(nav);
  }

  container.append(header);
};

const renderSection = (container, data) => {
  const section = document.createElement('section');
  section.className = 'links-section';

  const title = document.createElement('h2');
  title.className = 'links-section__title';
  title.textContent = data.title;

  const list = document.createElement('div');
  list.className = 'links-list';

  (data.buttons || []).forEach((button) => {
    const anchor = document.createElement('a');
    anchor.className = 'link-button';

    if (button.variant) {
      anchor.classList.add(`link-button--${button.variant}`);
    }

    if (button.url) {
      anchor.href = button.url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    } else {
      anchor.classList.add('link-button--static');
      anchor.setAttribute('role', 'article');
      anchor.tabIndex = 0;
    }

    anchor.textContent = button.label;
    list.append(anchor);
  });

  section.append(title, list);
  container.append(section);
};

const init = () => {
  const app = document.getElementById('app');

  if (!app) {
    console.warn('Elemento #app mancante.');
    return;
  }

  const card = document.createElement('section');
  card.className = 'card';

  linkData.forEach((item) => {
    if (item.type === 'profile') {
      renderProfile(card, item);
    }

    if (item.type === 'section') {
      renderSection(card, item);
    }
  });

  app.replaceChildren(card);
};

document.addEventListener('DOMContentLoaded', init);
