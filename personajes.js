const URL_BASE = 'https://valorant-api.com/v1';
const contenedorAgentes = document.getElementById('agents-container');
const modal = document.getElementById('modal');
const botonCerrarModal = document.getElementById('closeModal');
const contenidoModal = document.getElementById('modalContent');

//DATOS PERSONAJE
fetch(`${URL_BASE}/agents`)
  .then(res => res.json())
  .then(respuestaJson => {
    respuestaJson.data.forEach(agent => {
      const card = document.createElement('div');
      card.className = 'p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center cursor-pointer';
      
      const img = document.createElement('img');
      img.src = agent.displayIconSmall;
      img.alt = agent.displayName;
      img.className = 'w-full h-32 object-contain mb-2';
      
      const nombre = document.createElement('h3');
      nombre.textContent = agent.displayName;
      nombre.className = 'text-lg font-semibold';
      
      card.addEventListener('click', () => abrirModal(agent));

      card.appendChild(img);
      card.appendChild(nombre);
      contenedorAgentes.appendChild(card);
    });
  });

// DETALLE PERSONAJE EN MODAL
function abrirModal(agent) {
  const contenido = `
    <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">${agent.displayName}</h2>
    <div class="mt-4 text-center">
      <img src="${agent.fullPortrait}" alt="${agent.displayName}" class="w-full h-64 object-contain mb-4">
      <p class="text-gray-800 dark:text-gray-200">${agent.description || 'No hay descripción disponible.'}</p>
    </div>
  `;

  contenidoModal.innerHTML = contenido;
  modal.classList.remove('hidden');
}


botonCerrarModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});


modal.addEventListener('click', (evento) => {
  if (evento.target === modal) {
    modal.classList.add('hidden');
  }
});
