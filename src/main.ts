import '@fontsource-variable/inter';
import './styles.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { renderAll } from './render';
import { getSavedHomeLanguage, type HomeLanguage } from './translations';

gsap.registerPlugin(ScrollTrigger);
let currentLanguage = getSavedHomeLanguage();
renderAll(currentLanguage);
if (new URLSearchParams(window.location.search).has('project')) {
  window.history.replaceState(window.history.state, '', `${window.location.pathname}${window.location.hash}`);
}

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE_OUT = 'power3.out';
const EASE_EXPO = 'expo.out';
const HERO_SCROLL = {
  titleExitXPercent: 100,
  circleZoom: 1.55,
  zoomEase: 'power2.inOut',
} as const;
let refreshProjectCarousel: (() => void) | null = null;

function setupProjectCarousel(): void {
  const viewport = document.querySelector<HTMLElement>('.projects-carousel');
  const filterbar = document.querySelector<HTMLElement>('.projects-filterbar');
  if (!viewport || !filterbar) return;

  let activeProjectIndex = viewport.querySelector<HTMLElement>('.pcard[aria-current="true"]')?.dataset.projectIndex ?? '0';
  let lastWheelAt = 0;
  let pointerStart: { x: number; y: number } | null = null;
  let suppressClickUntil = 0;

  const getCards = (): HTMLElement[] => Array.from(viewport.querySelectorAll<HTMLElement>('.pcard'));
  const getVisibleCards = (): HTMLElement[] => getCards().filter((card) => !card.hidden);

  const update = (): void => {
    const cards = getCards();
    const visibleCards = cards.filter((card) => !card.hidden);
    if (!visibleCards.length) return;
    let activeIndex = visibleCards.findIndex((card) => card.dataset.projectIndex === activeProjectIndex);
    if (activeIndex < 0) {
      activeIndex = 0;
      activeProjectIndex = visibleCards[0].dataset.projectIndex ?? '0';
    }

    const peek = Math.min(220, Math.max(64, viewport.clientWidth * 0.12));
    const offset = (viewport.clientWidth + visibleCards[activeIndex].offsetWidth) / 2 - peek;

    cards.forEach((card, index) => {
      if (card.hidden) {
        card.dataset.position = 'hidden';
        card.tabIndex = -1;
        card.setAttribute('aria-hidden', 'true');
        card.setAttribute('aria-current', 'false');
        return;
      }
      const visibleIndex = visibleCards.indexOf(card);
      const relative = (visibleIndex - activeIndex + visibleCards.length + Math.floor(visibleCards.length / 2)) % visibleCards.length
        - Math.floor(visibleCards.length / 2);
      const isActive = relative === 0;
      card.style.setProperty('--carousel-offset', `${relative * offset}px`);
      card.dataset.position = isActive ? 'active' : relative < 0 ? 'previous' : 'next';
      card.tabIndex = isActive ? 0 : -1;
      card.setAttribute('aria-hidden', String(!isActive));
      card.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  };
  refreshProjectCarousel = update;

  const move = (direction: -1 | 1): void => {
    const cards = getVisibleCards();
    if (!cards.length) return;
    const currentIndex = cards.findIndex((card) => card.dataset.projectIndex === activeProjectIndex);
    const nextIndex = (Math.max(0, currentIndex) + direction + cards.length) % cards.length;
    activeProjectIndex = cards[nextIndex].dataset.projectIndex ?? '0';
    update();
  };

  filterbar.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest<HTMLButtonElement>('[data-project-filter]');
    if (!button || !filterbar.contains(button)) return;

    const filter = button.dataset.projectFilter;
    if (!filter) return;
    filterbar.querySelectorAll<HTMLButtonElement>('[data-project-filter]').forEach((filterButton) => {
      filterButton.setAttribute('aria-pressed', String(filterButton === button));
    });
    getCards().forEach((card) => {
      const matches = filter === 'all'
        || (filter === 'highlight' && card.dataset.featured === 'true')
        || (filter !== 'highlight' && card.dataset.filters?.split(',').includes(filter));
      card.hidden = !matches;
    });

    const visibleCards = getVisibleCards();
    if (!visibleCards.some((card) => card.dataset.projectIndex === activeProjectIndex)) {
      activeProjectIndex = visibleCards[0]?.dataset.projectIndex ?? '0';
    }
    update();
  });

  viewport.addEventListener('wheel', (event) => {
    const horizontalDelta = event.shiftKey ? event.deltaY : event.deltaX;
    if (Math.abs(horizontalDelta) < 18 || Math.abs(horizontalDelta) <= Math.abs(event.shiftKey ? 0 : event.deltaY)) return;
    event.preventDefault();
    const now = performance.now();
    if (now - lastWheelAt < 520) return;
    lastWheelAt = now;
    move(horizontalDelta > 0 ? 1 : -1);
  }, { passive: false });

  viewport.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') pointerStart = { x: event.clientX, y: event.clientY };
  });
  viewport.addEventListener('pointerup', (event) => {
    if (!pointerStart || event.pointerType !== 'touch') return;
    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    suppressClickUntil = performance.now() + 400;
    move(deltaX < 0 ? 1 : -1);
  });
  viewport.addEventListener('pointercancel', () => { pointerStart = null; });

  viewport.addEventListener('click', (event) => {
    if (performance.now() < suppressClickUntil) {
      event.preventDefault();
      return;
    }
    const clickedCard = (event.target as HTMLElement).closest<HTMLAnchorElement>('.pcard');
    if (!clickedCard) return;
    if (clickedCard.dataset.position !== 'active') {
      event.preventDefault();
      return;
    }

    const project = new URL(clickedCard.href).pathname.split('/').pop()?.replace(/\.html$/, '');
    const filter = filterbar.querySelector<HTMLButtonElement>('[data-project-filter][aria-pressed="true"]')?.dataset.projectFilter;
    if (!project || !filter) return;
    try {
      window.sessionStorage.setItem('na-project-return', JSON.stringify({ project, filter }));
    } catch (error) {
      console.warn('Could not save the selected project for the return trip.', error);
    }
  });
  viewport.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  });
  window.addEventListener('resize', update, { passive: true });
  update();
}

