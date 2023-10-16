// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start adult
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const adultpopup = document.querySelector(".adult__popup");
const adultagree = document.querySelector(".adult__agree");
const overlayblur = document.querySelector(".overlay__blur");

const adultCodes = () => {
  if (document.cookie.includes("codinglab")) return;
  adultpopup.classList.add("active");
  overlayblur.classList.add("active");
  document.body.style.overflow = "hidden";
  document.body.style.height = "100vh";
  header.style.filter = "blur(5px)";
  main.style.filter = "blur(5px)";

  adultagree.addEventListener("click", () => {
    adultpopup.classList.remove("active");
    overlayblur.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
    header.style.filter = null;
    main.style.filter = null;
    //set cookies (60 sec * 60 min * 24 hours) = 1 day (86 400 mc)
    document.cookie = "cookieBy= codinglab; max-age=" + (60 * 60 * 1) * 1;
  });
};
window.addEventListener("load", adultCodes);
// end adult

// start header scroll active
const headertop = document.querySelector('.header__top');
if (oldWidth > 1280) {
  window.addEventListener("scroll", () => {
    if (Math.round(window.pageYOffset) > headertop.clientHeight) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  })
}
window.onresize = function () {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth > 1280) {
    window.addEventListener("scroll", () => {
      if (Math.round(window.pageYOffset) > headertop.clientHeight) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    })
  }
};
// end header scroll active

// start year
const year = document.querySelector('.footer__year');
if(!year){} else {
const currentYear = new Date().getFullYear();
year.insertAdjacentText('beforebegin', currentYear);
year.remove();
}
// end year

// start navbar
const overlay = document.querySelector('.overlay');
const overlaypopup = document.querySelector('.overlay__popup');

const headerlinks = document.querySelector('.header__links');
const headerbuttons = document.querySelector('.header__buttons');

const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');

