/* ============================================================
   NUNO AMARO — PORTFOLIO
   marquee.js — Infinite tech marquee
   ============================================================ */

'use strict';

function initMarquee() {
  const tracks = document.querySelectorAll('.marquee-track');

  tracks.forEach(track => {
    // Clone content for seamless loop
    const original = track.innerHTML;
    track.innerHTML = original + original;
  });
}

document.addEventListener('DOMContentLoaded', initMarquee);
