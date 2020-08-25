const menuPanel = document.querySelector(".menu-panel");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  menuPanel.classList.toggle("open-menu");
});
