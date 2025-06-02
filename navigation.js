// Burger-Menü Funktionalität
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 900) {
      navLinks.classList.remove('nav-active');
      burger.classList.remove('open');
    }
  });
});

// Setzt den aktiven Link je nach Seite automatisch (optional)
const path = window.location.pathname.split("/").pop();
if(path.includes("startseite")) document.getElementById('nav-ueber').classList.add('active');
else if(path.includes("faehigkeiten")) document.getElementById('nav-faehigkeiten').classList.add('active');
else if(path.includes("portfolio")) document.getElementById('nav-portfolio').classList.add('active');
else if(path.includes("kontakt")) document.getElementById('nav-kontakt').classList.add('active');
