/* ============================================================
   NUNO AMARO — PORTFOLIO
   main.js — Theme, Navbar, Init
   ============================================================ */

'use strict';

/* ─── Theme ─────────────────────────────────────────────────── */
const ThemeManager = {
  STORAGE_KEY: 'na-theme',

  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    this.apply(saved || system);
    this.bindToggle();
  },

  apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateIcon(theme);
  },

  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    this.apply(current === 'dark' ? 'light' : 'dark');
  },

  updateIcon(theme) {
    const icon = document.querySelector('.theme-toggle-icon');
    if (!icon) return;
    icon.textContent = theme === 'dark' ? '☼' : '☾';
  },

  bindToggle() {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });
  }
};

/* ─── Navbar ─────────────────────────────────────────────────── */
const Navbar = {
  el: null,
  menuToggle: null,
  mobileNav: null,
  isOpen: false,

  init() {
    this.el = document.querySelector('.navbar');
    this.menuToggle = document.querySelector('.menu-toggle');
    this.mobileNav = document.querySelector('.mobile-nav');

    if (!this.el) return;

    this.bindScroll();
    this.bindMobileMenu();
    this.setActiveLink();
  },

  bindScroll() {
    const update = () => {
      if (window.scrollY > 20) {
        this.el.classList.add('scrolled');
      } else {
        this.el.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  },

  bindMobileMenu() {
    if (!this.menuToggle || !this.mobileNav) return;

    this.menuToggle.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      this.menuToggle.classList.toggle('is-open', this.isOpen);
      this.mobileNav.classList.toggle('is-open', this.isOpen);
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    });

    // Close on link click
    this.mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        this.isOpen = false;
        this.menuToggle.classList.remove('is-open');
        this.mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Close on escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.isOpen) {
        this.isOpen = false;
        this.menuToggle.classList.remove('is-open');
        this.mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  },

  setActiveLink() {
    const path = window.location.pathname;
    document.querySelectorAll('.navbar__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && (path === href || (href !== '/' && path.startsWith(href)))) {
        link.classList.add('active');
      }
    });
  }
};

/* ─── Smooth scroll to anchor ───────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('.navbar')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─── Page Transition ───────────────────────────────────────── */
function initPageTransitions() {
  // Add transition overlay if not present
  if (!document.querySelector('.page-transition')) {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition';
    document.body.appendChild(overlay);
  }

  const overlay = document.querySelector('.page-transition');

  // Exit animation on internal link click
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') ||
        href.startsWith('http') || link.getAttribute('target') === '_blank') return;

    link.addEventListener('click', e => {
      e.preventDefault();
      overlay.classList.add('exit');
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });

  // Enter animation
  overlay.classList.add('enter');
  setTimeout(() => {
    overlay.classList.remove('enter');
  }, 600);
}

/* ─── Currently tag ─────────────────────────────────────────── */
function initCurrentlyTag() {
  const el = document.querySelector('.currently-building');
  if (!el) return;

  let i = 0;
  const span = el.querySelector('.currently-val');
  if (!span) return;
  if (span) span.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  // Use i18n items if available, fallback to EN
  const getItems = () => {
    const lang = window.I18n?.current || 'en';
    const items = window.CURRENTLY_ITEMS?.[lang];
    return items || ['this portfolio ✦', 'Vue.js projects', 'new UI concepts'];
  };

  setInterval(() => {
    span.style.opacity = '0';
    span.style.transform = 'translateY(-6px)';
    setTimeout(() => {
      const items = getItems();
      i = (i + 1) % items.length;
      span.textContent = items[i];
      span.style.opacity = '1';
      span.style.transform = 'translateY(0)';
    }, 300);
  }, 3500);
}

/* ─── Contact form ──────────────────────────────────────────── */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = 'Message sent ✓';
    btn.disabled = true;
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

