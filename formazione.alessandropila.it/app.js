import { siteConfig } from "./config.js";

/* ==========================
   Helpers
   ========================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function scrollToAnchor(anchor) {
  const el = document.querySelector(anchor);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - (siteConfig.ui.scrollOffset ?? 84);
  window.scrollTo({ top: y, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

function setMeta(nameOrProp, value, isProp = false) {
  const sel = isProp ? `meta[property="${nameOrProp}"]` : `meta[name="${nameOrProp}"]`;
  const el = $(sel);
  if (el) el.setAttribute("content", value || "");
}

function setCanonical(url) {
  const el = $('link[rel="canonical"]');
  if (el) el.setAttribute("href", url || "");
}

/* ==========================
   Theme (system only)
   ========================== */
function getSystemTheme() {
  const isDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  return isDark ? "dark" : "light";
}

function applySystemTheme() {
  const html = document.documentElement;
  html.removeAttribute("data-theme");

  if (siteConfig?.ui?.accentColor) {
    html.style.setProperty("--accent", siteConfig.ui.accentColor);
  }

  const theme = getSystemTheme();
  updateThemeStatus(theme);
  updateBrandLogos(theme);
}

function updateThemeStatus(effectiveTheme) {
  const status = $("#themeStatus");
  if (!status) return;

  const isDark = effectiveTheme === "dark";
  const icon = isDark
    ? `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`
    : `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

  status.innerHTML = `${icon}<span>Tema di sistema: <strong>${isDark ? "Scuro" : "Chiaro"}</strong></span>`;
}

function bindSystemThemeListener() {
  const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
  if (!mq) return;
  mq.addEventListener?.("change", () => {
    const theme = getSystemTheme();
    updateThemeStatus(theme);
    updateBrandLogos(theme);
  });
}

function updateBrandLogos(effectiveTheme) {
  const logos = siteConfig.branding?.logos || {};
  const isDark = effectiveTheme === "dark";
  const srcLight = logos.light || "";
  const srcDark = logos.dark || srcLight;
  const alt = logos.alt || siteConfig.branding.brand || "Logo";

  const headerImg = $('[data-brand-logo="header"]');
  const footerImg = $('[data-brand-logo="footer"]');

  if (headerImg) {
    headerImg.src = isDark ? srcDark : srcLight;
    headerImg.alt = alt;
  }
  if (footerImg) {
    footerImg.src = isDark ? srcDark : srcLight;
    footerImg.alt = alt;
  }
}

/* ==========================
   Toast
   ========================== */
function toast({ title, body, timeout = 3200 }) {
  const stack = $("#toastStack");
  if (!stack) return;

  const el = document.createElement("div");
  el.className = "toast";
  el.setAttribute("role", "status");

  el.innerHTML = `
    <div>
      <div class="t-title">${escapeHtml(title || "")}</div>
      ${body ? `<div class="t-body">${escapeHtml(body)}</div>` : ""}
    </div>
  `;

  stack.appendChild(el);

  window.setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
    el.style.transition = "opacity .18s ease, transform .18s ease";
    window.setTimeout(() => el.remove(), 220);
  }, clamp(timeout, 1500, 7000));
}

/* ==========================
   Render: SEO + JSON-LD
   ========================== */
function renderHead() {
  const m = siteConfig.metadata;
  document.documentElement.lang = m.lang || "it";

  document.title = m.title || "";
  setMeta("description", m.description || "");
  setCanonical(m.canonicalUrl || "");

  setMeta("og:title", m.title || "", true);
  setMeta("og:description", m.description || "", true);
  setMeta("og:url", m.canonicalUrl || "", true);
  setMeta("og:image", m.ogImageDataUri || "", true);

  setMeta("twitter:title", m.title || "");
  setMeta("twitter:description", m.description || "");
  setMeta("twitter:image", m.ogImageDataUri || "");

  // JSON-LD (minimal)
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", ...siteConfig.structuredData.website },
      { "@type": "Person", ...siteConfig.structuredData.person },
    ],
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(ld);
  document.head.appendChild(script);
}

/* ==========================
   Render: Header / Nav
   ========================== */
function renderHeader() {
  const logos = siteConfig.branding.logos || {};
  const logo = logos.light
    ? `
      <div class="brand-logo">
        <img data-brand-logo="header" src="${escapeHtml(logos.light)}" alt="${escapeHtml(logos.alt || siteConfig.branding.brand)}" loading="lazy">
      </div>
    `
    : "";

  $("#brand").innerHTML = `
    ${logo}
    <div class="brand-text">
      <div class="title">${escapeHtml(siteConfig.branding.brand)}</div>
      <div class="subtitle">${escapeHtml(siteConfig.branding.subtitle)}</div>
    </div>
  `;

  // Nav items from config; hide items if section flag disabled
  const navList = $("#navList");
  navList.innerHTML = "";

  const sectionEnabled = (anchor) => {
    const id = String(anchor || "").replace("#", "");
    const map = {
      programmi: siteConfig.flags.showPrograms,
      target: siteConfig.flags.showTarget,
      metodo: siteConfig.flags.showMethod,
      faq: siteConfig.flags.showFaq,
      "chi-sono": siteConfig.flags.showAbout,
      contatti: siteConfig.flags.showContacts,
    };
    return map[id] !== false;
  };

  siteConfig.navigation
    .filter((i) => sectionEnabled(i.anchor))
    .forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${item.anchor}" data-nav-link>${escapeHtml(item.label)}</a>`;
      navList.appendChild(li);
    });

  // Header CTA
  const headerCta = $("#headerCta");
  headerCta.innerHTML = "";
  if (siteConfig.flags.enableHeaderCta) {
    const btn = document.createElement("a");
    btn.className = "btn btn-primary";
    btn.href = siteConfig.hero.ctaPrimary.anchor;
    btn.textContent = siteConfig.hero.ctaPrimary.label;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToAnchor(siteConfig.hero.ctaPrimary.anchor);
      closeMobileNav();
    });
    headerCta.appendChild(btn);
  }

  // Mobile nav toggle
  const toggle = $(".nav-toggle");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    navList.dataset.open = String(!expanded);
  });

  // Close nav on click
  $$("[data-nav-link]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const href = a.getAttribute("href");
      const id = href?.replace("#", "");
      if (id) updateActiveNav(id);
      scrollToAnchor(href);
      closeMobileNav();
    });
  });

  function closeMobileNav() {
    const toggle = $(".nav-toggle");
    const navList = $("#navList");
    toggle?.setAttribute("aria-expanded", "false");
    if (navList) navList.dataset.open = "false";
  }
}

