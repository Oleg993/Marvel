const checkPoint = 565;
let nav_bg = 'transparent';
let opacity = 1;

window.addEventListener('scroll', () => {
  // появление бэкграунда на Хедер при скроле вниз ниже 565px и свойство опасити(затемнение картинки)
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkPoint) {
    nav_bg = 'transparent';
    opacity = 1 - currentScroll / checkPoint;
  } else {
    nav_bg = 'black';
    opacity = 0;
  }
  document.querySelector('.header-nav').style.background = nav_bg;
});

const menu = document.querySelector('.mobile-button');

const subMenu = document.querySelector('.second-menu-mobile');

let isOpen = 0;

menu.addEventListener('click', () => {
  // скрываем и показываем мобильное меню по клику
  if (!isOpen) {
    subMenu.style.display = 'block';
    isOpen = 1;
  } else {
    subMenu.style.display = 'none';
    isOpen = 0;
  }
});

const tabsTitles = document.querySelectorAll('.tabs-titles>li');
const tabs = document.querySelectorAll('.tab');
let activeTab = 0;

const resetTabs = () => {
  tabsTitles.forEach((tab) => tab.removeAttribute('class')); // удаляем класс из элемента
  tabsTitles[activeTab].className = 'active'; // задаем класс элементу
  tabs.forEach((tab) => (tab.style.display = 'none')); // скрываем элементы при нажатии
  tabs[activeTab].style.display = 'block'; // возвращаем кликнутый элемент
};

resetTabs(); // вызываем функцию чтобы обнулить страницу и убрать все элементы

tabsTitles.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // задаем свойство клик при нажатии
    activeTab = index; // актив элемент = индексу элемента в блоке
    resetTabs();
  });
});