/* ─── Projects Carousel (Infinite Auto-Scroll) ───────────────── */
function initProjectsCarousel() {
  const carousel = document.getElementById('projectsCarousel');
  if (!carousel) return;

  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');
  const originalCards = Array.from(carousel.querySelectorAll('.project-card'));

  if (!originalCards.length) return;

  // Clone cards once for a seamless infinite loop
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    carousel.appendChild(clone);
  });

  const allCards = Array.from(carousel.querySelectorAll('.project-card'));

  // Create dots for original items
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    originalCards.forEach((card, index) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to project ${index + 1}`);
      dot.addEventListener('click', () => {
        pauseAutoScroll(3000);
        originalCards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      });
      dotsContainer.appendChild(dot);
    });
  }

  // Auto-scroll loop variables
  let isPaused = false;
  let resumeTimer = null;
  let isDown = false;
  let startX = 0;
  let scrollLeftStart = 0;
  let hasMoved = false;
  const speed = 0.5; // pixels per frame (gentle, smooth and elegant)

  const pauseAutoScroll = (duration = 2000) => {
    isPaused = true;
    if (resumeTimer) clearTimeout(resumeTimer);
    if (duration > 0) {
      resumeTimer = setTimeout(() => {
        if (!isDown) isPaused = false;
      }, duration);
    }
  };

  // Continuous auto-scroll loop
  function autoScrollLoop() {
    if (!isPaused && !isDown) {
      const halfWidth = carousel.scrollWidth / 2;
      carousel.scrollLeft += speed;

      // When reaching the cloned half, loop back seamlessly
      if (carousel.scrollLeft >= halfWidth) {
        carousel.scrollLeft -= halfWidth;
      }
    }
    requestAnimationFrame(autoScrollLoop);
  }
  requestAnimationFrame(autoScrollLoop);

  // Pause on hover
  carousel.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  carousel.addEventListener('mouseleave', () => {
    if (!isDown) {
      isPaused = false;
    }
  });

  // Touch support
  carousel.addEventListener('touchstart', () => {
    isPaused = true;
  }, { passive: true });

  carousel.addEventListener('touchend', () => {
    pauseAutoScroll(2000);
  }, { passive: true });

  // Update active dots state
  const updateDots = () => {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    if (!dots.length) return;

    const halfWidth = carousel.scrollWidth / 2;
    const currentScroll = carousel.scrollLeft % halfWidth;
    let activeIndex = 0;
    let minDistance = Infinity;

    originalCards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - carousel.offsetLeft - currentScroll);
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  };

  carousel.addEventListener('scroll', updateDots, { passive: true });

  // Prev / Next button click
  const getScrollStep = () => {
    const card = originalCards[0];
    const style = window.getComputedStyle(carousel);
    const gap = parseFloat(style.gap) || 20;
    return card ? card.offsetWidth + gap : 360;
  };

  if (prevBtn) {
    prevBtn.disabled = false;
    prevBtn.addEventListener('click', () => {
      pauseAutoScroll(3000);
      const halfWidth = carousel.scrollWidth / 2;
      if (carousel.scrollLeft <= 10) {
        carousel.scrollLeft += halfWidth;
      }
      carousel.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.addEventListener('click', () => {
      pauseAutoScroll(3000);
      carousel.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });
  }

  // Mouse Drag to Scroll
  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    hasMoved = false;
    isPaused = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeftStart = carousel.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    carousel.classList.remove('is-dragging');
    pauseAutoScroll(1500);
    setTimeout(() => {
      hasMoved = false;
    }, 50);
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 8) {
      hasMoved = true;
      carousel.classList.add('is-dragging');
      const halfWidth = carousel.scrollWidth / 2;
      let targetScroll = scrollLeftStart - walk;
      if (targetScroll < 0) targetScroll += halfWidth;
      if (targetScroll >= halfWidth * 2) targetScroll -= halfWidth;
      carousel.scrollLeft = targetScroll;
    }
  });

  // Prevent opening project link when dragging, allow on normal click
  allCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });
}

/* ─── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  Navbar.init();
  initSmoothScroll();
  initPageTransitions();
  initCurrentlyTag();
  initContactForm();
  initProjectsCarousel();
});
