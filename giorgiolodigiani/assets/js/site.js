(() => {
  const siteContent = window.siteContent;
  const app = document.querySelector("[data-app]");
  const pageKey = document.body.dataset.page || "home";

  if (!siteContent || !app) {
    return;
  }

  const { global, navigation, shared, pages } = siteContent;
  const page = pages[pageKey] || pages.home;

  const icons = {
    arrow: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    chevron: '<path d="m9 6 6 6-6 6"></path>',
    compass: '<circle cx="12" cy="12" r="9"></circle><path d="m14.8 9.2-2.5 7-3.1-3.1 5.6-3.9Z"></path>',
    heart: '<path d="M12 20.2 4.9 13a4.8 4.8 0 0 1 6.8-6.8L12 6.5l.3-.3A4.8 4.8 0 0 1 19.1 13Z"></path>',
    city: '<path d="M4 20V9l5-3v14"></path><path d="M9 20V4l6 3v13"></path><path d="M15 20v-8l5-2v10"></path><path d="M7 11h.01"></path><path d="M12 10h.01"></path><path d="M17 14h.01"></path>',
    family: '<path d="M8 20v-6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6"></path><circle cx="12" cy="7" r="3"></circle><path d="M3 20v-3a2.5 2.5 0 0 1 2.5-2.5H7"></path><path d="M21 20v-3a2.5 2.5 0 0 0-2.5-2.5H17"></path>',
    waves: '<path d="M2 13c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1"></path><path d="M2 17c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1"></path>',
    map: '<path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2Z"></path><path d="M9 4v14"></path><path d="M15 6v14"></path>',
    ear: '<path d="M8 9a4 4 0 1 1 8 0c0 2-1 2.8-2 3.7-.8.7-1 1.2-1 2.3"></path><path d="M12 19a1 1 0 1 0 0 .01"></path>',
    spark: '<path d="M12 3v4"></path><path d="M12 17v4"></path><path d="M3 12h4"></path><path d="M17 12h4"></path><path d="m5.6 5.6 2.8 2.8"></path><path d="m15.6 15.6 2.8 2.8"></path><path d="m18.4 5.6-2.8 2.8"></path><path d="m8.4 15.6-2.8 2.8"></path>',
    shield: '<path d="M12 3 5 6v5c0 4.2 2.7 8 7 10 4.3-2 7-5.8 7-10V6Z"></path><path d="m9.5 12 1.7 1.7L14.8 10"></path>',
    plane: '<path d="M2 16l20-4-20-4 5 4-5 4Z"></path><path d="M8 12h14"></path>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.8a16 16 0 0 0 6.2 6.2l1.4-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z"></path>',
    whatsapp:
      '<path d="M20 12a8 8 0 0 1-11.7 7L4 20l1.1-4.1A8 8 0 1 1 20 12Z"></path><path d="M8.3 8.7c.2-.4.4-.5.7-.5h.6c.2 0 .4 0 .6.4l.5 1.5c.1.3 0 .5-.1.6l-.4.5c-.1.1-.2.2 0 .4.2.4.8 1.2 1.8 1.8.2.1.3.1.4 0l.5-.6c.2-.2.4-.2.6-.1l1.4.6c.2.1.3.3.3.5-.1.6-.3 1.2-.8 1.5-.4.2-.8.3-1.3.2a6.3 6.3 0 0 1-4.8-4.5c-.1-.6-.1-1.2.2-1.7.2-.3.4-.5.6-.6Z"></path>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle>',
    user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 20a8 8 0 0 1 16 0"></path>',
    message: '<path d="M4 5h16v10H7l-3 3Z"></path>',
    camera: '<path d="M4 8h3l1.4-2h7.2L17 8h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"></path><circle cx="12" cy="14" r="3.4"></circle>'
  };

  const icon = (name) => `
    <svg class="ui-icon ${name === "whatsapp" ? "ui-icon--whatsapp" : ""}" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.spark}</svg>
  `;

  const createMetaChips = (items = []) => items.map((item) => `<span class="meta-chip">${item}</span>`).join("");
  const createListItems = (items = []) => items.map((item) => `<li>${item}</li>`).join("");
  const getLinkAttributes = (href = "", options = {}) => {
    const { external = false } = options;
    const opensNewTab = external || /^https?:\/\//i.test(href);
    return opensNewTab ? ' target="_blank" rel="noopener noreferrer"' : "";
  };

  const setSeo = () => {
    document.title = page.seo.title;
    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", page.seo.description);
    }
  };

  const renderHeader = () => `
    <a class="skip-link" href="#main-content">Vai al contenuto</a>
    <header class="site-header" data-header>
      <div class="shell header-inner">
        <a class="brand" href="index.html" aria-label="${global.siteName}, torna alla home">
          <span class="brand-mark">GL</span>
          <span class="brand-copy">
            <strong>${global.siteName}</strong>
            <span>${global.role}</span>
          </span>
        </a>

        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Apri il menu principale" data-menu-toggle>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="main-nav" id="primary-navigation" aria-label="Navigazione principale">
          ${navigation
            .map(
              (item) => `
                <a href="${item.href}" class="${item.key === pageKey ? "is-active" : ""}" ${item.key === pageKey ? 'aria-current="page"' : ""}>
                  ${item.label}
                </a>
              `
            )
            .join("")}
        </nav>

        <div class="header-actions">
          <a class="button button--secondary button--small" href="${global.contacts.phoneHref}">
            ${icon("phone")}
            <span>Chiamami</span>
          </a>
        </div>
      </div>
    </header>
  `;

  const renderHero = (hero) => `
    <section class="hero">
      <div class="shell hero-grid">
        <div class="hero-copy reveal">
          <span class="eyebrow">${hero.eyebrow}</span>
          <h1>${hero.title}</h1>
          <p>${hero.description}</p>
          <div class="hero-actions">
            <a class="button button--primary" href="${hero.primaryCta.href}"${getLinkAttributes(hero.primaryCta.href)}>
              ${icon("arrow")}
              <span>${hero.primaryCta.label}</span>
            </a>
            <a class="button button--ghost" href="${hero.secondaryCta.href}"${getLinkAttributes(hero.secondaryCta.href)}>
              <span>${hero.secondaryCta.label}</span>
            </a>
          </div>
          <div class="hero-pills">
            ${hero.pills.map((item) => `<span class="pill">${item}</span>`).join("")}
          </div>
        </div>

        <div class="hero-panel reveal">
          <span class="hero-badge">${hero.badge}</span>
          <div class="hero-orbit" aria-hidden="true"></div>
          <div class="hero-image">
            <img src="${hero.image}" alt="${hero.imageAlt}" loading="eager" fetchpriority="high" decoding="async">
          </div>
          <div class="hero-card">
            <strong>${hero.cardTitle}</strong>
            <p>${hero.cardText}</p>
            <span>${hero.cardMeta}</span>
          </div>
        </div>
      </div>
    </section>
  `;

  const renderSectionHeading = (title, text, eyebrow = "Sezione") => `
    <div class="shell section-heading reveal">
      <div>
        <span class="eyebrow">${eyebrow}</span>
        <h2>${title}</h2>
      </div>
      <p>${text}</p>
    </div>
  `;

  const renderServiceCards = (items) => `
    <div class="shell cards-grid">
      ${items
        .map(
          (item) => `
            <article class="card reveal">
              <div class="card-icon">${icon(item.icon)}</div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
              ${item.meta ? `<div class="card-meta">${createMetaChips(item.meta)}</div>` : ""}
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const renderPillarCards = (items) => `
    <div class="shell pillar-grid">
      ${items
        .map(
          (item) => `
            <article class="pillar-card reveal">
              <span class="eyebrow">${item.eyebrow}</span>
              <div class="card-icon">${icon(item.icon)}</div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
              ${item.meta ? `<div class="card-meta">${createMetaChips(item.meta)}</div>` : ""}
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const renderJourneyCards = (items) => `
    <div class="shell cards-grid">
      ${items
        .map(
          (item) => `
            <article class="card card--media reveal">
              <div class="card-media">
                <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">
              </div>
              <div class="card-body">
                <span class="card-tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                <div class="card-meta">${createMetaChips(item.chips)}</div>
                <a class="text-link" href="contatti.html#contact-form">
                  <span>Parti da questa idea</span>
                  ${icon("arrow")}
                </a>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const renderGalleryCards = (items, options = {}) => {
    const { preview = false } = options;
    const list = Array.isArray(items) ? items : [];

    if (list.length === 0) {
      return `
        <div class="shell gallery-empty reveal">
          <strong>Galleria in aggiornamento</strong>
          <p>Nuove immagini e nuove descrizioni saranno pubblicate a breve.</p>
        </div>
      `;
    }

    return `
      <div class="shell gallery-grid ${preview ? "gallery-grid--preview" : ""}">
        ${list
          .map(
            (item) => `
              <article class="gallery-card gallery-card--${item.layout || "standard"} reveal">
                <div class="gallery-media">
                  <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">
                </div>
                <div class="gallery-copy">
                  <div class="gallery-meta">
                    <span class="card-tag">${item.tag}</span>
                    <span class="gallery-location">${item.location}</span>
                  </div>
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                  ${item.chips ? `<div class="card-meta">${createMetaChips(item.chips)}</div>` : ""}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  };

  const renderTestimonials = (items) => {
    const list = Array.isArray(items) ? items : [];
    const cards =
      list.length > 0
        ? list
            .map((item) => {
              const stars = "&#9733;".repeat(Math.max(1, Math.min(Number(item.score || 5), 5)));
              return `
                <article class="review-card reveal">
                  <p class="review-stars" aria-label="Valutazione ${item.score || 5} su 5">${stars}</p>
                  <blockquote>"${item.quote}"</blockquote>
                  <div class="review-meta">
                    <strong>${item.author}</strong>
                    <span>${item.trip}</span>
                  </div>
                </article>
              `;
            })
            .join("")
        : `
          <article class="review-card review-card--empty reveal">
            <p class="review-stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <blockquote>Le recensioni saranno pubblicate qui non appena disponibili.</blockquote>
            <div class="review-meta">
              <strong>Sezione in aggiornamento</strong>
              <span>Contenuto editoriale pronto per l'inserimento</span>
            </div>
          </article>
        `;

    return `
    <div class="shell reviews-grid">
      ${cards}
    </div>
  `;
  };

  const renderMapSection = (section) => {
    const locations = Array.isArray(shared.visitedLocations) ? shared.visitedLocations : [];
    const locationItems =
      locations.length > 0
        ? locations
            .map(
              (location, index) => `
                <li class="visited-map-item ${location.featured ? "is-featured" : ""}" data-map-item="${index}">
                  <button class="visited-map-item-button" type="button" data-map-trigger="${index}" aria-label="Mostra ${location.name} sulla mappa">
                    <span class="visited-map-dot" aria-hidden="true"></span>
                    <span>
                      <strong>${location.name}</strong>
                      <small>${location.country}</small>
                    </span>
                  </button>
                </li>
              `
            )
            .join("")
        : `
          <li class="visited-map-item is-empty">
            <div class="visited-map-item-copy">
              <span class="visited-map-dot" aria-hidden="true"></span>
              <strong>Mete in aggiornamento</strong>
              <small>Nuove destinazioni saranno pubblicate a breve</small>
            </div>
          </li>
        `;

    return `
    <section class="section section--visited-map">
      ${renderSectionHeading(section.title, section.text, section.eyebrow || "Mappa")}
      <div class="shell visited-map-grid">
        <article class="visited-map-panel reveal">
          <div class="visited-map-frame">
            <div
              class="visited-map"
              data-visited-map
              role="region"
              aria-label="Mappa interattiva delle mete visitate"
            ></div>
            <p class="map-status" data-map-status hidden></p>
          </div>
          <p class="small-note">${section.note}</p>
        </article>

        <article class="visited-map-list-panel reveal">
          <span class="eyebrow">Mete visitate</span>
          <h3>Destinazioni sulla mappa</h3>
          <ul class="visited-map-list">
            ${locationItems}
          </ul>
        </article>
      </div>
    </section>
  `;
  };

  const renderTimeline = (items) => `
    <div class="shell">
      <div class="timeline">
        ${items
          .map(
            (item, index) => `
              <article class="timeline-step reveal">
                <span class="step-number">0${index + 1}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  const renderStats = (items) => `
    <div class="stats-grid">
      ${items
        .map(
          (item) => `
            <article class="stat-card reveal">
              <strong>${item.value}</strong>
              <span>${item.label}</span>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const renderValues = () => `
    <div class="shell cards-grid">
      ${shared.values
        .map(
          (item) => `
            <article class="card reveal">
              <div class="card-icon">${icon(item.icon)}</div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const renderFaq = () => `
    <div class="shell details-grid">
      ${shared.faq
        .map(
          (item) => `
            <details class="faq-item reveal">
              <summary>
                <span>${item.question}</span>
                <span class="faq-toggle" aria-hidden="true">${icon("chevron")}</span>
              </summary>
              <p>${item.answer}</p>
            </details>
          `
        )
        .join("")}
    </div>
  `;

  const renderBand = (band) => `
    <section class="band">
      <div class="shell">
        <div class="band-panel reveal">
          <div>
            <span class="eyebrow eyebrow--light">Parliamone</span>
            <h2>${band.title}</h2>
            <p>${band.text}</p>
          </div>
          <div class="band-actions">
            <a class="button button--light" href="${band.primaryCta.href}"${getLinkAttributes(band.primaryCta.href)}>
              ${icon("message")}
              <span>${band.primaryCta.label}</span>
            </a>
            <a class="button button--line" href="${band.secondaryCta.href}"${getLinkAttributes(band.secondaryCta.href)}>
              <span>${band.secondaryCta.label}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  const renderHome = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      ${renderSectionHeading(page.pillarsSection.title, page.pillarsSection.text, "Pilastri")}
      ${renderPillarCards(shared.brandPillars)}
    </section>

    <section class="section section--compact">
      <div class="shell split-panel">
        <article class="feature-panel reveal">
          <span class="eyebrow">Presentazione</span>
          <h2>${page.intro.title}</h2>
          <p>${page.intro.text}</p>
          <ul class="list-check">
            ${createListItems(shared.promiseList)}
          </ul>
        </article>
        <article class="feature-panel reveal">
          <span class="eyebrow">Metodo</span>
          <h2>${page.signature.title}</h2>
          <p>${page.signature.text}</p>
          ${renderStats(shared.homeStats)}
        </article>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading(page.servicesSection.title, page.servicesSection.text, "Servizi")}
      ${renderServiceCards(shared.services.slice(0, 4))}
    </section>

    <section class="section">
      ${renderSectionHeading(page.journeysSection.title, page.journeysSection.text, "Viaggi")}
      ${renderJourneyCards(shared.journeys.slice(0, 3))}
    </section>

    <section class="section">
      ${renderSectionHeading(page.gallerySection.title, page.gallerySection.text, "Galleria")}
      ${renderGalleryCards(shared.galleryItems.slice(0, 3), { preview: true })}
      <div class="shell section-cta reveal">
        <a class="text-link text-link--large" href="${page.gallerySection.cta.href}">
          <span>${page.gallerySection.cta.label}</span>
          ${icon("arrow")}
        </a>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading(page.reviewsSection.title, page.reviewsSection.text, "Recensioni")}
      ${renderTestimonials(shared.testimonials)}
    </section>

    <section class="section">
      ${renderSectionHeading(page.processSection.title, page.processSection.text, "Metodo")}
      ${renderTimeline(shared.process)}
    </section>

    ${renderBand(page.band)}
  `;

  const renderAbout = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      <div class="shell split-panel">
        <article class="feature-panel reveal">
          <span class="eyebrow">Profilo</span>
          <h2>${page.story.title}</h2>
          ${page.story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </article>
        <article class="feature-panel reveal">
          <span class="eyebrow">Valori</span>
          <h2>Una consulenza che privilegia chiarezza, ritmo e qualita percepita.</h2>
          <p>${page.method.text}</p>
          <ul class="list-check">
            ${createListItems(shared.promiseList)}
          </ul>
        </article>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading("I pilastri dell'approccio", "Quattro valori che guidano ogni consulenza e ogni proposta di viaggio.", "Valori")}
      ${renderValues()}
    </section>

    <section class="section">
      ${renderSectionHeading(page.method.title, "Un processo chiaro in quattro fasi, dalla prima call alla partenza.", "Processo")}
      ${renderTimeline(shared.process)}
    </section>

    ${renderBand(page.band)}
  `;

  const renderServicesPage = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      ${renderSectionHeading(page.pillarsSection.title, page.pillarsSection.text, "Pilastri")}
      ${renderPillarCards(shared.brandPillars)}
    </section>

    <section class="section section--compact">
      <div class="shell split-panel">
        <article class="feature-panel reveal">
          <span class="eyebrow">Servizi</span>
          <h2>${page.intro.title}</h2>
          <p>${page.intro.text}</p>
        </article>
        <article class="feature-panel reveal">
          <span class="eyebrow">Incluso</span>
          <h2>${page.includeTitle}</h2>
          <ul class="list-check">
            ${createListItems(page.includes)}
          </ul>
        </article>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading("Servizi operativi", "Dopo il posizionamento dei due pilastri, qui trovi le aree concrete in cui posso intervenire sul progetto.", "Servizi")}
      ${renderServiceCards(shared.services)}
    </section>

    <section class="section">
      ${renderSectionHeading("Processo di lavoro", "Dopo il primo contatto, ogni fase e definita con tempi e obiettivi chiari.", "Metodo")}
      ${renderTimeline(shared.process)}
    </section>

    <section class="section">
      ${renderSectionHeading(page.faqTitle, page.faqText, "FAQ")}
      ${renderFaq()}
    </section>

    ${renderBand(page.band)}
  `;

  const renderJourneysPage = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      <div class="shell split-panel">
        <article class="feature-panel reveal">
          <span class="eyebrow">Lettura</span>
          <h2>${page.intro.title}</h2>
          <p>${page.intro.text}</p>
          <ul class="list-check">
            ${createListItems(page.editorialList)}
          </ul>
        </article>
        <article class="feature-panel reveal">
          <span class="eyebrow">Accompagnamento</span>
          <h2>${page.accompanimentPanel.title}</h2>
          <p>${page.accompanimentPanel.text}</p>
        </article>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading("Selezione editoriale", "Sei proposte visive per raccontare atmosfera, ritmo e tipo di esperienza da cui partire.", "Viaggi")}
      ${renderJourneyCards(shared.journeys)}
    </section>

    <section class="section">
      ${renderSectionHeading(page.stylesTitle, page.stylesText, "Taglio")}
      ${renderServiceCards(shared.tripStyles)}
    </section>

    ${renderMapSection(page.mapSection)}

    ${renderBand(page.band)}
  `;

  const renderGalleryPage = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      <div class="shell split-panel">
        <article class="feature-panel reveal">
          <span class="eyebrow">Galleria</span>
          <h2>${page.intro.title}</h2>
          <p>${page.intro.text}</p>
        </article>
        <article class="feature-panel reveal">
          <span class="eyebrow">Lettura</span>
          <h2>${page.notesTitle}</h2>
          <ul class="list-check">
            ${createListItems(page.notesList)}
          </ul>
        </article>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading(page.gallerySection.title, page.gallerySection.text, "Selezione")}
      ${renderGalleryCards(shared.galleryItems)}
    </section>

    ${renderBand(page.band)}
  `;

  const renderContactChannels = () => `
    <div class="contact-list">
      ${shared.contactChannels
        .map(
          (channel) => `
            <a class="contact-link contact-link--${channel.icon} reveal" href="${channel.href}"${getLinkAttributes(channel.href, { external: channel.external })}>
              <span class="card-icon card-icon--${channel.icon}">${icon(channel.icon)}</span>
              <span>
                <strong>${channel.title}</strong>
                <small>${channel.value}</small>
                <em>${channel.note}</em>
              </span>
            </a>
          `
        )
        .join("")}
    </div>
  `;

  const renderContactPage = () => `
    ${renderHero(page.hero)}

    <section class="section section--compact">
      <div class="shell contact-grid">
        <article class="feature-panel reveal">
          <span class="eyebrow">Recapiti</span>
          <h2>${page.contactTitle}</h2>
          <p>${page.contactText}</p>
          ${renderContactChannels()}
          <div class="contact-note">
            <p><strong>Disponibilita:</strong> ${global.contacts.hours}</p>
            <p><strong>Modalita:</strong> ${global.contacts.location}</p>
          </div>
        </article>

        <article class="form-panel reveal" id="contact-form">
          <span class="eyebrow">Modulo</span>
          <h2>${page.form.title}</h2>
          <p>${page.form.text}</p>
          <form data-contact-form novalidate>
            <div class="form-grid">
              <label class="field">
                <span>${page.form.fields.name}</span>
                <input type="text" name="name" required autocomplete="name" placeholder="Il tuo nome">
              </label>
              <label class="field">
                <span>${page.form.fields.email}</span>
                <input type="email" name="email" required autocomplete="email" inputmode="email" placeholder="nome@email.it">
              </label>
              <label class="field">
                <span>${page.form.fields.type}</span>
                <select name="type">
                  ${page.form.options.map((option) => `<option value="${option}">${option}</option>`).join("")}
                </select>
              </label>
              <label class="field">
                <span>${page.form.fields.period}</span>
                <input type="text" name="period" placeholder="Es. Agosto 2026">
              </label>
              <label class="field field--full">
                <span>${page.form.fields.guests}</span>
                <input type="text" name="guests" placeholder="Es. 2 adulti">
              </label>
              <label class="field field--full">
                <span>${page.form.fields.message}</span>
                <textarea name="message" required spellcheck="true" placeholder="Descrivi meta, stile, budget o idee iniziali"></textarea>
              </label>
            </div>
            <button class="button button--primary" type="submit">
              ${icon("mail")}
              <span>${page.form.submitLabel}</span>
            </button>
            <p class="form-feedback" data-form-feedback role="status" aria-live="polite">${page.form.feedbackIdle}</p>
          </form>
        </article>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading(page.planningTitle, "Un breve promemoria per inviare una richiesta completa e ricevere una proposta piu precisa.", "Checklist")}
      <div class="shell split-panel">
        <article class="feature-panel reveal">
          <span class="eyebrow">Checklist</span>
          <h2>Le informazioni utili da preparare</h2>
          <ul class="list-check">
            ${createListItems(page.planningList)}
          </ul>
        </article>
        <article class="feature-panel reveal">
          <span class="eyebrow">Supporto</span>
          <h2>${page.supportPanel.title}</h2>
          <p>${page.supportPanel.text}</p>
          <p class="small-note">${page.supportPanel.note}</p>
        </article>
      </div>
    </section>

    <section class="section">
      ${renderSectionHeading("Domande frequenti", "Una FAQ finale aiuta a rimuovere dubbi prima del primo contatto.", "FAQ")}
      ${renderFaq()}
    </section>
  `;

  const renderFooter = () => `
    <footer class="footer">
      <div class="shell">
        <div class="footer-panel reveal">
          <div class="footer-top">
            <div>
              <div class="brand footer-brand">
                <span class="brand-mark">GL</span>
                <span class="brand-copy">
                  <strong>${global.siteName}</strong>
                  <span>${global.role}</span>
                </span>
              </div>
              <p class="small-note">${global.footerText}</p>
            </div>
            <div class="footer-nav">
              <strong>Navigazione</strong>
              ${navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
            </div>
            <div class="footer-contacts">
              <strong>Contatti</strong>
              <a href="${global.contacts.emailHref}">${global.contacts.email}</a>
              <a href="${global.contacts.phoneHref}">${global.contacts.phoneDisplay}</a>
              <a href="${global.contacts.whatsappHref}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <span>${global.contacts.hours}</span>
            </div>
          </div>
          <div class="footer-bottom">
            <span>&copy; <span data-year></span> ${global.siteName}</span>
            <span>${global.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  `;

  const renderQuickActions = () => `
    <nav class="quick-actions" aria-label="Contatti rapidi">
      <a class="quick-action quick-action--phone" href="${global.contacts.phoneHref}" aria-label="Chiamami">
        ${icon("phone")}
      </a>
      <a class="quick-action quick-action--whatsapp is-primary" href="${global.contacts.whatsappHref}" aria-label="Scrivi su WhatsApp" target="_blank" rel="noopener noreferrer">
        ${icon("whatsapp")}
      </a>
      <a class="quick-action quick-action--mail" href="${global.contacts.emailHref}" aria-label="Invia una email">
        ${icon("mail")}
      </a>
    </nav>
  `;

  const renderPage = () => {
    switch (pageKey) {
      case "about":
        return renderAbout();
      case "services":
        return renderServicesPage();
      case "journeys":
        return renderJourneysPage();
      case "gallery":
        return renderGalleryPage();
      case "contact":
        return renderContactPage();
      case "home":
      default:
        return renderHome();
    }
  };

  const bindHeader = () => {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector("[data-menu-toggle]");
    const mobileNav = window.matchMedia("(max-width: 900px)");

    if (!header || !toggle) {
      return;
    }

    const closeMenu = () => {
      header.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Apri il menu principale");
    };

    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Chiudi il menu principale" : "Apri il menu principale");
    });

    document.querySelectorAll(".main-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (header.classList.contains("is-open") && !header.contains(event.target)) {
        closeMenu();
      }
    });

    const handleViewportChange = (event) => {
      if (!event.matches) {
        closeMenu();
      }
    };

    if (typeof mobileNav.addEventListener === "function") {
      mobileNav.addEventListener("change", handleViewportChange);
    } else if (typeof mobileNav.addListener === "function") {
      mobileNav.addListener(handleViewportChange);
    }
  };

  const bindReveal = () => {
    const elements = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
  };

  const bindVisitedMap = () => {
    const mapElement = document.querySelector("[data-visited-map]");
    const statusElement = document.querySelector("[data-map-status]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rawLocations = Array.isArray(shared.visitedLocations) ? shared.visitedLocations : [];
    const locations = rawLocations
      .map((location, index) => ({ ...location, index }))
      .filter((location) => Number.isFinite(location.lat) && Number.isFinite(location.lon));

    const setStatus = (message = "") => {
      if (!statusElement) {
        return;
      }

      statusElement.hidden = message.length === 0;
      statusElement.textContent = message;
    };

    if (!mapElement) {
      return;
    }

    if (locations.length === 0) {
      mapElement.classList.add("is-unavailable");
      setStatus("La mappa sara aggiornata con le prossime destinazioni.");
      return;
    }

    if (typeof window.L === "undefined") {
      mapElement.classList.add("is-unavailable");
      setStatus("La mappa non e disponibile in questo momento. L'elenco delle mete resta comunque consultabile.");
      return;
    }

    const itemElements = new Map(
      Array.from(document.querySelectorAll("[data-map-item]"))
        .map((element) => [Number(element.getAttribute("data-map-item")), element])
        .filter(([index]) => Number.isFinite(index))
    );

    const map = window.L.map(mapElement, {
      attributionControl: true,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      tap: true,
      worldCopyJump: true,
      zoomSnap: 0.25
    });

    map.attributionControl.setPrefix("");
    map.attributionControl.setPosition("bottomright");

    const tileLayer = window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      detectRetina: true,
      minZoom: 2,
      maxZoom: 7
    });

    let tileErrorShown = false;
    tileLayer.on("tileerror", () => {
      if (tileErrorShown) {
        return;
      }

      tileErrorShown = true;
      setStatus("La mappa non e disponibile in questo momento. L'elenco delle mete resta comunque consultabile.");
    });
    tileLayer.on("load", () => {
      if (!tileErrorShown) {
        setStatus("");
      }
    });
    tileLayer.addTo(map);

    const markerEntries = new Map();
    let activeIndex = -1;

    const markerStyle = (location, isActive = false) => ({
      radius: isActive ? (location.featured ? 8.5 : 7.25) : location.featured ? 7 : 6,
      weight: isActive ? 2.4 : 1.6,
      color: isActive ? "#14344f" : location.featured ? "#52789d" : "rgba(20, 52, 79, 0.38)",
      fillColor: isActive ? "#8faecc" : location.featured ? "#d5c29a" : "#f4efe4",
      fillOpacity: isActive ? 0.98 : 0.94
    });

    const syncActiveState = (index, options = {}) => {
      const { pan = false, open = false, scroll = false } = options;

      activeIndex = index;

      itemElements.forEach((element, itemIndex) => {
        element.classList.toggle("is-active", itemIndex === index);
      });

      markerEntries.forEach((entry, entryIndex) => {
        entry.marker.setStyle(markerStyle(entry.location, entryIndex === index));
      });

      const activeItem = itemElements.get(index);
      const activeEntry = markerEntries.get(index);

      if (scroll && activeItem) {
        activeItem.scrollIntoView({
          block: "nearest",
          behavior: reduceMotion ? "auto" : "smooth"
        });
      }

      if (!activeEntry) {
        return;
      }

      if (pan) {
        map.flyTo(activeEntry.marker.getLatLng(), Math.max(map.getZoom(), activeEntry.location.featured ? 4 : 3.25), {
          animate: !reduceMotion,
          duration: reduceMotion ? 0 : 0.65
        });
      }

      if (open) {
        activeEntry.marker.openPopup();
      }
    };

    locations.forEach((location) => {
      const marker = window.L.circleMarker([location.lat, location.lon], markerStyle(location)).addTo(map);
      marker.bindPopup(
        `
          <strong>${location.name}</strong>
          <span>${location.country}</span>
        `,
        {
          autoPanPadding: [24, 24],
          closeButton: false,
          className: "visited-map-popup"
        }
      );
      marker.on("click", () => {
        syncActiveState(location.index, { open: true, scroll: true });
      });
      markerEntries.set(location.index, { marker, location });
    });

    document.querySelectorAll("[data-map-trigger]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const index = Number(trigger.getAttribute("data-map-trigger"));
        if (!Number.isFinite(index)) {
          return;
        }
        syncActiveState(index, { pan: true, open: true });
      });
    });

    const bounds = window.L.latLngBounds(locations.map((location) => [location.lat, location.lon]));
    if (locations.length === 1) {
      map.setView(bounds.getCenter(), 4);
    } else {
      map.fitBounds(bounds, {
        padding: [36, 36],
        maxZoom: 3.35,
        animate: false
      });
    }

    map.whenReady(() => {
      window.requestAnimationFrame(() => {
        map.invalidateSize();
        mapElement.classList.add("is-ready");
      });
    });

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(() => {
        map.invalidateSize();
      });
      observer.observe(mapElement);
    }
  };

  const bindContactForm = () => {
    const form = document.querySelector("[data-contact-form]");
    const feedback = document.querySelector("[data-form-feedback]");

    if (!form || !feedback) {
      return;
    }

    const setFeedback = (message, state = "idle", withEmailLink = false) => {
      feedback.classList.remove("is-error", "is-success");

      if (state === "error") {
        feedback.classList.add("is-error");
      }

      if (state === "success") {
        feedback.classList.add("is-success");
      }

      feedback.textContent = message;

      if (!withEmailLink) {
        return;
      }

      feedback.append(" ");
      const emailLink = document.createElement("a");
      emailLink.href = global.contacts.emailHref;
      emailLink.textContent = global.contacts.email;
      feedback.append(emailLink);
      feedback.append(".");
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const type = String(formData.get("type") || "").trim();
      const period = String(formData.get("period") || "").trim();
      const guests = String(formData.get("guests") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !message) {
        setFeedback("Compila almeno nome, email e descrizione del viaggio.", "error");
        return;
      }

      if (!hasValidEmail) {
        setFeedback("Inserisci un indirizzo email valido prima di preparare la richiesta.", "error");
        return;
      }

      const emailSubject = `Richiesta consulenza viaggio - ${type || "Nuovo progetto"}`;
      const emailBody = [
        "Ciao Giorgio,",
        "",
        "ti contatto dal sito per una consulenza viaggio.",
        "",
        `Nome: ${name}`,
        `Email: ${email}`,
        `Tipologia viaggio: ${type || "Da definire"}`,
        `Periodo: ${period || "Da definire"}`,
        `Viaggiatori: ${guests || "Da definire"}`,
        "",
        "Dettagli:",
        message,
        "",
        "Grazie."
      ].join("\n");

      const mailtoLink = `mailto:${global.contacts.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      setFeedback(page.form.feedbackSuccess, "success", true);
      window.location.href = mailtoLink;
    });
  };

  const setYear = () => {
    const yearSlot = document.querySelector("[data-year]");

    if (yearSlot) {
      yearSlot.textContent = String(new Date().getFullYear());
    }
  };

  setSeo();

  const pageMarkup = `
    ${renderHeader()}
    <main id="main-content">
      ${renderPage()}
    </main>
    ${renderFooter()}
    ${renderQuickActions()}
  `;
  app.innerHTML = pageMarkup;

  bindHeader();
  bindReveal();
  bindVisitedMap();
  bindContactForm();
  setYear();
})();