// кнопка header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    overlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
  } else {
    overlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
// end header__burger

// start login__popup
const headerpersonal = document.querySelector('.header__personal');
const loginpopup = document.querySelector('.login__popup');
const loginclose = document.querySelector('.login__close');
const loginreg = document.querySelector('.login__button_reg');
const loginback = document.querySelector('.login__button_back');
const loginform = document.querySelector('.login__form');
const regform = document.querySelector('.reg__form');
const loginlogged = document.querySelector('.login__logged');
const registrationform = document.querySelector('.registration__form');
const registrationback = document.querySelector('.registration__button_back');

headerpersonal.addEventListener('click', function() {
  if (!loginpopup.classList.contains("active")) {
    if (!registrationform.classList.contains("active")) {
      loginform.classList.remove("hidden");
    }
    regform.classList.remove("active");
    loginlogged.classList.remove("active");
    overlaypopup.classList.add("active");
    loginpopup.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})

loginclose.addEventListener('click', function() {
  if (loginpopup.classList.contains("active")) {
    overlaypopup.classList.remove("active");
    loginpopup.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
  }
})

loginreg.addEventListener('click', function() {
  loginform.classList.add("hidden");
  regform.classList.add("active");
})

loginback.addEventListener('click', function() {
  loginform.classList.remove("hidden");
  regform.classList.remove("active");
})

registrationback.addEventListener('click', function() {
  registrationform.classList.remove("active");
  regform.classList.add("active");
})
// end header__burger

// start overlaypopup
const cfpopup = document.querySelector('.catalog__filter_popup');
const personalpopup = document.querySelector(".personal__popup");
const articlepopup = document.querySelector(".article__popup");
overlaypopup.addEventListener('click', function() {
  if(cfpopup){cfpopup.classList.remove("active")};
  if(personalpopup){personalpopup.classList.remove("active")};
  if(articlepopup){articlepopup.classList.remove("active")};
  if(loginpopup.classList.contains("active")){loginpopup.classList.remove("active")};
  overlaypopup.classList.remove("active");
  document.body.style.overflow = null;
  document.body.style.height = null;
})
// end header__burger

// start catalog__button
var catalogb = document.getElementsByClassName("catalog__button");
var i;

for (i = 0; i < catalogb.length; i++) {
  catalogb[i].onclick = function(e) {
    var catalogn = this.nextElementSibling;
    var catalogp = this.parentElement;
    var catalogsbi = document.getElementsByClassName("catalog__button_item");
    var catalogsl = document.getElementsByClassName("catalog__sublist");
    var catalogba = document.getElementsByClassName("catalog__button active");

    if (catalogn.style.maxHeight) {
      catalogn.style.maxHeight = null;
      this.classList.remove("active");
      catalogn.classList.remove("active");
      catalogp.classList.remove("active");
    } else {
      for (var q = 0; q < catalogba.length; q++) {
        catalogba[q].classList.remove("active");
        catalogsl[q].classList.remove("active");
        catalogsl[q].classList.remove("active");
      }
      for (var p = 0; p < catalogsl.length; p++) {
        this.classList.remove("active");
        catalogsl[p].classList.remove("active");
        catalogsbi[p].classList.remove("active");
        catalogsl[p].style.maxHeight = null;
      }
      catalogn.style.maxHeight = (catalogn.scrollHeight + 16.5) + "px";
      catalogn.classList.add("active");
      catalogp.classList.add("active");
      this.classList.add("active");
    }
  };
}
// end catalog__button

// start hero
const heroSlider = document.querySelector('.hero__swiper');
if(heroSlider){
  var aboutusThumbs = new Swiper('.hero__swiper', {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 1,
    spaceBetween: 40,
    speed: 1500,
    slideToClickedSlide: true,
    allowTouchMove: true,
    cssMode: true,
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    breakpoints: {
      1280: {
        spaceBetween: 0,
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
      580: {
        spaceBetween: 10,
      },
      1280: {
        spaceBetween: 20,
      },
    },
  });
}
// end blog

// start products
const productsSlider = document.querySelector('.products__swiper');
if(productsSlider){
  var aboutusThumbs = new Swiper('.products__swiper', {
    loop: false,
    slidesPerView: 5,
    loopedSlides: 5,
    spaceBetween: 20,
    speed: 1000,
    slideToClickedSlide: false,
    allowTouchMove: true,
    breakpoints: {
      580: {
        slidesPerView: 2,
        loopedSlides: 2,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 10,
      },
    },
  });
}
// end products

// start product
const productSlider = document.querySelector('.product__swiper');
if(productSlider){
  var productThumbs = new Swiper('.product__thumbs_swiper', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 4,
    loop: false,
    freeMode: true,
    loopedSlides: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      580: {
        direction: 'horizontal',
      },
    },
  });
  var productSlide = new Swiper('.product__swiper', {
    spaceBetween: 10,
    loop: false,
    speed: 1000,
    loopedSlides: 4,
    thumbs: {
      swiper: productThumbs,
    },
  });
}
// end product

// start product
const shopsSlider = document.querySelector('.shop__page_swiper');
if(shopsSlider){
  var shopsSlide = new Swiper('.shop__page_swiper', {  
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 6000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    breakpoints: {
      1600: {
        spaceBetween: 5,
      },
    },
  });
}
// end product

// start hover products
var hover = document.querySelectorAll('.products__images');
elemHover = false;
hover.forEach(hovers => {
  hovers.addEventListener('mouseover', function(e) {
    if(elemHover) return;
    var target = e.target.closest('.products__image');
    if(!target) return;
    elemHover = target;
    var parent = target.closest('.products__images'),
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
// end hover products

// start like
let pfavorites = document.querySelectorAll(".products__favorites");
for (let i = 0; i < pfavorites.length; i++) {
  pfavorites[i].onclick = function(e) {
    if (this.classList.contains("added")) {
      this.classList.remove("added");
    } else {
      this.classList.add("added");
    }
    e.preventDefault();
  }
}
// end like

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
    Math.round(window.pageYOffset) + Math.round(this.offsetParent.offsetParent.scrollTop);
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
var btnsubcatalog = document.querySelectorAll('.subcatalog__btn');
btnsubcatalog.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
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
var btnheader = document.querySelectorAll('.header__btn');
btnheader.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.parentElement.parentElement.parentElement.offsetLeft;
    var relY = e.pageY - this.offsetTop + 
    this.parentElement.offsetTop - 
    Math.round(window.pageYOffset) - Math.round(this.getBoundingClientRect().top);
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnbrands = document.querySelectorAll('.brands__btn');
btnbrands.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.offsetParent.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.offsetParent.offsetParent.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnerror = document.querySelectorAll('.error__btn');
btnerror.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.offsetParent.offsetLeft - 
    this.offsetParent.offsetParent.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.offsetParent.offsetParent.offsetParent.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnfavorites = document.querySelectorAll('.favorites__btn');
btnfavorites.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.offsetParent.offsetLeft - 
    this.offsetParent.offsetParent.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.offsetParent.offsetTop - 
    this.offsetParent.offsetParent.offsetParent.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnfavorite = document.querySelectorAll('.favorite__btn');
btnfavorite.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.offsetParent.offsetLeft - 
    this.offsetParent.offsetParent.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.offsetParent.offsetTop - 
    this.offsetParent.offsetParent.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnproduct = document.querySelectorAll('.product__btn');
btnproduct.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.offsetParent.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.offsetParent.offsetParent.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnproductrb = document.querySelectorAll('.product__reviews_btn');
btnproductrb.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.offsetParent.offsetParent.offsetLeft - 
    this.offsetParent.offsetParent.offsetParent.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.offsetParent.offsetTop - 
    this.offsetParent.offsetParent.offsetTop - 
    this.offsetParent.offsetParent.offsetParent.offsetParent.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btncart = document.querySelectorAll('.cart__btn');
btncart.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.offsetParent.offsetLeft - 
    this.offsetParent.offsetParent.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.offsetParent.offsetTop - 
    this.offsetParent.offsetParent.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
var btnpersonal = document.querySelectorAll('.personal__btn');
btnpersonal.forEach(btns => { 
  btns.onmousemove = function (e) {
    var relX = e.pageX - this.offsetLeft - 
    this.offsetParent.offsetLeft - 
    this.offsetParent.offsetParent.offsetLeft;
    var relY = e.pageY - this.offsetTop - 
    this.offsetParent.offsetTop - 
    this.offsetParent.offsetParent.offsetTop - 
    this.offsetParent.offsetParent.offsetParent.offsetTop;
    this.children[1].style.setProperty('--rely', `${relY}px`);
    this.children[1].style.setProperty('--relx', `${relX}px`);
  };
})
// end btn

// start catalog__image
var catalogit = document.querySelector('.catalog__image_tiles');
var catalogil = document.querySelector('.catalog__image_list');
var catalogp = document.querySelector('.catalog__products');

if(!catalogil){} else {
  catalogit.addEventListener('click', function() {
    if (!catalogit.classList.contains("active")) {
      catalogit.classList.add("active");
      catalogil.classList.remove("active");
      catalogp.classList.remove("active");
    }
  })
  catalogil.addEventListener('click', function() {
    if (!catalogil.classList.contains("active")) {
      catalogil.classList.add("active");
      catalogit.classList.remove("active");
      catalogp.classList.add("active");
    }
  })
}
// end catalog__image

// start range slider
const rangeslider = document.getElementById('filterPrice');
const filterInputs = document.querySelectorAll('.filter__input');
const frb = document.querySelector('.filter__range_button');
const minValue = document.querySelector('.filter__range_min');
const maxValue = document.querySelector('.filter__range_max');
const frprice = document.querySelector('.filter__range_price');
const frcount = document.querySelector('.filter__range_count');
const frclear = document.querySelector('.filter__range_clear');
const frbuttons = document.querySelector('.filter__range_buttons');
const fcb = document.querySelector('.filter__check_button');
const fcbs = document.querySelector('.filter__checked');
const frbs = document.querySelector('.filter__ranges');
const fcbuttons = document.querySelector('.filter__check_buttons');
const fcclear = document.querySelector('.filter__check_clear');
const uncheck = [...document.querySelectorAll('.filter__check_hidden')];
const fbutton = document.querySelector('.filter__button');
const fpopen = document.querySelector('.filter__popup_open');
const fpclose = document.querySelector('.filter__popup_close');
const cfclear = document.querySelector('.catalog__filter_clear');

if(!rangeslider){} else {
  const rangeMin = parseInt(rangeslider.dataset.min);
  const rangeMax = parseInt(rangeslider.dataset.max);
  const rangestep = parseInt(rangeslider.dataset.step);
  noUiSlider.create(rangeslider, {
      start: [rangeMin, rangeMax],
      connect: true,
      step: rangestep,
      range: {
          'min': Math.round(rangeMin),
          'max': Math.round(rangeMax)
      },
      format: {
        to: value => Math.round(value),
        from: value => Math.round(value),
      }
  });

  rangeslider.noUiSlider.on('update', (values, handle) => {
    filterInputs[handle].value = values[handle];
    if (handle) {
      maxValue.innerText = values[handle];
      const minValueNumber = Number(minValue.innerText);
      const maxValueNumber = Number(maxValue.innerText);
      if (maxValueNumber < rangeMax) {
        frprice.classList.add("hidden");
        frcount.classList.remove("hidden");
        frclear.classList.add("active");
        frbuttons.classList.add("active");
        fbutton.classList.add("active");
        cfclear.classList.add("active");
      } else if (maxValueNumber == rangeMax && minValueNumber == rangeMin) {
        frprice.classList.remove("hidden");
        frcount.classList.add("hidden");
        frclear.classList.remove("active");
        frbuttons.classList.remove("active");
        fbutton.classList.remove("active");
        cfclear.classList.remove("active");
      }
    } else {
      minValue.innerText = values[handle];
      const minValueNumber = Number(minValue.innerText);
      const maxValueNumber = Number(maxValue.innerText);
      if (minValueNumber > rangeMin) {
        frprice.classList.add("hidden");
        frcount.classList.remove("hidden");
        frclear.classList.add("active");
        frbuttons.classList.add("active");
        fbutton.classList.add("active");
        fpopen.classList.add("active");
        cfclear.classList.add("active");
      } else if (minValueNumber == rangeMin && maxValueNumber == rangeMax) {
        frprice.classList.remove("hidden");
        frcount.classList.add("hidden");
        frclear.classList.remove("active");
        frbuttons.classList.remove("active");
        fbutton.classList.remove("active");
        fpopen.classList.remove("active");
        cfclear.classList.remove("active");
      }
    }
  });

  filterInputs.forEach((input, indexInput) => { 
    input.addEventListener('change', () => {
      rangeslider.noUiSlider.setHandle(indexInput, input.value);
    })
  });

  frclear.addEventListener('click', function() {
    rangeslider.noUiSlider.reset();
    frb.classList.remove("active");
    frbs.classList.remove("active");
    fcb.classList.remove("active");
    fcbs.classList.remove("active");
  })
}
// end range slider

// start filter buttons
if(!frb){} else {
  frb.addEventListener('click', function() {
    if (!frb.classList.contains("active")) {
      frb.classList.add("active");
      frbs.classList.add("active");
      fcb.classList.remove("active");
      fcbs.classList.remove("active");
    } else {
      frb.classList.remove("active");
      frbs.classList.remove("active");
      fcb.classList.remove("active");
      fcbs.classList.remove("active");
    }
  })
  fcb.addEventListener('click', function() {
    if (!fcb.classList.contains("active")) {
      fcb.classList.add("active");
      fcbs.classList.add("active");
      frb.classList.remove("active");
      frbs.classList.remove("active");
    } else {
      frb.classList.remove("active");
      frbs.classList.remove("active");
      fcb.classList.remove("active");
      fcbs.classList.remove("active");
    }
  })
  const onChecked = () => {
    if(document.querySelector('.filter__check_label.checked')) {
      fbutton.classList.add("checked");
      fpopen.classList.add("checked");
      cfclear.classList.add("checked");
      fcbuttons.classList.add("active");
    } else {
      fbutton.classList.remove("checked");
      fpopen.classList.remove("checked");
      cfclear.classList.remove("checked");
      fcbuttons.classList.remove("active");
    }
  }
  uncheck.forEach(input => input.addEventListener('input', function(event) {
    if (event.target.checked) {
      event.target.closest('.filter__check_label').classList.add('checked');
    } else {
      event.target.closest('.filter__check_label').classList.remove('checked');
    }
    onChecked()
  }))
  fcclear.addEventListener('click', function() {
    for(var i = 0;i < uncheck.length; i++) {uncheck[i].checked = false;};
    frb.classList.remove("active");
    frbs.classList.remove("active");
    fcb.classList.remove("active");
    fcbs.classList.remove("active");
    fcbuttons.classList.remove("active");
    fbutton.classList.remove("checked");
    fpopen.classList.remove("checked");
    cfclear.classList.remove("checked");
  })
  cfclear.addEventListener('click', function() {
    rangeslider.noUiSlider.reset();
    for(var i = 0;i < uncheck.length; i++) {uncheck[i].checked = false;};
    frb.classList.remove("active");
    frbs.classList.remove("active");
    fcb.classList.remove("active");
    fcbs.classList.remove("active");
    fcbuttons.classList.remove("active");
    fbutton.classList.remove("checked");
    fbutton.classList.remove("active");
    fpopen.classList.remove("checked");
    fpopen.classList.remove("active");
    cfclear.classList.remove("active");
    cfclear.classList.remove("checked");
  })
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.filter__ranges') && !target.closest('.filter__range_buttons') && !target.closest('.filter__checked') && !target.closest('.filter__check_buttons')) {
      frb.classList.remove("active");
      frbs.classList.remove("active");
      fcb.classList.remove("active");
      fcbs.classList.remove("active");
    }
  })
  fpopen.addEventListener('click', function() {
    cfpopup.classList.add("active");
    overlaypopup.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  })
  fpclose.addEventListener('click', function() {
    cfpopup.classList.remove("active");
    overlaypopup.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
  })
}
// end filter buttons

// start select
const SELECT = '[data-select]'
const SELECT_LIST = '[data-select-list]'
const SELECT_ARROW = '[data-select-arrow]'
const SELECT_ACTION = '[data-select-action]'
const SELECT_TITLE = '[data-select-title]'
const SELECT_INPUT = '[data-select-input]'
const SELECT_ITEM = 'selectItem'
const OPEN_SELECT = 'selectOpen'

class Select {
  static attach() {document.querySelectorAll(SELECT).forEach(select => new Select().init(select))}
  init(select) {if (this.findSelect(select)) {this.applyListener()}}
  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)
      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList();
        } else {
          this.openSelectList()
        }
      }
      if (this.isCallSelectItemElement(element)) {
        this.addSelectedValue(element)
      }
      if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
        this.closeSelectList()
      }
    })
  }
  isCallSelectElement(element, target) {return element && OPEN_SELECT in element.dataset}
  isCallSelectItemElement(element, target) {return element && SELECT_ITEM in element.dataset}
  findSelect(select) {
    if (select) {
      this.select = select
      this.selectList = this.select.querySelector(SELECT_LIST)
      this.selectArrow = this.select.querySelector(SELECT_ARROW)
      this.selectTitle = this.select.querySelector(SELECT_TITLE)
      this.selectInput = this.select.querySelector(SELECT_INPUT)
      return true
    }
    return false
  }
  isOpened() {return this.selectList.classList.contains('filter__select_list_opened')}
  openSelectList() {
    this.selectList.style.maxHeight = this.selectList.scrollHeight + "px";
    this.selectList.classList.add('filter__select_list_opened');
    this.selectArrow.classList.add('filter__select_arrow_rotate');
  }
  closeSelectList() {
    this.selectList.style.maxHeight = null;
    this.selectList.classList.remove('filter__select_list_opened');
    this.selectArrow.classList.remove('filter__select_arrow_rotate');
  }
  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML;
    this.selectInput.value = element.innerHTML;
    this.selectInput.setAttribute('value', this.selectInput.value);
  }
  selectOverlayIsClickedElement(element, target) {return element && 'select' in element.dataset}
}