setupProjectCarousel();

/* ---------- Lenis smooth scroll ---------- */
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis?.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
}

function setupLanguageSwitcher(): void {
  const switcher = document.getElementById('language-switcher') as HTMLDetailsElement | null;
  if (!switcher) return;

  switcher.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest<HTMLButtonElement>('button[data-lang]');
    if (!button || !switcher.contains(button)) return;

    const language = button.dataset.lang;
    if (language !== 'fr' && language !== 'en' && language !== 'pt') return;
    event.preventDefault();
    event.stopPropagation();
    switcher.open = false;

    if (language === currentLanguage) return;

    const scrollY = window.scrollY;
    currentLanguage = language as HomeLanguage;
    try {
      window.localStorage.setItem('na-lang', currentLanguage);
    } catch {
      // The current page still changes language when storage is unavailable.
    }

    ScrollTrigger.clearMatchMedia();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    renderAll(currentLanguage);
    setupServiceRows();
    refreshProjectCarousel?.();
    setupMotion(false);
    window.scrollTo(0, scrollY);
    ScrollTrigger.refresh();
  });

  document.addEventListener('pointerdown', (event) => {
    if (switcher.open && !switcher.contains(event.target as Node)) switcher.open = false;
  });
  switcher.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && switcher.open) {
      switcher.open = false;
      switcher.querySelector('summary')?.focus();
    }
  });
}

/* ---------- menu overlay ---------- */
function setupMenu(): void {
  const btn = document.getElementById('menu-btn');
  const overlay = document.getElementById('menu-overlay');
  const close = document.getElementById('menu-close');
  if (!btn || !overlay || !close) return;
  const open = (): void => {
    overlay.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    if (!reduced) {
      gsap.fromTo(
        '#menu-nav .menu-link',
        { yPercent: 70, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.07, ease: EASE_EXPO },
      );
    }
    close.focus();
  };
  const dismiss = (): void => {
    overlay.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  };
  btn.addEventListener('click', open);
  close.addEventListener('click', dismiss);
  overlay.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('.menu-link')) dismiss();
  });
  overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dismiss();
  });
}

