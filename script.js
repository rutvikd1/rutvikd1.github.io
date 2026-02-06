const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    navLinks.forEach((link, i) => link.style.animation = link.style.animation ? '' : `navLinkFade .45s ease forwards ${i/7 + .2}s`);
  });
}