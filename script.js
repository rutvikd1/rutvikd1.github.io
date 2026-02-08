const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
// const navLinks = document.querySelectorAll('.nav-links li');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    burger.classList.toggle('toggle');      // animates lines to X
    nav.classList.toggle('nav-active');     // slides mobile menu in/out
  });
}