Select.attach()
// end select

// start product accordion
const pdescrbutton = document.querySelector(".product__descr_button");
const pcharacterbutton = document.querySelector(".product__character_button");
const pdeliverybutton = document.querySelector(".product__delivery_button");
const previewsbutton = document.querySelector('.product__reviews_button');
const pbutton = document.querySelectorAll(".product__blocks .product__button");

const pdescr = document.querySelector('.product__descr');
const pcharacter = document.querySelector('.product__character');
const pdelivery = document.querySelector('.product__delivery');
const previews = document.querySelector('.product__reviews');
const pinfo = document.querySelectorAll(".product__blocks .product__information");
const pinformation = document.querySelector(".product__information");
const pinformations = document.querySelector(".product__informations_blocks");

const pibutton = document.querySelector('.product__information_button');
const preview = document.querySelector('.product__reviews_block');
const previewform = document.querySelector('.product__reviews_forms');

if(pinformation){
  pdescrbutton.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pinformations.classList.remove("hidden");
      pbutton.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.style.maxHeight = null);
      pdescr.classList.add("active");
      pdescr.style.maxHeight = (pdescr.scrollHeight * 1) + "px";
      this.classList.add("active");
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    }
  })
  pcharacterbutton.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pinformations.classList.remove("hidden");
      pbutton.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.style.maxHeight = null);
      pcharacter.classList.add("active");
      pcharacter.style.maxHeight = (pcharacter.scrollHeight * 1) + "px";
      this.classList.add("active");
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    }
  })
  pdeliverybutton.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pinformations.classList.remove("hidden");
      pbutton.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.style.maxHeight = null);
      pdelivery.classList.add("active");
      pdelivery.style.maxHeight = (pdelivery.scrollHeight * 1) + "px";
      this.classList.add("active");
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    }
  })
  previewsbutton.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pinformations.classList.add("hidden");
      pbutton.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.classList.remove('active'));
      pinfo.forEach(n => n.style.maxHeight = null);
      previews.classList.add("active");
      previews.style.maxHeight = (previews.scrollHeight * 1) + "px";
      this.classList.add("active");
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    } else {
      if (!preview.classList.contains("active")) {
        preview.classList.add("active");
        preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
        previewform.classList.remove("active");
        previewform.style.maxHeight = null;
      }
    }
  })
  document.addEventListener("DOMContentLoaded", function() {
    if (preview.classList.contains("active")) {preview.style.maxHeight = (preview.scrollHeight * 1) + "px";}
    if (pdescr.classList.contains("active")) {pdescr.style.maxHeight = (pdescr.scrollHeight * 1) + "px";}
    if (pcharacter.classList.contains("active")) {pcharacter.style.maxHeight = (pcharacter.scrollHeight * 1) + "px";}
    if (pdelivery.classList.contains("active")) {pdelivery.style.maxHeight = (pdelivery.scrollHeight * 1) + "px";}
    if (previews.classList.contains("active")) {previews.style.maxHeight = (previews.scrollHeight * 1) + "px";}
  });
  window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
      if (preview.classList.contains("active")) {preview.style.maxHeight = (preview.scrollHeight * 1) + "px";}
      if (pdescr.classList.contains("active")) {pdescr.style.maxHeight = (pdescr.scrollHeight * 1) + "px";}
      if (pcharacter.classList.contains("active")) {pcharacter.style.maxHeight = (pcharacter.scrollHeight * 1) + "px";}
      if (pdelivery.classList.contains("active")) {pdelivery.style.maxHeight = (pdelivery.scrollHeight * 1) + "px";}
      if (previews.classList.contains("active")) {previews.style.maxHeight = (previews.scrollHeight * 1) + "px";}
    }
  };
  pibutton.addEventListener('click', function() {
    if (preview.classList.contains("active")) {
      preview.classList.remove("active");
      preview.style.maxHeight = null;
      previewform.classList.add("active");
      previewform.style.maxHeight = (preview.scrollHeight * 1) + "px";
    } else {
      previewform.classList.remove("active");
      previewform.style.maxHeight = null;
      preview.classList.add("active");
      preview.style.maxHeight = (preview.scrollHeight * 1) + "px";
    }
  })
}
// end product accordion

