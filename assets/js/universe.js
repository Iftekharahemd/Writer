/* Universe map interactions */
(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    var locations = document.querySelectorAll('.map-location');
    locations.forEach(function(loc) {
      loc.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var tooltip = loc.querySelector('.map-tooltip');
          if (tooltip) {
            var visible = tooltip.style.opacity === '1';
            tooltip.style.opacity = visible ? '0' : '1';
          }
        }
      });
    });
  });
})();
