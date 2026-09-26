/* ============================================================
   NUNO AMARO — PORTFOLIO
   shared.js — Injects shared navbar + footer into every page
   ============================================================ */

'use strict';

const DEPTH = (function() {
  const path = window.location.pathname;
  const depth = (path.match(/\//g) || []).length;
  return depth <= 1 ? './' : '../';
})();

function nav(activePage) {
  return `
<div class="cursor-dot" aria-hidden="true"></div>
<div class="cursor-ring" aria-hidden="true"><span class="cursor-label"></span></div>

<header class="navbar" role="banner">
  <div class="navbar__inner">
    <a href="${DEPTH}index.html" class="navbar__logo" aria-label="Nuno Amaro — Home">
      <div class="logo-mark" aria-hidden="true">NA</div>
      <span class="logo-text">Nuno Amaro</span>
    </a>
    <nav class="navbar__links" role="navigation" aria-label="Main navigation">
      <a href="${DEPTH}index.html#work"    class="navbar__link${activePage==='work'?' active':''}">Work</a>
      <a href="${DEPTH}about.html"         class="navbar__link${activePage==='about'?' active':''}">About</a>
      <a href="${DEPTH}index.html#skills"  class="navbar__link">Skills</a>
      <a href="${DEPTH}contact.html"       class="navbar__link${activePage==='contact'?' active':''}">Contact</a>
    </nav>
    <div class="navbar__actions">
      <button class="theme-toggle" aria-label="Toggle dark/light mode"><span class="theme-toggle-icon">☾</span></button>
      <a href="${DEPTH}contact.html" class="navbar__cta">Let's talk ↗</a>
      <button class="menu-toggle" aria-label="Toggle mobile menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<nav class="mobile-nav" aria-label="Mobile navigation">
  <ul class="mobile-nav__links" role="list">
    <li><a href="${DEPTH}index.html#work"    class="mobile-nav__link">Work</a></li>
    <li><a href="${DEPTH}about.html"         class="mobile-nav__link">About</a></li>
    <li><a href="${DEPTH}index.html#skills"  class="mobile-nav__link">Skills</a></li>
    <li><a href="${DEPTH}contact.html"       class="mobile-nav__link">Contact</a></li>
  </ul>
  <div class="mobile-nav__footer">
    <a href="https://linkedin.com/in/nunoamaro" class="mobile-nav__social" target="_blank" rel="noopener">LinkedIn</a>
    <a href="https://github.com/nunoamaro"      class="mobile-nav__social" target="_blank" rel="noopener">GitHub</a>
  </div>
</nav>`;
}

function footer() {
  return `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <div class="logo-mark" aria-hidden="true">NA</div>
        <p style="margin-top:1rem;">Designing and building digital experiences with curiosity.</p>
      </div>
      <div class="footer__nav">
        <div class="footer__nav-group">
          <div class="footer__nav-label">Navigation</div>
          <ul class="footer__nav-links" role="list">
            <li><a href="${DEPTH}index.html"           class="footer__nav-link">Home</a></li>
            <li><a href="${DEPTH}index.html#work"      class="footer__nav-link">Work</a></li>
            <li><a href="${DEPTH}about.html"           class="footer__nav-link">About</a></li>
            <li><a href="${DEPTH}contact.html"         class="footer__nav-link">Contact</a></li>
          </ul>
        </div>
        <div class="footer__nav-group">
          <div class="footer__nav-label">Social</div>
          <ul class="footer__nav-links" role="list">
            <li><a href="https://linkedin.com/in/nunoamaro" class="footer__nav-link" target="_blank" rel="noopener">LinkedIn ↗</a></li>
            <li><a href="https://github.com/nunoamaro"      class="footer__nav-link" target="_blank" rel="noopener">GitHub ↗</a></li>
            <li><a href="mailto:[ADD EMAIL]"                class="footer__nav-link">[ADD EMAIL]</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span class="footer__copyright">© 2026 Nuno Amaro. All rights reserved.</span>
      <span class="footer__tagline">Designed &amp; built with curiosity.</span>
    </div>
  </div>
</footer>`;
}

// Export for use in pages
window.NunoShared = { nav, footer };
