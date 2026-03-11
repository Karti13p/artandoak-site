async function loadGallery() {
  const container = document.querySelector('[data-gallery-grid]');
  if (!container) return;

  try {
    const response = await fetch('data/gallery.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const items = Array.isArray(data) ? data : (data.items || []);
    container.innerHTML = '';

    items.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'card gallery-card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.alt || item.title}" loading="lazy">
        <div class="gallery-copy">
          <strong>${item.title}</strong>
          <p class="lead">${item.description || ''}</p>
        </div>
      `;
      container.appendChild(card);
    });

    if (!items.length) {
      container.innerHTML = '<article class="card"><p class="lead">No gallery items yet.</p></article>';
    }
  } catch (error) {
    console.error('Gallery failed to load:', error);
    container.innerHTML = '<article class="card"><p class="lead">Gallery could not be loaded right now.</p></article>';
  }
}

document.addEventListener('DOMContentLoaded', loadGallery);
