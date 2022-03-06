const navToggle = document.querySelector('.nav-toggle');
let navOpen = false;
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
  header.classList.toggle('header--dark');
  if (!navOpen) {
    navToggle.classList.add('open');
    navOpen = true;
  } else {
    navToggle.classList.remove('open');
    navOpen = false;
  }
});
