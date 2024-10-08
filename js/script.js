const hamburger = document.querySelector('.hamburger')

const nav = document.querySelector('.navlinks')


hamburger.addEventListener('click', ()=> {
    nav.classList.toggle("active")
})

const navbarEl = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
   
    const scrollY = window.scrollY;

  
    if (scrollY > 20) {
        navbarEl.classList.add("active"); 
    } else {
        navbarEl.classList.remove("active"); 
    }
});


// Selecionando os botões
const breakfastBtn = document.getElementById('breakfast-btn');
const lunchBtn = document.getElementById('lunch-btn');
const dinnerBtn = document.getElementById('dinner-btn');

// Selecionando as seções de menu
const introEl = document.getElementById('introduction'); 
const breakfastMenu = document.getElementById('breakfast');
const lunchMenu = document.getElementById('lunch');
const dinnerMenu = document.getElementById('dinner');

// Selecionando a imagem que vai mudar
const menuImg = document.getElementById('menu-img');

// Função para mostra o menu correto e mudar a imagem
function showMenu(menuToShow, btnToActivate, imgSrc) {
  // Esconde todos os menus
  breakfastMenu.style.display = 'none';
  lunchMenu.style.display = 'none';
  dinnerMenu.style.display = 'none';
  introEl.style.display = 'none'; 

  // Remove a classe 'active' de todos os botões
  breakfastBtn.classList.remove('active');
  lunchBtn.classList.remove('active');
  dinnerBtn.classList.remove('active');

  // Mostra o menu selecionado
  menuToShow.style.display = 'block';

  // Adiciona a classe 'active' ao botão clicado
  btnToActivate.classList.add('active');

  // Altera a imagem
  menuImg.src = imgSrc;
}

// Adicionar event listeners aos botões
breakfastBtn.addEventListener('click', function() {
  showMenu(breakfastMenu, breakfastBtn, 'img/bf1.jpg'); 
});

lunchBtn.addEventListener('click', function() {
  showMenu(lunchMenu, lunchBtn, 'img/lunch2.jpg');
});

dinnerBtn.addEventListener('click', function() {
  showMenu(dinnerMenu, dinnerBtn, 'img/app3.jpg'); 
});
