/* Shared JS for Roast & Ritual website */

// Example menu data — would be replaced by CMS or server in real site
const MENU_ITEMS = [
  { id: 1, name: 'Espresso', category: 'espresso', price: '$3.00', desc: 'Classic double shot with crema.' , image: "https://images.unsplash.com/photo-1657047698672-cbf2fd464d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw3fHxDbG9zZS11cCUyMG9mJTIwYSUyMGRvdWJsZSUyMGVzcHJlc3NvJTIwc2hvdCUyMG9uJTIwYSUyMHNhdWNlcnxlbnwwfDB8fHwxNzU1MjUxNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080"},
  { id: 2, name: 'Cortado', category: 'espresso', price: '$3.50', desc: 'Equal parts espresso and steamed milk.' , image: "https://images.unsplash.com/photo-1542600176-4f7f2cba84d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw2fHxCYXJpc3RhJTIwcG91cmluZyUyMGElMjBzbWFsbCUyMGNvcnRhZG8lMjBpbnRvJTIwYSUyMGdsYXNzfGVufDB8MHx8fDE3NTUyNTE3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"},
  { id: 3, name: 'Cappuccino', category: 'espresso', price: '$4.00', desc: 'Silky foam and a velvety body.' , image: "https://pixabay.com/get/g5d944d5324fc0eea0ef96a3554f0e50e0d5fd0cf841e98d38736cdead20b04e9264e8d0f325b41fa934556b700d8e4bd6acf9e7493afda3ea28ddaa5a93519ab_640.jpg"},
  { id: 4, name: 'Pour Over', category: 'brew', price: '$4.50', desc: 'Single-origin pour over, rotating selection.' , image: "https://pixabay.com/get/gaed6f6a24402fd5fa5a60336c5cad10d180c085f96536f6dc9702593d7a37f45264cc7ded8abfdba9cf7fc5c0ea85b87_640.jpg"},
  { id: 5, name: 'Cold Brew', category: 'brew', price: '$4.00', desc: 'Smooth, low-acidity cold brew.' , image: "https://images.unsplash.com/photo-1698450375515-8791d32b92d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHwxfHxUYWxsJTIwZ2xhc3MlMjBvZiUyMGNvbGQlMjBicmV3JTIwd2l0aCUyMGljZXxlbnwwfDB8fHwxNzU1MjUxNzkyfDA&ixlib=rb-4.1.0&q=80&w=1080"},
  { id: 6, name: 'Seasonal Latte', category: 'espresso', price: '$4.75', desc: 'Rotating seasonal flavors.' , image: "https://images.pexels.com/photos/5421506/pexels-photo-5421506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
  { id: 7, name: 'Almond Croissant', category: 'pastry', price: '$3.75', desc: 'Buttery, flaky, filled with almond cream.' , image: "https://pixabay.com/get/gabdeddc2a6e0a696e091cfbfc5211f1094695f282d8dfaf33aa1e92550eef089006ef2efe2c7739dc73ca892538c74993bcce7e5a6db2b6470d7f845951e900a_640.jpg"},
  { id: 8, name: 'Blueberry Muffin', category: 'pastry', price: '$2.75', desc: 'Tender muffin studded with berries.' , image: "https://images.pexels.com/photos/1305063/pexels-photo-1305063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
  { id: 9, name: 'Scone', category: 'pastry', price: '$2.50', desc: 'Buttery scone with lemon glaze.' , image: "https://images.unsplash.com/photo-1628256145785-2e0a37b17a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw2fHxMZW1vbiUyMHNjb25lJTIwd2l0aCUyMGdsYXplfGVufDB8MHx8fDE3NTUyNTE3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"}
];

// Render menu items into #menuGrid
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const items = MENU_ITEMS.filter(i => filter === 'all' ? true : i.category === filter);
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transform hover:-translate-y-1 transition';
    card.innerHTML = `
      <div class="w-full h-40 bg-gray-100 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
      </div>
      <div class="p-4">
        <div class="flex items-start justify-between">
          <div>
            <div class="font-semibold">${item.name}</div>
            <div class="text-sm text-gray-600 mt-1">${item.desc}</div>
          </div>
          <div class="text-amber-600 font-semibold">${item.price}</div>
        </div>
        <div class="mt-4 flex items-center gap-3">
          <button class="addCartBtn px-3 py-1 text-sm bg-amber-600 text-white rounded-md hover:bg-amber-500 transition">Add</button>
          <button class="detailsBtn px-3 py-1 text-sm border rounded-md hover:bg-gray-50 transition">Details</button>
        </div>
      </div>
    `;
    // details button opens a quick modal
    card.querySelector('.detailsBtn').addEventListener('click', () => showDetails(item));
    card.querySelector('.addCartBtn').addEventListener('click', () => {
      showToast(`${item.name} added to your order`);
    });
    grid.appendChild(card);
  });
}