// start blogs popup
const articlebuttonpopup = document.querySelector(".article__button_popup");
const articlepopupclose = document.querySelector(".article__popup_close");
const articlept = document.querySelector(".article__popup_top");

if(articlepopup) {
  articlebuttonpopup.addEventListener('click', function() {
    if (!articlepopup.classList.contains("active")) {
      articlepopup.classList.add("active");
      overlaypopup.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
  })
  articlepopupclose.addEventListener('click', function() {
    if (articlepopup.classList.contains("active")) {
      articlepopup.classList.remove("active");
      overlaypopup.classList.remove("active");
      document.body.style.overflow = null;
      document.body.style.height = null;
    }
  })
}

const articleball = document.querySelector(".article__right_button_all");
const articlebfaq = document.querySelector(".article__right_button_faq");
const articlebreview = document.querySelector(".article__right_button_review");
const articlebeducation = document.querySelector('.article__right_button_education');
const articleb = document.querySelectorAll(".blogs__block .article__right_button");

if(articlepopup) {
  articleball.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      articleb.forEach(n => n.classList.remove('active'));
      this.classList.add("active");
      articlebuttonpopup.classList.remove("active");
      articlept.classList.remove("active");
      if (articlepopup.classList.contains("active")) {
        articlepopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        document.body.style.overflow = null;
        document.body.style.height = null;
      }
    }
  })
  articlebfaq.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      articleb.forEach(n => n.classList.remove('active'));
      this.classList.add("active");
      articlebuttonpopup.classList.add("active");
      articlept.classList.add("active");
      if (articlepopup.classList.contains("active")) {
        articlepopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        document.body.style.overflow = null;
        document.body.style.height = null;
      }
    }
  })
  articlebreview.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      articleb.forEach(n => n.classList.remove('active'));
      this.classList.add("active");
      articlebuttonpopup.classList.add("active");
      articlept.classList.add("active");
      if (articlepopup.classList.contains("active")) {
        articlepopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        document.body.style.overflow = null;
        document.body.style.height = null;
      }
    }
  })
  articlebeducation.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      articleb.forEach(n => n.classList.remove('active'));
      this.classList.add("active");
      articlebuttonpopup.classList.add("active");
      articlept.classList.add("active");
      if (articlepopup.classList.contains("active")) {
        articlepopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        document.body.style.overflow = null;
        document.body.style.height = null;
      }
    }
  })
}
// end personal popup

