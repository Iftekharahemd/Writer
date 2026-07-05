/* ============================================
   CHARACTERS FILTER — INK & IMAGINATION
   ============================================ */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const filterTabs    = document.querySelectorAll('[data-char-filter]');
    const charactersGrid = document.getElementById('charactersGrid');

    if (!charactersGrid) return;

    filterTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        filterTabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');

        const filter = tab.getAttribute('data-char-filter');
        const cards  = charactersGrid.querySelectorAll('.character-card');

        cards.forEach(function(card) {
          const book = card.getAttribute('data-char-book') || '';
          if (filter === 'all' || book === filter) {
            card.removeAttribute('hidden');
          } else {
            card.setAttribute('hidden', '');
          }
        });
      });
    });
  });
})();