function showDetails(item) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/40';
  modal.innerHTML = `
    <div class="w-[min(96%,720px)] bg-white rounded-lg overflow-hidden shadow-lg">
      <div class="w-full h-48 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
      </div>
      <div class="p-4">
        <div class="flex items-start justify-between">
          <div>
            <h3 class="text-xl font-semibold">${item.name}</h3>
            <p class="mt-2 text-gray-600">${item.desc}</p>
          </div>
          <div class="text-amber-600 font-semibold">${item.price}</div>
        </div>
        <div class="mt-4 flex justify-end">
          <button class="closeBtn px-4 py-2 mr-2 border rounded-md">Close</button>
          <button class="px-4 py-2 bg-amber-600 text-white rounded-md">Add to Order</button>
        </div>
      </div>
    </div>
  `;
  modal.querySelector('.closeBtn').addEventListener('click', () => document.body.removeChild(modal));
  modal.addEventListener('click', (e) => { if (e.target === modal) document.body.removeChild(modal); });
  document.body.appendChild(modal);
}

function showToast(msg = '') {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg opacity-0 transform translate-y-4 transition-all';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
  }, 2200);
}

// Filter buttons
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList && e.target.classList.contains('filterBtn')) {
    document.querySelectorAll('.filterBtn').forEach(b => b.classList.remove('bg-amber-50','text-amber-600'));
    e.target.classList.add('bg-amber-50','text-amber-600');
    const filter = e.target.dataset.filter || 'all';
    renderMenu(filter);
  }
});

// Mobile menu toggles and newsletter
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');

  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  const openNewsletter = document.getElementById('openNewsletter');
  const mobileSubscribe = document.getElementById('mobileSubscribe');
  const newsletterModal = document.getElementById('newsletterModal');
  const closeNewsletter = document.getElementById('closeNewsletter');
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMsg');

  if (openNewsletter) openNewsletter.addEventListener('click', () => newsletterModal.classList.remove('hidden'));
  if (mobileSubscribe) mobileSubscribe.addEventListener('click', () => newsletterModal.classList.remove('hidden'));
  if (closeNewsletter) closeNewsletter.addEventListener('click', () => newsletterModal.classList.add('hidden'));

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      if (email && email.includes('@')) {
        newsletterMsg.classList.remove('hidden');
        setTimeout(() => {
          newsletterMsg.classList.add('hidden');
          newsletterModal.classList.add('hidden');
          document.getElementById('newsletterEmail').value = '';
          showToast('Subscribed — thanks!');
        }, 1200);
      } else {
        alert('Please enter a valid email.');
      }
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please complete required fields.');
        return;
      }
      // Simulate successful send
      const status = document.getElementById('contactStatus');
      status.classList.remove('hidden');
      contactForm.reset();
      showToast('Message received — thank you!');
      setTimeout(() => { status.classList.add('hidden'); }, 4000);
    });
  }
});
