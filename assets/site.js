const data = {
  trustPoints: [
    "Comfort-focused design for older homeowners",
    "Professional finish with warm, trustworthy styling",
    "Friendly service for families across Carlisle and Cumbria"
  ],
  reasons: [
    "Logo and colours feel calmer and more professional",
    "Higher contrast layout is easier for senior visitors to read",
    "Popular services stay visible without crowding the main message",
    "Clear structure supports trust and more enquiries"
  ],
  services: [
    { title: "Walk-in showers", text: "Low-threshold showers designed to improve confidence, comfort and access." },
    { title: "Walk-in baths", text: "Step-through bathing options for clients who still prefer a bath but need easier entry." },
    { title: "Full bathroom projects", text: "Complete bathroom redesigns including layout changes, tiling, fittings and finishing." },
    { title: "Emergency repair", text: "Fast response for urgent bathroom faults, leaks and issues affecting safe daily use." }
  ],
  gallery: [
    { title: "Project example 1", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80", caption: "Cleaner lines and easier access." },
    { title: "Project example 2", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", caption: "A brighter and more practical bathroom." },
    { title: "Project example 3", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80", caption: "Designed for comfort and confidence." },
    { title: "Project example 4", image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=1200&q=80", caption: "Professional finish with easy-care details." }
  ],
  beforeAfter: [
    { title: "Safer shower access", before: "Typical high-step bath or awkward shower area that feels harder to use day by day.", after: "Walk-in shower layout with easier entry, cleaner lines and better daily confidence." },
    { title: "A bathroom that still feels like home", before: "Outdated bathroom that looks tired, cramped or difficult to keep safe.", after: "Brighter, more practical bathroom with a professional finish and senior-friendly access." }
  ],
  reviews: [
    { name: "Margaret, Carlisle", text: "The team were polite, tidy and explained everything clearly. The bathroom now feels much safer." },
    { name: "John & Anne, Cumbria", text: "We wanted something practical but not clinical. The finished result feels right for our home." },
    { name: "Family review", text: "The new layout works much better for my mum. Professional from start to finish." }
  ]
};

function renderList(items, selector, template){
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = items.map(template).join('');
}

renderList(data.trustPoints, '#trustList', item => `<div class="trust-item">${item}</div>`);
renderList(data.reasons, '#reasonsGrid', (item, i) => `<article class="card reason"><div class="num">${String(i+1).padStart(2,'0')}</div><div><strong>${item}</strong></div></article>`);
renderList(data.services, '#servicesGrid', item => `<article class="card service"><h3>${item.title}</h3><p class="lead">${item.text}</p></article>`);
renderList(data.gallery, '#galleryGrid', item => `<article class="card gallery-card"><img src="${item.image}" alt="${item.title}"><div class="gallery-copy"><strong>${item.title}</strong><p class="lead">${item.caption}</p></div></article>`);
renderList(data.beforeAfter, '#beforeAfterGrid', item => `<article class="card ba-card"><div class="ba-side ba-before"><span class="ba-label">Before</span><h3>${item.title}</h3><p class="lead">${item.before}</p></div><div class="ba-side ba-after"><span class="ba-label">After</span><h3>${item.title}</h3><p class="lead">${item.after}</p></div></article>`);
renderList(data.reviews, '#reviewGrid', item => `<article class="card review"><strong>${item.name}</strong><p class="lead">${item.text}</p></article>`);
