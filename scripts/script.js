// Seleciona os elementos do menu
const menuToggle = document.getElementById("menu-toggle");
const navBar = document.querySelector(".nav-bar");

// Adiciona um ouvinte de evento de clique ao ícone do hamburguer
menuToggle.addEventListener("click", () => {
  // Alterna a classe "active" na barra de navegação para exibi-la ou ocultá-la
  navBar.classList.toggle("active");

  // Alterna a classe "menu-open" no ícone do hamburguer para animá-lo
  menuToggle.classList.toggle("menu-open");
});
