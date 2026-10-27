const items = document.querySelectorAll('.agenda-item');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');

const defaultTitle = 'Human Anatomy Overview — Body Systems & Organs';
const defaultDescription = 'Learn the foundation of the human body and how organ systems work together.';

function setSelection(item) {
  items.forEach((entry) => {
    const isSelected = entry === item;
    entry.classList.toggle('is-active', isSelected);
    entry.setAttribute('aria-pressed', String(isSelected));
  });

  const title = item.dataset.title || defaultTitle;
  const description = item.dataset.description || defaultDescription;

  detailTitle.textContent = title;
  detailDescription.textContent = description;
}

items.forEach((item) => {
  item.addEventListener('click', () => setSelection(item));
  item.setAttribute('aria-pressed', String(item.classList.contains('is-active')));
});