// start personal popup
const personalbuttonpopup = document.querySelector(".personal__button_popup");
const personalpopupclose = document.querySelector(".personal__popup_close");
if(personalpopup) {
  personalbuttonpopup.addEventListener('click', function() {
    if (!personalpopup.classList.contains("active")) {
      personalpopup.classList.add("active");
      overlaypopup.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
  })
  personalpopupclose.addEventListener('click', function() {
    if (personalpopup.classList.contains("active")) {
      personalpopup.classList.remove("active");
      overlaypopup.classList.remove("active");
      document.body.style.overflow = null;
      document.body.style.height = null;
    }
  })
}
// end personal popup

// start personal buttons
const pbuttondata = document.querySelector(".personal__button_data");
const pbuttonhistory = document.querySelector(".personal__button_history");
const pbuttonchange = document.querySelector(".personal__button_change");
const pbuttonexit = document.querySelector('.personal__button_exit');
const pbuttons = document.querySelectorAll(".personal__block .personal__button");

const pdata = document.querySelector('.personal__data');
const phistory = document.querySelector('.personal__history');
const pchange = document.querySelector('.personal__change');
const pblocks = document.querySelectorAll(".personal__block .personal__blocks");

if(pbuttondata){
  pbuttondata.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pbuttons.forEach(n => n.classList.remove('active'));
      pblocks.forEach(n => n.classList.remove('active'));
      pdata.classList.add("active");
      this.classList.add("active");
      if (personalpopup.classList.contains("active")) {
        personalbuttonpopup.innerHTML = this.innerHTML;
        personalpopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        document.body.style.overflow = null;
        document.body.style.height = null;
      }
    }
  })
  pbuttonhistory.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pbuttons.forEach(n => n.classList.remove('active'));
      pblocks.forEach(n => n.classList.remove('active'));
      phistory.classList.add("active");
      this.classList.add("active");
      if (personalpopup.classList.contains("active")) {
        personalbuttonpopup.innerHTML = this.innerHTML;
        personalpopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        document.body.style.overflow = null;
        document.body.style.height = null;
      }
    }
  })
  pbuttonchange.addEventListener('click', function() {
    if (!this.classList.contains("active")) {
      pbuttons.forEach(n => n.classList.remove('active'));
      pblocks.forEach(n => n.classList.remove('active'));
      pchange.classList.add("active");
      this.classList.add("active");
      if (personalpopup.classList.contains("active")) {
        personalbuttonpopup.innerHTML = this.innerHTML;
        personalpopup.classList.remove("active");
        overlaypopup.classList.remove("active");
        document.body.style.overflow = null;
        document.body.style.height = null;
      }
    }
  })
}
// end personal buttons

