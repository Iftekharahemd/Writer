/* ============================================
   NAVIGATION — INK & IMAGINATION
   ============================================ */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const nav       = document.getElementById('mainNav');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav  = document.getElementById('mobileNav');
    const backToTop  = document.getElementById('backToTop');

    // ── Scroll effects ──
    function onScroll() {
      const scrollY = window.scrollY;

      // Nav shadow
      if (nav) {
        nav.classList.toggle('scrolled', scrollY > 40);
      }

      // Back to top
      if (backToTop) {
        backToTop.classList.toggle('visible', scrollY > 400);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run once on load

    // ── Mobile menu ──
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', function() {
        const isOpen = mobileNav.classList.toggle('open');
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close on link click
      mobileNav.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
          mobileNav.classList.remove('open');
          menuToggle.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    // ── Back to top ──
    if (backToTop) {
      backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // ── Active link highlighting ──
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function(link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // ── Page transitions ──
    const overlay = document.getElementById('pageOverlay');
    if (overlay) {
      document.querySelectorAll('a[href]').forEach(function(link) {
        const href = link.getAttribute('href');
        // Only internal links that aren't anchors or mailto/tel
        if (href && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel') && !href.startsWith('http')) {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.classList.add('active');
            setTimeout(function() {
              window.location.href = href;
            }, 300);
          });
        }
      });

      // Fade in on load
      window.addEventListener('load', function() {
        overlay.classList.remove('active');
      });
    }
  });
})();
