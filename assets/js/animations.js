/* ============================================
   SCROLL ANIMATIONS — INK & IMAGINATION
   ============================================ */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const revealClasses = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];

    const allElements = document.querySelectorAll(revealClasses.join(', '));

    if (!allElements.length) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optional: stop observing once revealed for performance
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    allElements.forEach(function(el) {
      observer.observe(el);
    });
  });
})();
