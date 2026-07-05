/* ============================================
   READING PROGRESS — INK & IMAGINATION
   ============================================ */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById('readingProgress');
    if (!bar) return;

    function updateProgress() {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      const progress     = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      bar.style.width = Math.min(progress, 100) + '%';
      bar.setAttribute('aria-valuenow', Math.round(progress));
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  });
})();
