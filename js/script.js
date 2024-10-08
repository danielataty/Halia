const hamburger = document.querySelector('.hamburger')

const nav = document.querySelector('.navlinks')


hamburger.addEventListener('click', ()=> {
    nav.classList.toggle("active")
})

const navbarEl = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    // Pega o valor atual de rolagem
    const scrollY = window.scrollY;

    // Se a rolagem for maior que a distância entre o início do bottomContainer e o topo da navbar
    if (scrollY > 20) {
        navbarEl.classList.add("active"); // Adiciona a classe "active"
    } else {
        navbarEl.classList.remove("active"); // Remove a classe "active"
    }
});


// Selecionando os botões
const breakfastBtn = document.getElementById('breakfast-btn');
const lunchBtn = document.getElementById('lunch-btn');
const dinnerBtn = document.getElementById('dinner-btn');

// Selecionando as seções de menu
const introEl = document.getElementById('introduction'); // Verifique se o ID está correto (era 'introdution')
const breakfastMenu = document.getElementById('breakfast');
const lunchMenu = document.getElementById('lunch');
const dinnerMenu = document.getElementById('dinner');

// Selecionando a imagem que vai mudar
const menuImg = document.getElementById('menu-img');

// Função para mostrar o menu correto e mudar a imagem
function showMenu(menuToShow, btnToActivate, imgSrc) {
  // Esconder todos os menus
  breakfastMenu.style.display = 'none';
  lunchMenu.style.display = 'none';
  dinnerMenu.style.display = 'none';
  introEl.style.display = 'none'; // Esconder introdução quando algum menu é exibido

  // Remover a classe 'active' de todos os botões
  breakfastBtn.classList.remove('active');
  lunchBtn.classList.remove('active');
  dinnerBtn.classList.remove('active');

  // Mostrar o menu selecionado
  menuToShow.style.display = 'block';

  // Adicionar a classe 'active' ao botão clicado
  btnToActivate.classList.add('active');

  // Alterar a imagem
  menuImg.src = imgSrc;
}

// Adicionar event listeners aos botões
breakfastBtn.addEventListener('click', function() {
  showMenu(breakfastMenu, breakfastBtn, 'img/bf2.jpg'); // Caminho para a imagem do Breakfast
});

lunchBtn.addEventListener('click', function() {
  showMenu(lunchMenu, lunchBtn, 'img/lunch1.jpg'); // Caminho para a imagem do Lunch
});

dinnerBtn.addEventListener('click', function() {
  showMenu(dinnerMenu, dinnerBtn, 'img/dinner2.jpg'); // Caminho para a imagem do Dinner
});
