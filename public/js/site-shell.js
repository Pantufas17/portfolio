'use strict';

(() => {
  const copy = {
    fr: {
      language: 'Français',
      chooseLanguage: 'Choisir la langue',
      closeMenu: 'Fermer le menu',
      menu: ['ACCUEIL', 'PROJETS', 'À PROPOS', 'CONTACT'],
      contact: 'CONTACT',
      navigation: 'NAVIGATION',
      social: 'RÉSEAUX',
      copyright: '© 2026 Nuno Amaro. Tous droits réservés.',
      contactButton: 'ME CONTACTER',
    },
    en: {
      language: 'English',
      chooseLanguage: 'Choose language',
      closeMenu: 'Close menu',
      menu: ['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'],
      contact: 'CONTACT',
      navigation: 'NAVIGATION',
      social: 'SOCIAL',
      copyright: '© 2026 Nuno Amaro. All rights reserved.',
      contactButton: 'GET IN TOUCH',
    },
    pt: {
      language: 'Português',
      chooseLanguage: 'Escolher idioma',
      closeMenu: 'Fechar o menu',
      menu: ['INÍCIO', 'PROJETOS', 'SOBRE', 'CONTACTO'],
      contact: 'CONTACTO',
      navigation: 'NAVEGAÇÃO',
      social: 'REDES SOCIAIS',
      copyright: '© 2026 Nuno Amaro. Todos os direitos reservados.',
      contactButton: 'ENTRAR EM CONTACTO',
    },
  };

  const links = ['/index.html#top', '/index.html#pcards', '/about.html', '/contact.html'];
  let closeActiveMenu = null;
  const savedLanguage = (() => {
    try {
      const saved = window.localStorage.getItem('na-lang');
      if (saved === 'en' || saved === 'pt' || saved === 'fr') return saved;
    } catch (error) {
      console.warn('Could not read the saved portfolio language.', error);
    }
    return document.documentElement.lang === 'en' || document.documentElement.lang === 'pt'
      ? document.documentElement.lang
      : 'fr';
  })();

  function render(language) {
    const text = copy[language];
    document.documentElement.lang = language;
    document.querySelectorAll('.na-site-header, .na-menu-overlay, .na-site-footer').forEach((element) => element.remove());

    const header = document.createElement('header');
    header.className = 'na-site-header';
    header.innerHTML = `
      <a class="na-brand" href="/index.html#top" aria-label="Nuno Amaro — accueil">NUNO</a>
      <div class="na-header-right">
        <details class="na-language">
          <summary class="na-language-trigger" aria-label="${text.chooseLanguage}">
            <span>${text.language}</span>
            <svg class="na-language-chevron" viewBox="0 0 12 8" fill="none" aria-hidden="true">
              <path d="m1 1 5 5 5-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </summary>
          <div class="na-language-options" role="group" aria-label="${text.chooseLanguage}">
            ${Object.entries(copy).map(([code, value]) => `<button class="na-language-option" type="button" data-na-lang="${code}" aria-pressed="${code === language}">${value.language}</button>`).join('')}
          </div>
        </details>
        <button class="na-menu-button" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="na-menu-overlay">
          <span>menu</span>
          <svg class="na-menu-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>`;

    const overlay = document.createElement('div');
    overlay.className = 'na-menu-overlay';
    overlay.id = 'na-menu-overlay';
    overlay.hidden = true;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', text.menu[0]);
    overlay.innerHTML = `
      <nav class="na-menu-nav" aria-label="${text.navigation}">
        ${text.menu.map((label, index) => `<a class="na-menu-link" href="${links[index]}">${label}</a>`).join('')}
      </nav>
      <button class="na-menu-close" type="button" aria-label="${text.closeMenu}">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>`;

    const footer = document.createElement('footer');
    footer.className = 'na-site-footer';
    footer.setAttribute('aria-label', text.contact);
    footer.innerHTML = `
      <div class="na-footer-grid">
        <div class="na-footer-col">
          <span class="na-footer-label">${text.contact}</span>
          <a class="na-footer-email" href="mailto:nunoamarofaria@hotmail.com">nunoamarofaria@hotmail.com</a>
        </div>
        <div class="na-footer-col">
          <span class="na-footer-label">${text.navigation}</span>
          <a class="na-footer-link" href="/index.html#top">${text.menu[0]}</a>
          <a class="na-footer-link" href="/index.html#pcards">${text.menu[1]}</a>
          <a class="na-footer-link" href="/about.html">${text.menu[2]}</a>
          <a class="na-footer-link" href="/contact.html">${text.menu[3]}</a>
        </div>
        <div class="na-footer-col">
          <span class="na-footer-label">${text.social}</span>
          <a class="na-footer-link" href="https://www.linkedin.com/in/amaro-nuno/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a class="na-footer-link" href="https://github.com/Pantufas17" target="_blank" rel="noopener noreferrer">GITHUB</a>
        </div>
      </div>
      <div class="na-footer-bar">
        <span>${text.copyright}</span>
        <span class="na-footer-bar-right">
          <a class="na-footer-legal" href="/assets/pdf/CV_NunoAmaro.pdf" target="_blank" rel="noopener">CV</a>
          <a class="na-footer-pill" href="/contact.html">${text.contactButton}</a>
        </span>
      </div>`;

    document.querySelectorAll('.navbar, .mobile-nav, footer.footer, .cursor-dot, .cursor-ring').forEach((element) => element.remove());
    document.body.prepend(header);
    document.body.append(overlay, footer);
    header.querySelector('.na-menu-button').addEventListener('click', () => {
      overlay.hidden = false;
      header.querySelector('.na-menu-button').setAttribute('aria-expanded', 'true');
      overlay.querySelector('.na-menu-close').focus();
    });
    const closeMenu = () => {
      overlay.hidden = true;
      header.querySelector('.na-menu-button').setAttribute('aria-expanded', 'false');
      header.querySelector('.na-menu-button').focus();
    };
    closeActiveMenu = closeMenu;
    overlay.querySelector('.na-menu-close').addEventListener('click', closeMenu);
    overlay.querySelectorAll('.na-menu-link').forEach((link) => link.addEventListener('click', () => {
      overlay.hidden = true;
      header.querySelector('.na-menu-button').setAttribute('aria-expanded', 'false');
    }));
    header.querySelectorAll('[data-na-lang]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextLanguage = button.dataset.naLang;
        if (nextLanguage !== 'fr' && nextLanguage !== 'en' && nextLanguage !== 'pt') return;
        try {
          window.localStorage.setItem('na-lang', nextLanguage);
        } catch (error) {
          console.warn('Could not save the selected portfolio language.', error);
        }
        window.I18n?.apply(nextLanguage);
        render(nextLanguage);
      });
    });
  }

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = '/css/site-shell.css';
  document.head.append(stylesheet);
  render(savedLanguage);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeActiveMenu?.();
  });
})();
