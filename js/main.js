// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    let oldWidth = window.innerWidth;
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start header scroll active
const header = document.querySelector('.header');
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

const menu_c = document.querySelector('.header__consultation');
const burger_c = document.querySelector('.button__project');

// кнопка header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    overlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  } else {
    overlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
// end header__burger

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
    loop: false,
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
        slidesPerView: 1,
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
    loop: true,
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
var swiper = new Swiper('#js-carousel', {  
  slidesPerView: 'auto',
  spaceBetween: 10,
  speed: 3000,
  loop: true,
  allowTouchMove: false, // можно ещё отключить свайп
  autoplay: {
    delay: 0,
    disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия
  },
  breakpoints: {
    1600: {
      spaceBetween: 5,
    },
  },
});
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
    console.log(this.parentElement.offsetTop)
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
// end btn

// start catalog__image
var catalogit = document.querySelector('.catalog__image_tiles');
var catalogil = document.querySelector('.catalog__image_list');
var catalogp = document.querySelector('.catalog__products');

if(!catalogp){} else {
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
var frb = document.querySelector('.filter__range_button');
var minValue = document.querySelector('.filter__range_min');
var maxValue = document.querySelector('.filter__range_max');
var frprice = document.querySelector('.filter__range_price');
var frcount = document.querySelector('.filter__range_count');
var frclear = document.querySelector('.filter__range_clear');
var frbuttons = document.querySelector('.filter__range_buttons');
var fcb = document.querySelector('.filter__check_button');
var fcbs = document.querySelector('.filter__checked');
var frbs = document.querySelector('.filter__ranges');
var fcbuttons = document.querySelector('.filter__check_buttons');
var fcclear = document.querySelector('.filter__check_clear');
const uncheck = [...document.querySelectorAll('.filter__check_hidden')];
var fbutton = document.querySelector('.filter__button');
var cfpopup = document.querySelector('.catalog__filter_popup');
var fpopen = document.querySelector('.filter__popup_open');
var fpclose = document.querySelector('.filter__popup_close');
var cfclear = document.querySelector('.catalog__filter_clear');

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
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  })

  overlaypopup.addEventListener('click', function() {
    cfpopup.classList.remove("active");
    overlaypopup.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
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

// start accordion info
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
// end accordion info