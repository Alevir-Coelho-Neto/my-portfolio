
let btnAbrirMenu = document.getElementById('btn-abrir-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlayMenu = document.getElementById('overlay-menu-mobile');

btnAbrirMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu-mobile')
})

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu-mobile')
})

overlayMenu.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu-mobile')
})