import {
  brand,
  nav,
  hero,
  productIndex,
  productCards,
  services,
  footer,
} from './content';
import { homeTranslations, type HomeLanguage } from './translations';

const arrowSvg = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function renderAll(language: HomeLanguage): void {
  const copy = homeTranslations[language];
  const languageNames: Record<HomeLanguage, string> = {
    fr: 'Français',
    en: 'English',
    pt: 'Português',
  };
  document.documentElement.lang = language;
  const languageSwitcher = document.getElementById('language-switcher') as HTMLDetailsElement | null;
  if (languageSwitcher) languageSwitcher.open = false;
  const languageTrigger = document.querySelector<HTMLElement>('.language-trigger');
  languageTrigger?.setAttribute(
    'aria-label',
    language === 'fr' ? `Langue : ${languageNames[language]}` : language === 'pt' ? `Idioma: ${languageNames[language]}` : `Language: ${languageNames[language]}`,
  );
  const currentLanguageLabel = document.getElementById('language-current');
  if (currentLanguageLabel) currentLanguageLabel.textContent = languageNames[language];
  document.querySelectorAll<HTMLButtonElement>('.language-switcher .lang-btn').forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle('lang-active', active);
    button.setAttribute('aria-pressed', String(active));
    if (button.dataset.lang && button.dataset.lang in languageNames) {
      button.setAttribute(
        'aria-label',
        languageNames[button.dataset.lang as HomeLanguage],
      );
    }
  });
  document.querySelector('.language-switcher')?.setAttribute(
    'aria-label',
    language === 'fr' ? 'Choisir la langue' : language === 'pt' ? 'Escolher idioma' : 'Choose language',
  );
  document.querySelector('.menu-btn')?.setAttribute(
    'aria-label',
    language === 'fr' ? 'Ouvrir le menu' : language === 'pt' ? 'Abrir o menu' : 'Open menu',
  );
  document.getElementById('menu-overlay')?.setAttribute(
    'aria-label',
    language === 'fr' ? 'Menu principal' : language === 'pt' ? 'Menu principal' : 'Main menu',
  );
  document.getElementById('menu-close')?.setAttribute(
    'aria-label',
    language === 'fr' ? 'Fermer le menu' : language === 'pt' ? 'Fechar o menu' : 'Close menu',
  );
  document.getElementById('hero')?.setAttribute('aria-label', copy.hero.ariaLabel);
  const introRole1 = document.getElementById('intro-role-1');
  const introRole2 = document.getElementById('intro-role-2');
  const introScrollLabel = document.getElementById('intro-scroll-label');
  if (introRole1) introRole1.textContent = copy.hero.roleLines[0];
  if (introRole2) introRole2.textContent = copy.hero.roleLines[1];
  if (introScrollLabel) introScrollLabel.textContent = copy.hero.scrollLabel;
  document.getElementById('hero-cutout')?.setAttribute('alt', copy.hero.imageAlt);
  document.getElementById('pindex')?.setAttribute('aria-label', copy.productIndex.ariaLabel);
  const projectCarousel = document.getElementById('pcards');
  projectCarousel?.setAttribute('aria-label', `${copy.products.ariaLabel}. ${copy.products.interactionHint}`);
  document.getElementById('projects-filterbar')?.setAttribute('aria-label', copy.products.filtersLabel);
  const projectsTitle = document.getElementById('projects-title');
  if (projectsTitle) projectsTitle.textContent = copy.products.title;
  document.getElementById('services')?.setAttribute('aria-label', copy.services.ariaLabel);
  document.getElementById('tools')?.setAttribute('aria-label', copy.tools.ariaLabel);
  document.title = 'Nuno Amaro — Portfolio';
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute(
    'content',
    language === 'fr'
      ? 'Portfolio de Nuno Amaro, étudiant en ingénierie des médias à la HEIG-VD, spécialisé en UX/UI et développement front-end.'
      : language === 'pt'
        ? 'Portfólio de Nuno Amaro, estudante de Engenharia de Media na HEIG-VD, com foco em UX/UI e desenvolvimento front-end.'
        : 'Portfolio of Nuno Amaro, Media Engineering student at HEIG-VD, focused on UX/UI and front-end development.',
  );

  renderMenu(copy.menu, language);
  renderHeroIntro(
    copy.hero.headlineLead,
    copy.hero.headlineTop,
    copy.hero.headlineBottom,
    copy.hero.intro,
  );
  renderProductIndex(copy.productIndex.columns);
  renderProductCards(copy.products.categories, copy.products.imageAlts, copy.products.filters);
  renderServices(copy.services.title, copy.services.rows);
  renderTools(copy.tools.title, copy.tools.items);
  renderFooter(copy.footer);
}