/* ---------- service rows ---------- */
function setupServiceRows(): void {
  const rows = Array.from(document.querySelectorAll<HTMLElement>('.svc-row'));
  const fine = window.matchMedia('(pointer: fine)').matches;
  let openTimer: ReturnType<typeof setTimeout> | null = null;
  let activeRow: HTMLElement | null = null;

  const openRow = (row: HTMLElement): void => {
    const description = row.querySelector<HTMLElement>('.svc-desc');
    if (!description || row.dataset.open === 'true') return;
    // close any other open row first
    if (activeRow && activeRow !== row) closeRow(activeRow);
    row.dataset.open = 'true';
    row.setAttribute('aria-expanded', 'true');
    description.setAttribute('aria-hidden', 'false');
    activeRow = row;
  };
  const closeRow = (row: HTMLElement): void => {
    const description = row.querySelector<HTMLElement>('.svc-desc');
    if (!description || row.dataset.open !== 'true') return;
    row.dataset.open = 'false';
    row.setAttribute('aria-expanded', 'false');
    description.setAttribute('aria-hidden', 'true');
    if (activeRow === row) activeRow = null;
  };

  if (fine) {
    // Use mouseover/mouseout with intent delay to avoid chaos when scrolling
    const container = rows[0]?.parentElement;
    if (!container) return;

    container.addEventListener('mouseover', (e) => {
      const row = (e.target as HTMLElement).closest<HTMLElement>('.svc-row');
      if (!row) return;
      if (openTimer) clearTimeout(openTimer);
      openTimer = setTimeout(() => openRow(row), 120);
    });

    container.addEventListener('mouseout', (e) => {
      const row = (e.target as HTMLElement).closest<HTMLElement>('.svc-row');
      if (!row) return;
      // check if we moved to another element inside the same row
      const related = (e.relatedTarget as HTMLElement)?.closest?.('.svc-row');
      if (related === row) return;
      if (openTimer) { clearTimeout(openTimer); openTimer = null; }
      closeRow(row);
    });

    container.addEventListener('mouseleave', () => {
      if (openTimer) { clearTimeout(openTimer); openTimer = null; }
      if (activeRow) closeRow(activeRow);
    });
  }

  rows.forEach((row) => {
    row.addEventListener('focus', () => {
      if (fine) openRow(row);
    });
    row.addEventListener('blur', () => closeRow(row));
    row.addEventListener('click', (event) => {
      if (fine && event.detail > 0) return;
      if (fine) {
        openRow(row);
      } else if (row.dataset.open === 'true') {
        closeRow(row);
      } else {
        openRow(row);
      }
    });
  });
}

/* ---------- generic entrance reveals (once, lines-mask style) ---------- */
function revealLines(selector: string, triggerSel?: string, start = 'top 86%'): void {
  const els = gsap.utils.toArray<HTMLElement>(selector);
  if (!els.length) return;
  gsap.fromTo(els,
    { yPercent: 110 },
    {
      yPercent: 0,
      duration: 1,
      stagger: 0.09,
      ease: EASE_EXPO,
      immediateRender: false,
      scrollTrigger: { trigger: triggerSel ?? els[0], start, once: true },
    },
  );
}

function revealFadeRise(selector: string, triggerSel: string, start = 'top 84%', stagger = 0.08): void {
  const els = gsap.utils.toArray<HTMLElement>(selector);
  if (!els.length) return;
  gsap.fromTo(els,
    { y: 44, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger,
      ease: EASE_OUT,
      immediateRender: false,
      scrollTrigger: { trigger: triggerSel, start, once: true },
    },
  );
}

function revealScaleMedia(selector: string, start = 'top 88%'): void {
  const els = gsap.utils.toArray<HTMLElement>(selector);
  els.forEach((el) => {
    const img = el.querySelector('img');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start, once: true },
    });
    tl.from(el, { clipPath: 'inset(12% 6% 12% 6% round 24px)', duration: 1.1, ease: EASE_EXPO }, 0);
    if (img) tl.from(img, { scale: 1.18, duration: 1.3, ease: EASE_EXPO }, 0);
  });
}

