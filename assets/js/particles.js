/* ============================================
   PARTICLES — INK & IMAGINATION
   ============================================ */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    // Reduce particles for performance
    const count = window.innerWidth < 768 ? 15 : 30;

    for (let i = 0; i < count; i++) {
      createParticle(container);
    }
  });

  function createParticle(container) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size     = Math.random() * 3 + 1;
    const left     = Math.random() * 100;
    const delay    = Math.random() * 15;
    const duration = Math.random() * 12 + 8;
    const hue      = Math.random() > 0.5 ? '168, 85, 247' : '236, 72, 153';

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -10px;
      background: rgb(${hue});
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      animation-name: particleDrift;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      opacity: 0;
      border-radius: 50%;
    `;

    container.appendChild(p);
  }
})();
