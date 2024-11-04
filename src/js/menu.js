
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

/* marcação da seção*/

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    },
    { threshold: 0.28 } // Ajuste o valor do threshold conforme necessário
);

sections.forEach((section) => observer.observe(section));