/* ==========================
   Render: Hero
   ========================== */
function renderHero() {
  const h = siteConfig.hero;

  const pills = h.badges
    .map((b) => `<span class="pill">${escapeHtml(b)}</span>`)
    .join("");

  const ctas = [];
  if (siteConfig.flags.enableHeroCta) {
    ctas.push(`
      <a class="btn btn-primary" href="${h.ctaPrimary.anchor}" data-scroll>
        ${escapeHtml(h.ctaPrimary.label)}
      </a>
    `);
    ctas.push(`
      <a class="btn" href="${h.ctaSecondary.anchor}" data-scroll>
        ${escapeHtml(h.ctaSecondary.label)}
      </a>
    `);
  }

  $("#heroCopy").innerHTML = `
    <h1>${escapeHtml(h.title)}</h1>
    <p class="lead">${escapeHtml(h.subtitle)}</p>
    <div class="pills" aria-label="Tag principali">${pills}</div>
    <div class="cta-row">${ctas.join("")}</div>
    <p class="fineprint">${escapeHtml(h.fineprint)}</p>
  `;

  $("#heroSide").innerHTML = `
    <div class="panel" role="note" aria-label="Informazioni rapide">
      <h3>${escapeHtml(h.sidePanel.title)}</h3>
      <ul>
        ${h.sidePanel.bullets.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}
      </ul>
      <p class="muted" style="margin: var(--space-4) 0 0;">
        ${escapeHtml(h.sidePanel.micro)}
      </p>
    </div>
  `;

  $$("[data-scroll]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToAnchor(a.getAttribute("href"));
    });
  });
}

/* ==========================
   Render: Programs
   ========================== */
