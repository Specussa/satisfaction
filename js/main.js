// start height
var oldWidth = window.innerWidth;
const docheight = document.documentElement
const appHeight = () => {docheight.style.setProperty('--height', `${window.innerHeight}px`)}
window.addEventListener('resize', appHeight)
appHeight()
window.onresize = function () {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    const appHeight = () => {docheight.style.setProperty('--height', `${window.innerHeight}px`)}
    window.addEventListener('resize', appHeight)
    appHeight()
  }
};
// end height

// start year
const year = document.querySelector('.footer__year');
if(!year){} else {
const currentYear = new Date().getFullYear();
year.insertAdjacentText('beforebegin', currentYear);
year.remove();
}
// end year

// start navbar
const bodyoverlay = document.querySelector('.overlay');

const header = document.querySelector('.header');
const headerlinks = document.querySelector('.header__links');
const headerbuttons = document.querySelector('.header__buttons');

const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

const menu_c = document.querySelector('.header__consultation');
const burger_c = document.querySelector('.button__project');

// кнопка header__burger
// document.querySelector('.header__burger').addEventListener('click', function() {
//   if (burger.classList.contains("active")) {
//     bodyoverlay.classList.remove("active");
//     menu.classList.remove("active");
//     burger.classList.remove("active");
//     document.body.style.overflow = "visible";
//     document.body.style.height = "100%";
//   } else {
//     bodyoverlay.classList.add("active");
//     menu.classList.add("active");
//     burger.classList.add("active");
//     document.body.style.overflow = "hidden";
//     document.body.style.height = "100vh";
//   }
// })
// end header__burger

// start expertise
const articlesSlider = document.querySelector('.articles__swiper');
if(articlesSlider){
  var aboutusThumbs = new Swiper('.articles__swiper', {
    loop: true,
    slidesPerView: 4,
    loopedSlides: 4,
    spaceBetween: 40,
    speed: 1000,
    slideToClickedSlide: false,
    allowTouchMove: true,
    navigation: {
      nextEl: '.articles__next',
      prevEl: '.articles__prev',
    },
    breakpoints: {
      800: {
        spaceBetween: 20,
      },
    },
  });
}
// end expertise