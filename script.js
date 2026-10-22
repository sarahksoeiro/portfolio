// Menu do celular: abre e fecha ao clicar no botão ☰
const menuBotao = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

menuBotao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuBotao.setAttribute("aria-expanded", aberto);
});

// Fecha o menu quando clica em um link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("aberto"));
});
