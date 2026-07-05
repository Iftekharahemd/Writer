/* ============================================
   BOOKS FILTER & SEARCH — INK & IMAGINATION
   ============================================ */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const filterTabs  = document.querySelectorAll('.filter-tab');
    const booksGrid   = document.getElementById('booksGrid');
    const noResults   = document.getElementById('noResults');
    const searchInput = document.getElementById('bookSearch');

    if (!booksGrid) return;

    let currentFilter = 'all';
    let currentSearch = '';

    function filterBooks() {
      const books = booksGrid.querySelectorAll('.book-card');
      let visibleCount = 0;

      books.forEach(function(book) {
        const genre = book.getAttribute('data-genre') || '';
        const title = (book.getAttribute('data-title') || '').toLowerCase();

        const matchesFilter = currentFilter === 'all' || genre === currentFilter;
        const matchesSearch = !currentSearch || title.includes(currentSearch);

        if (matchesFilter && matchesSearch) {
          book.removeAttribute('hidden');
          visibleCount++;
        } else {
          book.setAttribute('hidden', '');
        }
      });

      if (noResults) {
        noResults.hidden = visibleCount > 0;
      }
    }

    // Filter tabs
    filterTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        filterTabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentFilter = tab.getAttribute('data-filter');
        filterBooks();
      });
    });

    // Search
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        currentSearch = searchInput.value.trim().toLowerCase();
        filterBooks();
      });
    }
  });
})();