function renderPrograms() {
  const s = siteConfig.sections.programs;

  // Section visibility
  toggleSection("programmi", siteConfig.flags.showPrograms);

  $("#programsHead").innerHTML = `
    <div>
      <h2>${escapeHtml(s.title)}</h2>
      <p class="muted">${escapeHtml(s.description)}</p>
    </div>
  `;

  const grid = $("#programsGrid");
  grid.innerHTML = "";

  const enabledMap = siteConfig.flags.enablePrograms || {};
  const items = s.items.filter((it) => enabledMap[it.enabledFlag] !== false);

  items.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${escapeHtml(p.title)}</h3>
      <div class="meta">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 8v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span>${escapeHtml(p.duration)}</span>
      </div>
      <ul>
        ${p.goals.map((g) => `<li>${escapeHtml(g)}</li>`).join("")}
      </ul>
      <div class="tags" aria-label="Ideale per">
        ${p.idealFor.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>
    `;
    grid.appendChild(card);
  });

  $("#programsNote").textContent = s.note;
}

/* ==========================
   Render: Target
   ========================== */
function renderTarget() {
  const s = siteConfig.sections.target;
  toggleSection("target", siteConfig.flags.showTarget);

  $("#targetHead").innerHTML = `
    <div>
      <h2>${escapeHtml(s.title)}</h2>
      <p class="muted">${escapeHtml(s.description)}</p>
    </div>
  `;

  const cols = $("#targetCols");
  cols.innerHTML = "";
  s.columns.forEach((c) => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <h3>${escapeHtml(c.title)}</h3>
      <p class="muted" style="margin:0;">${escapeHtml(c.text)}</p>
    `;
    cols.appendChild(el);
  });

  $("#notThisBox").innerHTML = `
    <strong>${escapeHtml(s.notThis.title)}</strong>
    <div class="muted">${escapeHtml(s.notThis.text)}</div>
  `;
}

/* ==========================
   Render: Method
   ========================== */
function renderMethod() {
  const s = siteConfig.sections.method;
  toggleSection("metodo", siteConfig.flags.showMethod);

  $("#methodHead").innerHTML = `
    <div>
      <h2>${escapeHtml(s.title)}</h2>
      <p class="muted">${escapeHtml(s.description)}</p>
    </div>
  `;

  const steps = $("#methodSteps");
  steps.innerHTML = "";
  s.steps.forEach((st, idx) => {
    const li = document.createElement("li");
    li.className = "step";
    li.innerHTML = `
      <div class="num" aria-hidden="true">${idx + 1}</div>
      <div>
        <h3>${escapeHtml(st.title)}</h3>
        <p>${escapeHtml(st.text)}</p>
      </div>
    `;
    steps.appendChild(li);
  });

  const mats = $("#materialsBox");
  mats.innerHTML = `
    <h3>${escapeHtml(s.materials.title)}</h3>
    <div class="items" aria-label="Materiali inclusi">
      ${s.materials.items.map((x) => `<span class="pill">${escapeHtml(x)}</span>`).join("")}
    </div>
  `;
}

/* ==========================
   Render: FAQ Accordion
   ========================== */
function renderFaq() {
  const s = siteConfig.sections.faq;
  toggleSection("faq", siteConfig.flags.showFaq);

  $("#faqHead").innerHTML = `
    <div>
      <h2>${escapeHtml(s.title)}</h2>
      <p class="muted">${escapeHtml(s.description)}</p>
    </div>
  `;

  const acc = $("#faqAccordion");
  acc.innerHTML = "";

  s.items.forEach((item, i) => {
    const id = `faq-${i + 1}`;
    const wrap = document.createElement("div");
    wrap.className = "ac-item";
    wrap.dataset.open = "false";

    wrap.innerHTML = `
      <button class="ac-btn" type="button" aria-expanded="false" aria-controls="${id}">
        <span class="q">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 17h.01M10.2 9.2A2.6 2.6 0 0 1 12 8.5c1.4 0 2.6.9 2.6 2.2 0 1.6-1.7 1.9-2.2 3.1-.1.3-.1.6-.1.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" fill="none" stroke="currentColor" stroke-width="2"/>
          </svg>
          ${escapeHtml(item.q)}
        </span>
        <svg class="icon chev" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="ac-panel" id="${id}" role="region" aria-label="${escapeHtml(item.q)}" hidden>
        ${escapeHtml(item.a)}
      </div>
    `;

    const btn = $(".ac-btn", wrap);
    const panel = $(`#${id}`, wrap);

    btn.addEventListener("click", () => toggle(wrap, btn, panel));
    btn.addEventListener("keydown", (e) => {
      // Keyboard-friendly: Enter/Space already handled by button click.
      // Add ArrowUp/Down to move between questions.
      const buttons = $$(".ac-btn", acc);
      const idx = buttons.indexOf(e.currentTarget);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        buttons[(idx + 1) % buttons.length].focus();
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        buttons[(idx - 1 + buttons.length) % buttons.length].focus();
      }
      if (e.key === "Home") {
        e.preventDefault();
        buttons[0].focus();
      }
      if (e.key === "End") {
        e.preventDefault();
        buttons[buttons.length - 1].focus();
      }
    });

    acc.appendChild(wrap);
  });

  function toggle(wrap, btn, panel) {
    const open = wrap.dataset.open === "true";
    wrap.dataset.open = String(!open);
    btn.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  }
}

