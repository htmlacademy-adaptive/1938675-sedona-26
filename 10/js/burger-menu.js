let burger = document.querySelector('.navigation__toggle');
let menu = document.querySelector('.navigation__list');
let logo = document.querySelector('.main-header__logo');

menu.classList.remove('navigation__list--nojs');
burger.classList.add('navigation__toggle--withjs');
logo.classList.add('main-header__logo--withjs');

burger.onclick = function () {
  burger.classList.toggle('navigation__toggle--cross');
  menu.classList.toggle('navigation__list--open');
};
