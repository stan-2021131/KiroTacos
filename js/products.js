const products = [
  {
    id: 1,
    nombre: 'Taco al Pastor',
    ingredientes: ['cerdo', 'piña', 'cebolla', 'cilantro'],
    precio: 18.00,
    imagen: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    destacado: true
  },
  {
    id: 2,
    nombre: 'Taco de Carne Asada',
    ingredientes: ['res', 'cebolla', 'cilantro', 'limón'],
    precio: 22.00,
    imagen: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80',
    destacado: true
  },
  {
    id: 3,
    nombre: 'Taco de Pollo',
    ingredientes: ['pollo', 'pimiento', 'cebolla', 'crema'],
    precio: 16.00,
    imagen: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&q=80',
    destacado: true
  },
  {
    id: 4,
    nombre: 'Taco Vegetariano',
    ingredientes: ['frijoles', 'aguacate', 'tomate', 'lechuga'],
    precio: 14.00,
    imagen: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
    destacado: false
  },
  {
    id: 5,
    nombre: 'Taco de Chorizo',
    ingredientes: ['chorizo', 'papa', 'cebolla', 'salsa roja'],
    precio: 20.00,
    imagen: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&q=80',
    destacado: false
  },
  {
    id: 6,
    nombre: 'Taco de Camarón',
    ingredientes: ['camarón', 'aguacate', 'col', 'chipotle'],
    precio: 28.00,
    imagen: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&q=80',
    destacado: false
  },
  {
    id: 7,
    nombre: 'Taco de Barbacoa',
    ingredientes: ['res', 'consomé', 'cebolla', 'cilantro'],
    precio: 24.00,
    imagen: 'https://images.unsplash.com/photo-1570461226513-e08b58a52c53?w=600&q=80',
    destacado: false
  },
  {
    id: 8,
    nombre: 'Taco de Cochinita',
    ingredientes: ['cerdo', 'achiote', 'cebolla morada', 'habanero'],
    precio: 21.00,
    imagen: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?w=600&q=80',
    destacado: false
  },
  {
    id: 9,
    nombre: 'Taco de Birria',
    ingredientes: ['res', 'chile guajillo', 'consomé', 'queso'],
    precio: 26.00,
    imagen: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&q=80',
    destacado: false
  }
];

function renderCards(lista, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = lista.map(p => `
    <article class="product-card">
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="card-body">
        <h3>${p.nombre}</h3>
        <p class="ingredients">${p.ingredientes.join(', ')}</p>
        <span class="price">Q${p.precio.toFixed(2)}</span>
      </div>
    </article>
  `).join('');
}
