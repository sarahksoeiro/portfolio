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

// Carrossel de habilidades: as setas rolam os cards
const trilho = document.querySelector(".carrossel__trilho");
const passo = () => trilho.querySelector(".habilidade").offsetWidth + 18;

document.querySelector(".seta--esq").addEventListener("click", () => {
  trilho.scrollBy({ left: -passo() });
});
document.querySelector(".seta--dir").addEventListener("click", () => {
  trilho.scrollBy({ left: passo() });
});