// start personal accordion
if(phistory) {
  var phistoryb = document.getElementsByClassName("personal__history_button");
  for (i = 0; i < phistoryb.length; i++) {
    phistoryb[i].onclick = function(e) {
      var phistoryAccordion = this.nextElementSibling;
      var coursephistoryAccordion = document.getElementsByClassName("personal__history_info");
      var coursephistoryAccordionActive = document.getElementsByClassName("personal__history_button active");

      if (phistoryAccordion.style.maxHeight) {
        phistoryAccordion.style.maxHeight = null;
        this.classList.remove("active");
        phistoryAccordion.classList.remove("active");
      } else {
        for (var q = 0; q < coursephistoryAccordionActive.length; q++) {
          coursephistoryAccordionActive[q].classList.remove("active");
          coursephistoryAccordion[q].classList.remove("active");
        }
        for (var p = 0; p < coursephistoryAccordion.length; p++) {
          this.classList.remove("active");
          coursephistoryAccordion[p].classList.remove("active");
          coursephistoryAccordion[p].style.maxHeight = null;
        }
        phistoryAccordion.style.maxHeight = (phistoryAccordion.scrollHeight * 2) + "px";
        phistoryAccordion.classList.add("active");
        this.classList.add("active");
      }
    };
  }
}
// end personal accordion

