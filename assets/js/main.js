(function() {
  'use strict';

  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  if (!filterButtons.length || !cards.length) return;

  const applyFilter = selectedFilter => {
    filterButtons.forEach(button => {
      const isActive = button.dataset.filter === selectedFilter;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    cards.forEach(card => {
      const matches = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.hidden = !matches;
      card.setAttribute('aria-hidden', String(!matches));
    });
  };

  filterButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => applyFilter(button.dataset.filter));
  });
})();
