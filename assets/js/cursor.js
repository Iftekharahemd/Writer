/* ============================================
   CUSTOM CURSOR — INK & IMAGINATION
   ============================================ */
(function() {
  'use strict';

  // Only show on non-touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.addEventListener('DOMContentLoaded', function() {
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');

    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf;

    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';

      raf = requestAnimationFrame(animateRing);
    }

    animateRing();

    // Hover states
    const hoverTargets = 'a, button, .book-card, .character-card, .blog-card, .filter-tab, .social-link';

    document.querySelectorAll(hoverTargets).forEach(addHoverEvents);

    // MutationObserver for dynamically added elements
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        m.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) {
            if (node.matches && node.matches(hoverTargets)) addHoverEvents(node);
            node.querySelectorAll && node.querySelectorAll(hoverTargets).forEach(addHoverEvents);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    function addHoverEvents(el) {
      el.addEventListener('mouseenter', function() {
        dot.classList.add('hovering');
        ring.classList.add('hovering');
      });
      el.addEventListener('mouseleave', function() {
        dot.classList.remove('hovering');
        ring.classList.remove('hovering');
      });
    }

    // Hide on leave
    document.addEventListener('mouseleave', function() {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });
  });
})();
