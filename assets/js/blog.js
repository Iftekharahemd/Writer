/* ============================================
   BLOG FILTER — INK & IMAGINATION
   ============================================ */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var filterTabs = document.querySelectorAll('[data-blog-filter]');
    var blogGrid   = document.getElementById('blogGrid');

    if (!blogGrid) return;

    filterTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        filterTabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');

        var filter = tab.getAttribute('data-blog-filter');
        var cards  = blogGrid.querySelectorAll('.blog-card');

        cards.forEach(function(card) {
          var cat = card.getAttribute('data-blog-cat') || '';
          if (filter === 'all' || cat === filter) {
            card.removeAttribute('hidden');
          } else {
            card.setAttribute('hidden', '');
          }
        });
      });
    });
  });
})();
