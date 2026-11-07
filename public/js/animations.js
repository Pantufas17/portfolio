/* ============================================================
   NUNO AMARO — PORTFOLIO
   animations.js — IntersectionObserver scroll reveals
   ============================================================ */

'use strict';

const ScrollReveal = {
  classes: ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale', 'line-draw', 'img-reveal'],

  init() {
    if (!('IntersectionObserver' in window)) {
      // Fallback — show everything
      this.classes.forEach(cls => {
        document.querySelectorAll(`.${cls}`).forEach(el => el.classList.add('is-visible'));
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    this.classes.forEach(cls => {
      document.querySelectorAll(`.${cls}`).forEach(el => observer.observe(el));
    });
  }
};

/* ─── Stagger children ──────────────────────────────────────── */
const StaggerReveal = {
  init() {
    document.querySelectorAll('[data-stagger]').forEach(parent => {
      const children = parent.children;
      const delay = parseInt(parent.dataset.stagger) || 100;

      Array.from(children).forEach((child, i) => {
        child.classList.add('reveal');
        child.style.transitionDelay = `${i * delay}ms`;
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            Array.from(entry.target.children).forEach(child => {
              child.classList.add('is-visible');
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      observer.observe(parent);
    });
  }
};

/* ─── Hero visual floating cards ───────────────────────────── */
const HeroVisual = {
  init() {
    const cards = document.querySelectorAll('.hero-card');
    cards.forEach((card, i) => {
      card.classList.add(`float-${(i % 3) + 1}`);
    });
  }
};

/* ─── Active nav on scroll (single-page) ───────────────────── */
const ScrollSpy = {
  init() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.navbar__link[href^="#"]');
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));
  }
};

/* ─── Number counter ─────────────────────────────────────────── */
const CountUp = {
  init() {
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const dur    = 1200;
        const start  = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / dur, 1);
          const eased    = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    els.forEach(el => observer.observe(el));
  }
};

/* ─── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal.init();
  StaggerReveal.init();
  HeroVisual.init();
  ScrollSpy.init();
  CountUp.init();
});