/* ==========================
   Render: About
   ========================== */
function renderAbout() {
  const s = siteConfig.sections.about;
  toggleSection("chi-sono", siteConfig.flags.showAbout);

  $("#aboutHead").innerHTML = `
    <div>
      <h2>${escapeHtml(s.title)}</h2>
      <p class="muted">${escapeHtml(s.description)}</p>
    </div>
  `;

  $("#aboutCard").innerHTML = `
    <p>${escapeHtml(s.description)}</p>
    <ul>
      ${s.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
    </ul>
  `;
}

/* ==========================
   Render: Contacts + Form
   ========================== */
function renderContacts() {
  const s = siteConfig.sections.contacts;
  toggleSection("contatti", siteConfig.flags.showContacts);

  $("#contactHead").innerHTML = `
    <div>
      <h2>${escapeHtml(s.title)}</h2>
      <p class="muted">${escapeHtml(s.description)}</p>
    </div>
  `;

  $("#contactCard").innerHTML = `
    <h3>Scrivimi</h3>
    <p class="muted" style="margin-top:0;">
      Per disponibilità, contesto e pubblico: rispondo con indicazioni chiare e pratiche.
    </p>
    <div class="email" aria-label="Email">
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>
      <span id="contactEmail">${escapeHtml(s.email)}</span>
    </div>
    <p class="muted note">
      Nota: il form apre il tuo client email con oggetto e messaggio precompilati. Nessun dato viene salvato qui.
    </p>
    <div class="helper">
      <div class="helper-title">${escapeHtml(s.helperTitle || "Come funziona")}</div>
      <ul class="helper-list">
        ${(s.helperItems || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      ${s.helperNote ? `<p class="muted mini">${escapeHtml(s.helperNote)}</p>` : ""}
    </div>
    ${
      (s.contactHighlights || []).length
        ? `<div class="pills soft">${s.contactHighlights.map((h) => `<span class="pill">${escapeHtml(h)}</span>`).join("")}</div>`
        : ""
    }
  `;

  // Labels
  $("#labelName").textContent = s.labels.name;
  $("#labelEmail").textContent = s.labels.email;
  $("#labelOrg").textContent = s.labels.org;
  $("#labelMsg").textContent = s.labels.message;

  $("#fakeSubmit").textContent = s.actions.submit;
  $("#copyEmailBtn").style.display = "none";
  $("#copyMsgBtn").style.display = "none";
  $("#privacyNote").textContent = s.privacyNote;

  // Form validation + mailto
  const form = $("#contactForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const ok = validateForm(form);
    if (!ok) {
      toast({ title: "Controlla i campi", body: "Ci sono alcuni errori da correggere." });
      return;
    }

    const { subject, body } = buildEmailDataFromForm();
    const mailto = `mailto:${encodeURIComponent(s.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast({ title: s.fakeSubmitToast.title, body: s.fakeSubmitToast.body });
  });
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Fallback for older browsers
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}

function buildEmailDataFromForm() {
  const s = siteConfig.sections.contacts;
  const form = $("#contactForm");
  const data = new FormData(form);

  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const org = String(data.get("org") || "").trim();
  const message = String(data.get("message") || "").trim();

  const subject = `Richiesta disponibilità - ${org || name || "Formazione sicurezza digitale"}`;
  const lines = [
    "Richiesta disponibilità - Formazione sicurezza digitale",
    "",
    `Nome: ${name || "-"}`,
    `Email: ${email || "-"}`,
    `Organizzazione: ${org || "-"}`,
    "",
    "Messaggio:",
    message || "-",
    "",
    `Destinatario: ${s.email}`,
  ];

  return { subject, body: lines.join("\n") };
}

function validateForm(form) {
  const fields = [
    { name: "name", required: true, type: "text" },
    { name: "email", required: true, type: "email" },
    { name: "org", required: false, type: "text" },
    { name: "message", required: true, type: "text" },
  ];

  let ok = true;

  fields.forEach((f) => {
    const input = form.elements[f.name];
    const wrapper = input.closest(".field");
    const hint = form.querySelector(`[data-error-for="${f.name}"]`);
    const value = String(input.value || "").trim();

    let err = "";
    if (f.required && !value) err = "Questo campo è obbligatorio.";
    if (!err && f.type === "email" && value) {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!valid) err = "Inserisci un'email valida.";
    }

    wrapper.dataset.invalid = String(Boolean(err));
    if (hint) hint.textContent = err;

    if (err) ok = false;
  });

  // Focus first invalid
  if (!ok) {
    const first = form.querySelector('.field[data-invalid="true"] input, .field[data-invalid="true"] textarea');
    first?.focus();
  }

  return ok;
}

/* ==========================
   Footer
   ========================== */
function renderFooter() {
  const logos = siteConfig.branding.logos || {};
  const logo = logos.light
    ? `
      <div class="brand-logo small">
        <img data-brand-logo="footer" src="${escapeHtml(logos.light)}" alt="${escapeHtml(logos.alt || siteConfig.branding.brand)}" loading="lazy">
      </div>
    `
    : "";

  $("#footerBrand").innerHTML = `
    <div class="brand stack">
      ${logo}
      <div>
        <div class="title">${escapeHtml(siteConfig.branding.brand)}</div>
        <div class="muted">${escapeHtml(siteConfig.branding.subtitle)}</div>
      </div>
    </div>
  `;

  // Quick links: mirror nav (filtered)
  const ul = $("#footerLinks");
  ul.innerHTML = "";
  siteConfig.navigation.forEach((item) => {
    const id = item.anchor.replace("#", "");
    const enabled = ({
      programmi: siteConfig.flags.showPrograms,
      target: siteConfig.flags.showTarget,
      metodo: siteConfig.flags.showMethod,
      faq: siteConfig.flags.showFaq,
      contatti: siteConfig.flags.showContacts,
    })[id];
    if (enabled === false) return;

    const li = document.createElement("li");
    li.innerHTML = `<a class="link" href="${item.anchor}" data-scroll>${escapeHtml(item.label)}</a>`;
    ul.appendChild(li);
  });

  $$('footer [data-scroll]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToAnchor(a.getAttribute("href"));
    });
  });

  const year = new Date().getFullYear();
  $("#copyright").textContent = `© ${year} Alessandro Pila`;

  const who = $("#whoamiLink");
  who.href = siteConfig.footer.whoamiUrl;
  who.textContent = siteConfig.footer.whoamiLabel;
}

/* ==========================
   Active section highlight
   ========================== */
function updateActiveNav(id) {
  const links = $$("[data-nav-link]");
  links.forEach((a) => {
    const linkId = a.getAttribute("href")?.replace("#", "");
    a.setAttribute("aria-current", linkId === id ? "true" : "false");
  });
}

function bindActiveSectionHighlight() {
  const links = $$("[data-nav-link]");
  const sections = $$("[data-section]").filter((s) => s.id !== "hero");
  const offset = (siteConfig.ui.scrollOffset || 84) + 2;
  let ticking = false;

  // Keep nav state in sync with scroll position
  function refreshActive() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const targetY = window.scrollY + offset;
      let closest = null;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const dist = Math.abs(top - targetY);
        if (!closest || dist < closest.dist) {
          closest = { id: section.id, dist };
        }
      });

      if (closest?.id) updateActiveNav(closest.id);
      ticking = false;
    });
  }

  refreshActive();
  window.addEventListener("scroll", refreshActive, { passive: true });
  window.addEventListener("resize", refreshActive);
}

/* ==========================
   Utilities
   ========================== */
function toggleSection(id, enabled) {
  const el = document.getElementById(id);
  if (!el) return;
  if (enabled === false) el.style.display = "none";
}

/* ==========================
   Boot
   ========================== */
function boot() {
  renderHead();

  renderHeader();

  renderHero();
  renderPrograms();
  renderTarget();
  renderMethod();
  renderFaq();
  renderAbout();
  renderContacts();
  renderFooter();

  // Theme (system driven)
  applySystemTheme();
  bindSystemThemeListener();

  // Active highlight
  bindActiveSectionHighlight();
}

boot();