// start product btn
const productbtn = document.querySelector('.product__btn');
if(productbtn) {
  var productb = document.getElementsByClassName("product__btn");
  for (i = 0; i < productb.length; i++) {
    productb[i].onclick = function(e) {
      if (this.classList.contains("added")) {
        this.classList.remove("added");
        this.children[0].children[1].innerText = "В корзину";
      } else {
        this.classList.add("added");
        this.children[0].children[1].innerText = "Добавлен";
      }
    };
  }
}
// end product btn

// start products btn
const productsbtn = document.querySelector('.products__cart');
if(productsbtn) {
  var productsb = document.getElementsByClassName("products__cart");
  for (i = 0; i < productsb.length; i++) {
    productsb[i].onclick = function(e) {
      if (this.classList.contains("added")) {
        this.classList.remove("added");
        this.children[1].innerText = "В корзину";
      } else {
        this.classList.add("added");
        this.children[1].innerText = "Добавлен";
      }
    };
  }
}
// end products btn

// start yandex map
const maps = document.getElementById("map");
if(maps) {
  var myMap,ymaps;
  function init() {
    myMap = document.getElementById("map");
    if (!myMap) return;
    myMap = new ymaps.Map(myMap, {
      center: [55.753215, 37.622504],
      zoom: 9, 
      controls: []
      },{
      zoomControlPosition: { right: 0, top: 0 },
      zoomControlSize: 'auto'
    });

    if(oldWidth <= 1200){
      myMap.behaviors.disable('drag');
    }

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);

    function zoomIn() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom + 1);
    }
  
    function zoomOut() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom - 1);
    }

    var data = {
      'points': [{
        "infoPoint": '<div id="mapmoscow" class="map__point{% if properties.active %} map__active{% endif %}">\
        <span class="map__icon"><svg width="65" height="102" viewBox="0 0 65 102" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.8393 32.5C63.8393 36.7317 61.8977 43.07 58.8514 50.3394C55.8262 57.5585 51.7844 65.5313 47.7309 72.9656C43.6794 80.3962 39.6264 87.27 36.5855 92.2873C35.0653 94.7955 33.7988 96.8386 32.9127 98.254C32.7642 98.4911 32.6265 98.7106 32.5 98.9116C32.3735 98.7106 32.2358 98.4911 32.0873 98.254C31.2012 96.8386 29.9347 94.7955 28.4145 92.2873C25.3736 87.27 21.3206 80.3962 17.2691 72.9656C13.2156 65.5313 9.17384 57.5585 6.14864 50.3394C3.10235 43.07 1.16071 36.7317 1.16071 32.5C1.16071 15.1918 15.1918 1.16071 32.5 1.16071C49.8082 1.16071 63.8393 15.1918 63.8393 32.5Z" fill="currentColor" stroke="currentColor" stroke-width="2.32143"/><path d="M26.3302 47.4792C26.3305 47.4891 26.3306 47.4991 26.3307 47.5092L26.3302 47.4792ZM30.2476 14.7983L30.2431 14.7969C30.2091 14.7866 30.1524 14.7696 30.0862 14.7497C29.9763 14.7168 29.8404 14.676 29.74 14.6452C26.52 13.6815 22.9263 14.7593 20.7139 17.357C20.2321 17.9253 19.9585 18.3358 19.4155 19.3525C19.1712 19.8132 18.739 21.1092 18.5429 22.0483C17.9863 24.7263 18.3191 27.3431 19.7655 30.8896C20.2532 32.0837 20.5432 32.7112 22.1733 36.0808C24.1466 40.157 25.1089 42.5835 25.8772 45.4543C25.9625 45.7739 26.0712 46.2196 26.1579 46.5925C26.1622 46.6114 26.1666 46.6301 26.1709 46.6488C26.5542 46.401 27.0237 46.1059 27.2995 45.9399C29.0188 44.9064 30.9243 43.98 33.0389 43.1433C34.4038 42.6026 35.3362 42.2647 38.1868 41.2657C41.4182 40.132 43.0602 39.4367 44.5718 38.5818C47.2221 37.0836 48.8455 35.3376 50.0871 32.67C50.1912 32.4464 50.2677 32.2334 50.4748 31.5125C51.1738 29.076 50.7573 26.415 49.3329 24.2829C48.6103 23.2033 47.5973 22.253 46.5252 21.6439L46.5225 21.6424C45.7744 21.214 45.3932 21.0449 45.1093 20.9631C44.9713 20.9254 44.702 20.8471 44.511 20.7911C42.2657 20.1434 39.7918 20.4832 37.6902 21.7475C37.6691 21.7607 37.6484 21.7735 37.6283 21.786C37.5685 21.8232 37.5138 21.8573 37.4662 21.8875C37.434 21.9079 37.4104 21.9232 37.3947 21.9337L37.393 21.9347L37.3779 21.946C37.3096 21.9964 37.1963 22.0708 37.0456 22.1189C36.8869 22.1696 36.6387 22.2046 36.3707 22.0934C36.1027 21.9821 35.9522 21.7816 35.8761 21.6334C35.8038 21.4927 35.7764 21.3599 35.764 21.276L35.7628 21.2678L35.7617 21.2595C35.7255 20.9803 35.4987 20.2047 35.2632 19.6331L35.2622 19.6306C34.5282 17.8334 33.1949 16.3239 31.5458 15.4087C31.372 15.3133 31.1276 15.1786 31.0032 15.1073C30.8264 15.0102 30.4858 14.8681 30.2522 14.7997L30.2476 14.7983Z" fill="white"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">“Satisfaction”<br> ул. Орджоникидзе, д. 1</div>\
          </div>\
        </div>',
        "latitude": 55.710839,
        "longitude": 37.605068,
        },
      ],
    };

    var mapCoordinates = new ymaps.GeoObjectCollection();

    var results = [];
    data.points.forEach(function(item, index){
      results.push(createPlacemark(item));
    });
    myMap.geoObjects.add(mapCoordinates);
    myMap.behaviors.disable('scrollZoom');

    function createPlacemark(item) {
      var options = Object();
      var squareLayout = ymaps.templateLayoutFactory.createClass(item.infoPoint);
      var place = new ymaps.Placemark([item.latitude, item.longitude],{hintContent: false}, {
        iconLayout: squareLayout,
        iconShape: {   
          type: 'Rectangle',
          coordinates: [
            [-55, -50], [30, 50]
          ]
        }
      });
      mapCoordinates.add(place);
    }
    var thatCoordinates;
    mapCoordinates.events.add('click', function (e) {
      var that = e.get('target').properties.get('active');
      mapCoordinates.each(function(item, index){
        item.properties.set('active', false);
        if(e.get('target') == item && !that){
          e.get('target').properties.set('active', true);
          thatCoordinates = e.get('coords');
        }
      });

      var mapmoscow = document.getElementById('mapmoscow');
      if (mapmoscow.classList.contains("map__active")) {
        myMap.setCenter([55.710839,37.605068],17);
      } else {
        myMap.setCenter([55.753215,37.622504],9);
      };
    });
  }
  if (ymaps != undefined) ymaps.ready(init);
}
// end yandex map
// end map