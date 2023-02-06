const slides = document.querySelectorAll('.hero>li');

const dots = document.querySelectorAll('.next-main-slaider-dots>span');

const interval = 5; // создаем переменную чтобы понятнее было задавать время для прокрутки

let activeSlide = 0;

const reset = () => {
  dots.forEach((dot) => dot.removeAttribute('class')); // удаляем класс из элемента
  dots[activeSlide].className = 'active'; // задаем класс элементу
  slides.forEach((slide) => (slide.style.display = 'none')); // скрываем элементы при нажатии
  slides[activeSlide].style.display = 'block'; // возвращаем кликнутый элемент
};

reset(); // вызываем функцию чтобы обнулить страницу и убрать все слайды

setInterval(() => {
  // прокручиваем слайды каждые 5 секунды
  reset();
  if (activeSlide < slides.length - 1) {
    activeSlide++;
  } else {
    activeSlide = 0;
  }
}, interval * 1000);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // задаем свойство клик при нажатии
    activeSlide = index; // актив слайд = индексу элемента в блоке
    reset();
  });
});

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
  slides.forEach(
    (slide) => (slide.getElementsByTagName('img')[0].style.opacity = opacity) // применяем опасити к к img в блоке li
  );
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
