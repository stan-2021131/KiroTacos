document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  if (!input) return;

  const grid = document.getElementById('menu-grid');

  if (grid) {
    // Estamos en menu.html: filtrar en tiempo real
    const params = new URLSearchParams(window.location.search);
    if (params.get('q')) {
      input.value = params.get('q');
      filterGrid(params.get('q'));
    }

    input.addEventListener('input', () => filterGrid(input.value.trim()));

    function filterGrid(query) {
      const filtered = query
        ? products.filter(p => p.nombre.toLowerCase().includes(query.toLowerCase()))
        : products;
      renderCards(filtered, 'menu-grid');
      if (filtered.length === 0) {
        grid.innerHTML = '<p style="color:#666;padding:1rem 0">No se encontraron productos.</p>';
      }
    }
  } else {
    // Otras páginas: redirigir al menú con el término buscado
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && input.value.trim()) {
        window.location.href = `menu.html?q=${encodeURIComponent(input.value.trim())}`;
      }
    });
  }
});
