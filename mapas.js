const BASE_URL = 'https://valorant-api.com/v1';
const mapsContainer = document.getElementById('maps-container');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const cerrarModalButton = document.getElementById('cerrarModal');

// DATOS DE LOS MAPAS
fetch(`${BASE_URL}/maps`)
  .then(res => res.json())
  .then(jsonResponse => {
    jsonResponse.data.forEach(map => {
      const card = document.createElement('div');
      card.className = 'p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center cursor-pointer';
      
      const img = document.createElement('img');
      img.src = map.splash;
      img.alt = map.displayName;
      img.className = 'w-full h-32 object-contain mb-2';
      
      const name = document.createElement('h3');
      name.textContent = map.displayName;
      name.className = 'text-lg font-semibold';
      
      card.addEventListener('click', () => abrirModal(map));
      
      card.appendChild(img);
      card.appendChild(name);
      mapsContainer.appendChild(card);
    });
  });


function abrirModal(map) {
  modalContent.innerHTML = `
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">${map.displayName}</h2>
    <!-- Imagen del mapa -->
    <img src="${map.displayIcon}" alt="${map.displayName}" class="w-full max-h-[400px] object-contain mb-4">
  `;
  modal.classList.remove('hidden');
}


cerrarModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
