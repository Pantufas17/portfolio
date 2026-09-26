/* ============================================================
   NUNO AMARO — PORTFOLIO
   cursor.js — Custom cursor logic
   ============================================================ */

'use strict';

const CustomCursor = {
  dot: null,
  ring: null,
  label: null,
  x: 0, y: 0,
  ringX: 0, ringY: 0,
  speed: 0.12,
  isVisible: false,

  init() {
    // Only on devices with a real pointer
    if (window.matchMedia('(hover: none)').matches) return;

    this.dot  = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    this.label = this.ring?.querySelector('.cursor-label');

    if (!this.dot || !this.ring) return;

    this.bindEvents();
    this.startRaf();
  },

  bindEvents() {
    document.addEventListener('mousemove', e => {
      this.x = e.clientX;
      this.y = e.clientY;

      if (!this.isVisible) {
        this.isVisible = true;
        this.dot.style.opacity  = '1';
        this.ring.style.opacity = '1';
        this.ringX = this.x;
        this.ringY = this.y;
      }

      // Move dot immediately
      this.dot.style.transform = `translate(${this.x - 4}px, ${this.y - 4}px)`;
    });

    document.addEventListener('mouseleave', () => {
      this.dot.style.opacity  = '0';
      this.ring.style.opacity = '0';
      this.isVisible = false;
    });

    // Hover states on project cards → "VIEW"
    document.querySelectorAll('.project-card, .next-project').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.ring.classList.add('is-hover');
        if (this.label) this.label.textContent = 'VIEW';
      });
      el.addEventListener('mouseleave', () => {
        this.ring.classList.remove('is-hover', 'is-link');
        if (this.label) this.label.textContent = '';
      });
    });

    // Hover on links → expand ring
    document.querySelectorAll('a, button, .btn').forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (!this.ring.classList.contains('is-hover')) {
          this.ring.classList.add('is-link');
        }
      });
      el.addEventListener('mouseleave', () => {
        this.ring.classList.remove('is-link');
      });
    });

    // Click effect
    document.addEventListener('mousedown', () => {
      this.dot.style.transform  = `translate(${this.x - 4}px, ${this.y - 4}px) scale(0.7)`;
    });
    document.addEventListener('mouseup', () => {
      this.dot.style.transform  = `translate(${this.x - 4}px, ${this.y - 4}px) scale(1)`;
    });
  },

  startRaf() {
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      this.ringX = lerp(this.ringX, this.x, this.speed);
      this.ringY = lerp(this.ringY, this.y, this.speed);

      const hw = this.ring.offsetWidth  / 2;
      const hh = this.ring.offsetHeight / 2;
      this.ring.style.transform = `translate(${this.ringX - hw}px, ${this.ringY - hh}px)`;

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
};

document.addEventListener('DOMContentLoaded', () => CustomCursor.init());