function renderMenu(labels: readonly string[], language: HomeLanguage): void {
  const navEl = document.getElementById('menu-nav');
  if (!navEl) return;
  navEl.setAttribute(
    'aria-label',
    language === 'fr' ? 'Navigation principale' : language === 'pt' ? 'Navegação principal' : 'Primary navigation',
  );
  navEl.innerHTML = nav.links
    .map((link, index) => `<a class="menu-link" href="${link.href}">${labels[index]}</a>`)
    .join('');
}

function renderHeroIntro(
  headlineLead: string,
  headlineTop: string,
  headlineBottom: string,
  introCopy: string,
): void {
  const intro = document.getElementById('hero-intro');
  if (intro) intro.textContent = introCopy;
  const titleLead = document.getElementById('hero-title-lead');
  const titleTop = document.getElementById('hero-title-top');
  const titleBottom = document.getElementById('hero-title-bottom');
  if (titleLead) titleLead.textContent = headlineLead;
  if (titleTop) titleTop.textContent = headlineTop;
  if (titleBottom) titleBottom.textContent = headlineBottom;
}

function renderProductIndex(columns: readonly (readonly [string, string])[]): void {
  const el = document.getElementById('pindex');
  if (!el) return;
  el.innerHTML = `
    <div class="pindex-grid">
      ${productIndex.columns.map((column, index) => ({ column, copy: columns[index] }))
        .map(
          ({ column, copy }) => `
        <a class="pindex-col" href="${column.href}">
          <span class="pindex-cat">${copy[0]}</span>
          <span class="pindex-name">${copy[1]}</span>
        </a>`,
        )
        .join('')}
    </div>`;
}

function renderProductCards(
  categories: readonly string[],
  imageAlts: readonly string[],
  filterLabels: (typeof homeTranslations)[HomeLanguage]['products']['filters'],
): void {
  const filterbar = document.getElementById('projects-filterbar');
  const el = document.querySelector<HTMLElement>('#pcards .projects-carousel-stage');
  if (!el || !filterbar) return;
  const validFilters = ['highlight', 'all', 'web', 'uxui', 'data', 'communication'] as const;
  let returnState: { project: string; filter: string } | null = null;
  try {
    const savedState = window.sessionStorage.getItem('na-project-return');
    if (savedState) {
      const parsedState: unknown = JSON.parse(savedState);
      if (
        typeof parsedState === 'object'
        && parsedState !== null
        && 'project' in parsedState
        && typeof parsedState.project === 'string'
        && 'filter' in parsedState
        && typeof parsedState.filter === 'string'
      ) {
        returnState = { project: parsedState.project, filter: parsedState.filter };
      }
      window.sessionStorage.removeItem('na-project-return');
    }
  } catch (error) {
    console.warn('Could not restore the selected project.', error);
  }
  const requestedProject = new URLSearchParams(window.location.search).get('project') ?? returnState?.project;
  const requestedProjectIndex = productCards.findIndex((project) => project.href === `/work/${requestedProject}.html`);
  const storedFilter = filterbar.querySelector<HTMLButtonElement>('[aria-pressed="true"]')?.dataset.projectFilter
    ?? returnState?.filter;
  const activeFilter = validFilters.find((filter) => filter === storedFilter)
    ?? (requestedProjectIndex >= 0 ? 'all' : 'highlight');
  const filterMatches = (project: (typeof productCards)[number], filter: (typeof validFilters)[number]): boolean =>
    filter === 'all' || (filter === 'highlight' ? project.featured : project.filters.includes(filter));

  filterbar.innerHTML = validFilters
    .map((filter) => `
      <button class="projects-filter" type="button" data-project-filter="${filter}" aria-pressed="${filter === activeFilter}">
        ${filterLabels[filter]}
      </button>`)
    .join('');

  const firstActiveProject = requestedProjectIndex >= 0 && filterMatches(productCards[requestedProjectIndex], activeFilter)
    ? requestedProjectIndex
    : productCards.findIndex((project) => filterMatches(project, activeFilter));
  el.innerHTML = productCards
    .map((c, index) => `
    <a class="pcard" data-card="${c.index}" data-project-index="${index}" data-featured="${c.featured}" data-filters="${c.filters.join(',')}" href="${c.href}" aria-label="${c.name} — ${categories[index]}" tabindex="${index === firstActiveProject ? '0' : '-1'}" aria-hidden="${index !== firstActiveProject}" aria-current="${index === firstActiveProject}" ${filterMatches(c, activeFilter) ? '' : 'hidden'}>
      <header class="pcard-head">
        <span class="pcard-index">(${c.index})</span>
        <span class="pcard-cat">${categories[index]}</span>
        <span class="pcard-name">${c.name}</span>
      </header>
      <figure class="pcard-media">
        <img src="${c.image}" alt="${imageAlts[index]}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} />
      </figure>
    </a>`)
    .join('');
}

