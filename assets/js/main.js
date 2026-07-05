/* ============================================
   MAIN — INK & IMAGINATION
   ============================================ */
(function() {
  'use strict';

  /* ── Toast Utility ── */
  window.showToast = function(message, type) {
    type = type || 'success';
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = (type === 'success' ? '✓ ' : '✗ ') + message;

    container.appendChild(toast);

    setTimeout(function() {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(function() { toast.remove(); }, 300);
    }, 3500);
  };

  /* ── Newsletter Form ── */
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail');
        if (email && email.value) {
          // Simulate success
          window.showToast('Subscribed! Welcome to the story. ✨', 'success');
          email.value = '';
        }
      });
    }

    /* ── Favorites ── */
    const FAVE_KEY = 'ink-favorites';

    function getFavorites() {
      try { return JSON.parse(localStorage.getItem(FAVE_KEY)) || []; }
      catch(e) { return []; }
    }

    function saveFavorites(favs) {
      localStorage.setItem(FAVE_KEY, JSON.stringify(favs));
    }

    function toggleFavorite(id) {
      const favs = getFavorites();
      const idx  = favs.indexOf(id);
      if (idx === -1) {
        favs.push(id);
        window.showToast('Added to favorites! ♥', 'success');
      } else {
        favs.splice(idx, 1);
        window.showToast('Removed from favorites.', 'success');
      }
      saveFavorites(favs);
      return idx === -1;
    }

    function updateFavoriteButtons() {
      const favs = getFavorites();
      document.querySelectorAll('.favorite-btn').forEach(function(btn) {
        const id = btn.getAttribute('data-id');
        btn.textContent = favs.includes(id) ? '♥' : '♡';
        btn.setAttribute('aria-pressed', favs.includes(id));
      });
    }

    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('favorite-btn')) {
        const id   = e.target.getAttribute('data-id');
        const added = toggleFavorite(id);
        e.target.textContent = added ? '♥' : '♡';
        e.target.setAttribute('aria-pressed', added);
      }
    });

    updateFavoriteButtons();

    /* ── Lazy images fallback ── */
    if ('loading' in HTMLImageElement.prototype === false) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(function(img) {
        img.src = img.src;
      });
    }

    /* ── Smooth anchor scroll ── */
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
})();