/* ---------- main motion ---------- */
function setupMotion(playIntro = true): void {
  const intro = document.getElementById('intro');
  const heroMedia = document.getElementById('hero-media');
  const header = document.getElementById('site-header');

  if (reduced) {
    intro?.remove();
    return;
  }

  if (playIntro) {
    document.body.style.overflow = 'hidden';
    if (header) gsap.set(header, { opacity: 0 });

    /* ===== load sequence: intro overlay → hero reveal ===== */
    const tl = gsap.timeline({
      defaults: { ease: EASE_OUT },
      onComplete: () => {
        intro?.remove();
        document.body.style.overflow = '';
        gsap.set(heroMedia, { clearProps: 'transform,translate,rotate,scale' });
        ScrollTrigger.refresh();
      },
    });

    tl.from('.intro-center', { yPercent: 24, opacity: 0, duration: 0.9, ease: EASE_EXPO }, 0.15)
      .from('.intro-corner', { opacity: 0, y: 12, duration: 0.7, stagger: 0.1 }, 0.6)
      .to('.intro-center', { yPercent: -20, opacity: 0, duration: 0.6, ease: 'power2.in' }, '+=0.85')
      .to('.intro-corner', { opacity: 0, duration: 0.4 }, '<')
      .to(intro, { yPercent: -100, duration: 1, ease: 'power4.inOut' }, '-=0.2')
      .from('.hero-media', { scale: 0.88, opacity: 0, duration: 1.3, ease: EASE_EXPO }, '-=0.6')
      .from('#hero-cutout', { opacity: 0, duration: 1, ease: EASE_OUT }, '<0.15')
      .to(header, { opacity: 1, duration: 0.6 }, '-=1')
      .from('.hero-title span', { yPercent: 75, opacity: 0, duration: 1, stagger: 0.12, ease: EASE_EXPO }, '-=0.9')
      .from('#hero-intro', { y: 28, opacity: 0, duration: 0.8 }, '-=0.55')
      .from('.pindex-col', { y: 40, opacity: 0, duration: 0.8, stagger: 0.08 }, '-=0.5');
  } else {
    intro?.remove();
    if (header) gsap.set(header, { opacity: 1 });
  }

  /* ===== product index (if user scrolls fast past load) ===== */
  revealFadeRise('.pindex-col', '.pindex-grid', 'top 90%', 0.07);

  /* ===== projects carousel ===== */
  revealLines('#projects-title', '#projects', 'top 84%');

  /* ===== services: sticky title + row cascade ===== */
  ScrollTrigger.matchMedia({
    '(min-width: 1025px)': () => {
      const t = document.querySelector('[data-pin-title]');
      if (t) {
        ScrollTrigger.create({
          trigger: '#services .split',
          start: 'top 18%',
          end: () => `bottom ${window.innerHeight * 0.55}`,
          pin: t,
          pinSpacing: false,
        });
      }
    },
  });
  revealLines('#services .st-inner', '#services .split', 'top 82%');
  revealFadeRise('#services .svc-row', '#services .split-right', 'top 80%', 0.09);

  /* ===== tools ===== */
  revealLines('#tools .st-inner', '#tools', 'top 84%');

  /* ===== footer: big text mask rise + badge pop + grid cascade ===== */
  gsap.fromTo('.fb-inner',
    { yPercent: 112 },
    {
      yPercent: 0,
      duration: 1.1,
      ease: EASE_EXPO,
      immediateRender: false,
      scrollTrigger: { trigger: '.footer-cta', start: 'top 82%', once: true },
    });
  gsap.fromTo('.badge--xl',
    { scale: 0.4, opacity: 0, rotate: -30 },
    {
      scale: 1,
      opacity: 1,
      rotate: 0,
      duration: 1,
      ease: 'back.out(1.7)',
      immediateRender: false,
      scrollTrigger: { trigger: '.footer-cta', start: 'top 78%', once: true },
    });
  revealFadeRise('.footer-col', '.footer-grid', 'top 92%', 0.1);
  gsap.fromTo('.footer-bar',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.9,
      ease: EASE_OUT,
      immediateRender: false,
      scrollTrigger: { trigger: '.footer-bar', start: 'top 96%', once: true },
    });

  /* refresh after fonts settle so line masks/pins measure right */
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}

function setupHeroParallax(): void {
  if (reduced || !window.matchMedia('(pointer: fine)').matches || window.matchMedia('(max-width: 720px)').matches) return;

  const hero = document.getElementById('hero');
  if (!hero) return;

  const layers = [
    { element: hero.querySelector<HTMLElement>('.hero-orbits'), strength: 2 },
    { element: hero.querySelector<HTMLElement>('.hero-visual'), strength: 4 },
    { element: hero.querySelector<HTMLElement>('.hero-title'), strength: 6 },
  ].filter((layer): layer is { element: HTMLElement; strength: number } => layer.element !== null);
  let pointerX = 0;
  let pointerY = 0;
  let frame = 0;

  const renderParallax = (): void => {
    frame = 0;
    for (const { element, strength } of layers) {
      element.style.setProperty('--parallax-x', `${pointerX * strength}px`);
      element.style.setProperty('--parallax-y', `${pointerY * strength}px`);
    }
  };

  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    if (!frame) frame = window.requestAnimationFrame(renderParallax);
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    pointerX = 0;
    pointerY = 0;
    if (!frame) frame = window.requestAnimationFrame(renderParallax);
  }, { passive: true });
}

