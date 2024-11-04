window.revelar = ScrollReveal({ reset: false });

/*Remover o preloader assim que a pagina carregar completamente*/
/*window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});*/

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(function() {
    preloader.style.display = "none";
  }, 1000); // 2000ms = 2 segundos de atraso
});


// TOPO DO SITE
revelar.reveal(".efeito-txt-topo", {
  duration: 1700,
  distance: "120px",
  easing: "ease-out",
});

revelar.reveal(".efeito-img-topo", {
  duration: 1800,
  distance: "90px",
  delay: 500,
  origin: "top",
  easing: "ease-out",
});

// TÍTULOS DAS SESSÕES
revelar.reveal(".titulo", {
  duration: 1000,
  distance: "90px",
  easing: "ease-out",
});

// SESSÃO ESPECIALIDADES
revelar.reveal(".efeito-especialidades", {
  duration: 1500,
  distance: "90px",
  delay: 300,
  origin: "top",
  scale: 0.5,
  opacity: 0,
  easing: "ease-out",
});

revelar.reveal(".efeito-especialidades1", {
  duration: 1100,
  distance: "90px",
  delay: 500,
  origin: "left",
  scale: 0.9,
  opacity: 0,
  easing: "ease-out",
});

revelar.reveal(".efeito-especialidades2", {
  duration: 1100,
  distance: "90px",
  delay: 1000,
  scale: 0.9,
  opacity: 0,
  easing: "ease-out",
});

revelar.reveal(".efeito-especialidades3", {
  duration: 1100,
  distance: "90px",
  delay: 1500,
  origin: "right",
  scale: 0.9,
  opacity: 0,
  easing: "ease-out",
});

// EFEITO SESSÃO SOBRE
revelar.reveal(".efeito-img-sobre", {
  duration: 1500,
  distance: "90px",
  origin: "left",
  opacity: 0,
  easing: "ease-out",
});

revelar.reveal(".efeito-txt-sobre", {
  duration: 1600,
  distance: "90px",
  origin: "right",
  opacity: 0,
  delay: 650,
  easing: "ease-out",
});

// EFEITO SESSÃO PROJETOS

// EFEITO DO PARAGRAFO

revelar.reveal(".paragrafo-projetos", {
  duration: 1300,
  distance: "90px",
  origin: "left",
  delay: 300,
  easing: "ease-out",
});

// EFEITO DOS CARDS

revelar.reveal(".efeito-img-projetos1", {
  duration: 1300,
  distance: "90px",
  delay: 300,
  origin: "right",
  opacity: 0,
  easing: "ease-in-out",
});

revelar.reveal(".efeito-img-projetos2", {
  duration: 1300,
  distance: "90px",
  delay: 300,
  origin: "right",
  opacity: 0,
  easing: "ease-in-out",
});

revelar.reveal(".efeito-img-projetos3", {
  duration: 1300,
  distance: "90px",
  delay: 300,
  origin: "right",
  opacity: 0,
  easing: "ease-in-out",
});

revelar.reveal(".efeito-img-projetos4", {
  duration: 1300,
  distance: "90px",
  delay: 300,
  origin: "right",
  opacity: 0,
  easing: "ease-in-out",
});

// EFEITO SESSÃO CONTATO
revelar.reveal(".efect-titulo-formulario", {
  duration: 1000,
  distance: "90px",
  easing: "ease-out",
});

revelar.reveal(".input1", {
  duration: 1100,
  distance: "90px",
  delay: 200,
  opacity: 0,
  easing: "ease-out",
});

revelar.reveal(".input2", {
  duration: 1100,
  distance: "90px",
  delay: 400,
  opacity: 0,
  easing: "ease-out",
});

revelar.reveal(".input3", {
  duration: 1100,
  distance: "90px",
  delay: 800,
  opacity: 0,
  easing: "ease-out",
});

revelar.reveal(".textarea1", {
  duration: 1100,
  distance: "90px",
  delay: 1000,
  opacity: 0,
  easing: "ease-out",
});

revelar.reveal(".efect-btn-enviar", {
  duration: 1100,
  distance: "90px",
  delay: 1150,
  opacity: 0,
  easing: "ease-out",
});
