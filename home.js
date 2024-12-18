document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggle');
  const html = document.documentElement;

  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  // PARA CAMBIAR DE CLARO A OSCURO 
  toggleButton.addEventListener('click', () => {
    const isDarkMode = html.classList.toggle('dark');

    // GUARDAR EL TEMA DEL DISPOSITIVO
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
});