function setupHeroSubjectParallax(): void {
  if (reduced || !window.matchMedia('(pointer: fine)').matches || window.matchMedia('(max-width: 720px)').matches) return;

  const hero = document.getElementById('hero');
  const subject = hero?.querySelector<HTMLElement>('.sujet-parallax');
  if (!hero || !subject) return;
  const range = Number.parseFloat(getComputedStyle(subject).getPropertyValue('--hero-subject-parallax-range'));
  if (!Number.isFinite(range)) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frame = 0;

  const update = (): void => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    subject.style.setProperty('--subject-parallax-x', `${currentX.toFixed(2)}px`);
    subject.style.setProperty('--subject-parallax-y', `${currentY.toFixed(2)}px`);

    if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
      frame = window.requestAnimationFrame(update);
    } else {
      currentX = targetX;
      currentY = targetY;
      frame = 0;
    }
  };

  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    targetX = (((event.clientX - bounds.left) / bounds.width) - 0.5) * 2 * range;
    targetY = (((event.clientY - bounds.top) / bounds.height) - 0.5) * 2 * range;
    if (!frame) frame = window.requestAnimationFrame(update);
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    if (!frame) frame = window.requestAnimationFrame(update);
  }, { passive: true });
}

function setupHeroScrollTransition(): void {
  if (reduced) return;

  const hero = document.getElementById('hero');
  const media = document.getElementById('hero-media');
  const titleTop = document.querySelectorAll<HTMLElement>('.hero-lead, .hero-word-top');
  const titleBottom = document.querySelector<HTMLElement>('.hero-word-bottom');
  const subject = document.querySelector<HTMLElement>('.hero-subject-transition');
  const intro = document.getElementById('hero-intro');
  const orbits = document.querySelector<HTMLElement>('.hero-orbits');
  if (!hero || !media || !titleTop.length || !titleBottom || !subject || !intro || !orbits) return;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  timeline
    .to(titleTop, {
      xPercent: -HERO_SCROLL.titleExitXPercent,
      autoAlpha: 0,
      duration: 0.3,
      ease: 'power2.in',
    }, 0)
    .to(titleBottom, {
      xPercent: HERO_SCROLL.titleExitXPercent,
      autoAlpha: 0,
      duration: 0.3,
      ease: 'power2.in',
    }, 0)
    .to(intro, {
      autoAlpha: 0,
      duration: 0.3,
      ease: 'none',
    }, 0)
    .to(subject, {
      scale: 1.15,
      y: '8vh',
      autoAlpha: 0,
      duration: 0.3,
      ease: 'power2.in',
    }, 0)
    .to(media, {
      scale: HERO_SCROLL.circleZoom,
      duration: 1,
      ease: HERO_SCROLL.zoomEase,
    }, 0)
    .to(orbits, {
      scale: 1.35,
      autoAlpha: 0,
      duration: 0.6,
      ease: HERO_SCROLL.zoomEase,
    }, 0.15);
}

function setupHeroVideoLoop(): void {
  const video = document.querySelector<HTMLVideoElement>('#hero-media .hero-video');
  const hero = document.getElementById('hero');
  if (!video || !hero) return;

  video.addEventListener('error', () => {
    console.error('Unable to load the hero shooting-stars video.', video.error);
  });

  let heroVisible = true;
  const syncPlayback = (): void => {
    if (!heroVisible || document.hidden) {
      video.pause();
      return;
    }
    void video.play().catch((error: unknown) => {
      console.error('Unable to autoplay the hero shooting-stars video.', error);
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(hero);
  }
  document.addEventListener('visibilitychange', syncPlayback);
  syncPlayback();
}

setupLanguageSwitcher();
setupMenu();
setupServiceRows();
setupMotion(window.scrollY === 0 && !window.location.hash);
setupHeroParallax();
setupHeroSubjectParallax();
setupHeroScrollTransition();
setupHeroVideoLoop();
