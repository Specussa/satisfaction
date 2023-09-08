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

// start header__bottom
const header = document.querySelector('.header');
const headertop = document.querySelector('.header__top');
const sectiontop = document.querySelector('.top');
window.addEventListener("scroll", () => {
  if (Math.round(window.pageYOffset) > headertop.clientHeight) {
    header.classList.add('active');
    sectiontop.classList.remove('hidden');
  } else {
    header.classList.remove('active');
    sectiontop.classList.add('hidden');
  }
})
// end header__bottom

// start btn
var btndefault = document.querySelectorAll('.default__btn');
btndefault.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.parentElement.parentElement.parentElement.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.parentElement.parentElement.parentElement.offsetTop - 
    this.parentElement.parentElement.parentElement.parentElement.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnheader = document.querySelectorAll('.header__blockbtn');
btnheader.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.parentElement.parentElement.parentElement.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.parentElement.parentElement.parentElement.parentElement.offsetTop - this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.offsetTop - 
    Math.round(window.pageYOffset);
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnhero = document.querySelectorAll('.hero__btn');
btnhero.forEach(btnhs => { 
  btnhs.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - this.parentElement.parentElement.parentElement.parentElement.offsetLeft - 
    this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.offsetLeft;
    var relY = e.pageY - this.offsetTop - this.parentElement.parentElement.parentElement.offsetTop - 
    this.parentElement.parentElement.parentElement.parentElement.offsetTop - 
    this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnfooter = document.querySelectorAll('.footer__btn');
btnfooter.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.parentElement.parentElement.parentElement.parentElement.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.parentElement.parentElement.parentElement.offsetTop - 
    this.parentElement.parentElement.parentElement.parentElement.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
// end btn

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

const headerlinks = document.querySelector('.header__links');
const headerbuttons = document.querySelector('.header__buttons');

const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

const menu_c = document.querySelector('.header__consultation');
const burger_c = document.querySelector('.button__project');

// кнопка header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  } else {
    bodyoverlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
// end header__burger

// start hover product
var hover = document.querySelectorAll('.product__images');
elemHover = false;
hover.forEach(hovers => {
  hovers.addEventListener('mouseover', function(e) {
    if(elemHover) return;
    var target = e.target.closest('.product__image');
    if(!target) return;
    elemHover = target;
    var parent = target.closest('.product__images'),
    old = parent.querySelector('.active')
    if(old) old.classList.remove('active')
    target.classList.add('active')
  })
  hovers.addEventListener('mouseout', function(e) {
    if(!elemHover) return
    elemHover = null;
  })
  hovers.addEventListener('mouseleave', function(){
    let parent = this;
    let elems = parent.children;

    for (let elem of elems) {
      elem.classList.remove('active');
    }
    this.children[0].classList.add('active');
  });
})
// end hover product

// start hero
const heroSlider = document.querySelector('.hero__swiper');
if(heroSlider){
  var aboutusThumbs = new Swiper('.hero__swiper', {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 40,
    speed: 1000,
    slideToClickedSlide: false,
    allowTouchMove: true,
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    breakpoints: {
      800: {
        spaceBetween: 20,
      },
    },
  });
}
// end hero

// start shop
const shopSlider = document.querySelector('.shop__swiper');
if(shopSlider){
  var aboutusThumbs = new Swiper('.shop__swiper', {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 40,
    speed: 1000,
    slideToClickedSlide: false,
    allowTouchMove: true,
    navigation: {
      nextEl: '.shop__next',
      prevEl: '.shop__prev',
    },
    pagination: {
      el: '.shop__pagination',
      clickable: true,
    },
    breakpoints: {
      800: {
        spaceBetween: 20,
      },
    },
  });
}
// end shop

// start blog
const blogSlider = document.querySelector('.blog__swiper');
if(blogSlider){
  var aboutusThumbs = new Swiper('.blog__swiper', {
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 4,
    spaceBetween: 20,
    speed: 1000,
    slideToClickedSlide: false,
    allowTouchMove: true,
    breakpoints: {
      800: {
        spaceBetween: 20,
      },
    },
  });
}
// end blog

// start product
const productSlider = document.querySelector('.product__swiper');
if(productSlider){
  var aboutusThumbs = new Swiper('.product__swiper', {
    loop: false,
    slidesPerView: 5,
    loopedSlides: 5,
    spaceBetween: 20,
    speed: 1000,
    slideToClickedSlide: false,
    allowTouchMove: true,
    breakpoints: {
      800: {
        spaceBetween: 20,
      },
    },
  });
}
// end product