function renderServices(title: string, rows: readonly (readonly [string, string])[]): void {
  const el = document.getElementById('services');
  if (!el) return;
  el.innerHTML = `
    <div class="split">
      <div class="split-left">
        <h2 class="section-title" data-pin-title><span class="st-line"><span class="st-inner">${title}</span></span></h2>
      </div>
      <div class="split-right">
        ${services.rows.map((row, index) => ({ row, copy: rows[index] }))
          .map(
            ({ row, copy }) => `
          <button class="svc-row" type="button" data-svc="${row.index}" aria-expanded="false" aria-controls="svc-desc-${row.index}">
            <span class="svc-index">(${row.index})</span>
            <span class="svc-main">
              <span class="svc-name">${copy[0]}</span>
              <span class="svc-desc" id="svc-desc-${row.index}" aria-hidden="true">
                <span class="svc-desc-inner">${copy[1]}</span>
              </span>
            </span>
            <span class="svc-arrow">${arrowSvg}</span>
          </button>`,
          )
          .join('')}
      </div>
    </div>`;
}

function renderTools(title: string, items: readonly string[]): void {
  const el = document.getElementById('tools');
  if (!el) return;
  el.innerHTML = `
    <h2 class="section-title"><span class="st-line"><span class="st-inner">${title}</span></span></h2>
    <div class="tools-marquee">
      <div class="tools-track">
        <ul class="tools-list">
          ${items.map((item) => `<li class="tool-item">${item}</li>`).join('')}
        </ul>
        <ul class="tools-list" aria-hidden="true">
          ${items.map((item) => `<li class="tool-item">${item}</li>`).join('')}
        </ul>
      </div>
    </div>`;
}

function renderFooter(copy: (typeof homeTranslations)[HomeLanguage]['footer']): void {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-cta">
      <h2 class="footer-big">
        ${copy.ctaLines.map((line) => `<span class="fb-line"><span class="fb-inner">${line}</span></span>`).join('')}
      </h2>
      <a class="badge badge--xl" href="/contact.html" aria-label="${copy.contactAriaLabel}">${arrowSvg}</a>
    </div>
    <div class="footer-grid">
      <div class="footer-col footer-col--contact">
        <span class="footer-label">${copy.contactLabel}</span>
        <a class="footer-email" href="mailto:${brand.email}">${brand.email}</a>
      </div>
      <div class="footer-col">
        <span class="footer-label">${copy.menuTitle}</span>
        ${nav.links.map((link, index) => `<a class="footer-link" href="${link.href}">${homeTranslations[document.documentElement.lang as HomeLanguage].menu[index]}</a>`).join('')}
      </div>
      <div class="footer-col">
        <span class="footer-label">${copy.socialTitle}</span>
        ${footer.socials.map((social) => `<a class="footer-link" href="${social.href}" target="_blank" rel="noopener noreferrer">${social.label}</a>`).join('')}
      </div>
    </div>
    <div class="footer-bar">
      <span>${copy.legal[0]}</span>
      <span class="footer-bar-mid">${copy.legal[1]}</span>
      <span class="footer-bar-right">
        <a class="footer-legal" href="/assets/pdf/CV_NunoAmaro.pdf" target="_blank" rel="noopener">${copy.legal[2]}</a>
        <a class="footer-pill" href="/contact.html">${copy.pillCta}</a>
      </span>
    </div>`;
}
