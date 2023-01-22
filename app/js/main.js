$(function () {

  var header = $(".header");
  var scrollChange = 50;

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.addClass('sticky');
    } else {
      header.removeClass("sticky");
    }
  });

  const swiper = new Swiper('.hero__swiper', {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.hero-button-next',
      prevEl: '.hero-button-prev',
    },

  });

  const swipers = document.querySelectorAll(".product-tabs__slider");
  var mySwiper = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();

    if (swipers.length > 0) {
      swipers.forEach(value => {
        if (screenWidth > 768 && mySwiper == undefined) {
          mySwiper = new Swiper(value, {

            slidesPerGroup: 1,
            breakpoints: {

              320: {
                slidesPerView: 3,
                spaceBetween: 38
              },

              991: {
                slidesPerView: 4,
                spaceBetween: 30
              },

              1230: {
                slidesPerView: 5,
                spaceBetween: 38
              }
            },
            navigation: {
              nextEl: value.nextElementSibling.nextElementSibling,
              prevEl: value.nextElementSibling,
            },
          })
        } else if (screenWidth < 767 && mySwiper != undefined) {
          mySwiper.destroy();
          mySwiper = undefined;
          jQuery('.swiper-wrapper').removeAttr('style');
          jQuery('.swiper-slide').removeAttr('style');

        }
        mySwiper = undefined;
      });
    }


  }

  initSwiper();

  $(window).on('resize', function () {
    initSwiper();
  });

  const bodyLock = document.querySelector('body');
  const viewMoreBtn = document.querySelector('.view-more');
  const categoriesSection = document.querySelector('.categories');
  const productTabsSlider = document.querySelectorAll('.product-tabs__slider');

  if (categoriesSection != null) {
    const hiddenProductCard = categoriesSection.querySelectorAll('.hidden');

    if (viewMoreBtn != null) {
      viewMoreBtn.addEventListener('click', () => {
        viewMoreBtn.classList.add('hidden');

        if (hiddenProductCard.length > 0) {
          hiddenProductCard.forEach(el => {
            el.classList.remove('hidden');
            el.classList.add('visible');
          })
        }
      })
    }

  }

  const breakpoint = window.matchMedia( '(max-width:500)' );
  if (bodyLock.offsetWidth < 767){
    productTabsSlider.forEach(el => {
      let swiperSlide = el.querySelectorAll('.swiper-slide');
      for (let i = 4; i < swiperSlide.length; i++) {
        swiperSlide[i].classList.add('hidden');
      }
    })
  }else {
    productTabsSlider.forEach(el => {
      let swiperSlide = el.querySelectorAll('.swiper-slide');
      for (let i = 4; i < swiperSlide.length; i++) {
        swiperSlide[i].classList.remove('hidden');
      }
    })
  }

  const respSlide = document.querySelector('.responsibility__slider');
  if (respSlide != null){
    const respSlider = new Swiper(respSlide, {
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
  
      pagination: {
        el: '.swiper-pagination',
      },
  
      navigation: {
       nextEl: respSlide.nextElementSibling.nextElementSibling,
       prevEl: respSlide.nextElementSibling,
      },
  
    });
  }

  const burger = document.querySelector('.burger-btn');
  const closeMenu = document.querySelector('.side-menu__btn');
  const mobileMenu = document.querySelector('.side-menu');

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('side-menu--active');
    bodyLock.classList.add('lock');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('side-menu--active');
    bodyLock.classList.remove('lock');
  });

  const aboutUsBtn = document.querySelector('.menu__link--aboutus');
  const headerInner = document.querySelector('.header__inner');

  aboutUsBtn.addEventListener('click', () => {
    headerInner.classList.toggle('opened');
  })

  const aboutUsMobileBtn = document.querySelector('.side-menu__link--aboutus');
  const backBtn = document.querySelector('.aboutus-mobile__btn');

  aboutUsMobileBtn.addEventListener('click', () => {
    mobileMenu.classList.add('opened');
  });

  backBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('opened');
  });

  const heroImg = document.querySelectorAll('.hero__img');
  const responsibility = document.querySelector('.responsibility');
  const career = document.querySelector('.career');
  const menuHeader = document.querySelector('.menu-header');
  let heroImgWidth;

  if (heroImg != null) {

    heroImg.forEach(el => {
      heroImgWidth = el.offsetWidth;

      if (heroImgWidth > 1229){
        el.style.clipPath = `path("m 10 80 c 0 -41.4213 33.5786 -75 75 -75 h ${heroImgWidth-170} c 41.42 0 75 33.5787 75 75 v 588 c 0 52.467 -42.53 95 -95 95 h -${heroImgWidth-210} c -41.9727 0 -78.1933 24.628 -95 60.221 v -743.221 Z")`;   
      } else {
        el.style.clipPath = `path("m 10 40 c 0 -19.33 15.67 -35 35 -35 h ${heroImgWidth-90} c 19.33 0 35 15.67 35 35 v 627 c 0 30.376 -24.624 55 -55 55 h -${heroImgWidth-130} c -23.1577 0 -43.4868 12.11 -55 30.343 v -712.343 Z")`; 
      }
    })
		 
	}

  if (responsibility != null) {
    let responsibilityWidth = responsibility.offsetWidth;
    let responsibilityHeight = responsibility.offsetHeight;

    if (responsibilityWidth > 1229){
      responsibility.style.clipPath = `path("m ${responsibilityWidth-10} 43.0799 c -17 35.5931 -55 60.2201 -95 60.2201 h -${responsibilityWidth-210} c -52.467 0 -95 42.533 -95 95 v ${responsibilityHeight-347} c 0 52.467 42.533 95 95 95 h ${responsibilityWidth-210} c 40 0 78 24.627 95 60.22 v -1123.88 Z")`;
    } else {
      responsibility.style.clipPath = `path("m ${responsibilityWidth-10} 34.6569 c -11.513 18.2329 -31.842 30.3431 -55 30.3431 h -${responsibilityWidth-130} c -30.3757 0 -55 24.6243 -55 55 v ${responsibilityHeight-205} c 0 30.38 24.6243 55 55 55 h ${responsibilityWidth-130} c 23.158 0 43.487 12.11 55 30.34 v -1096.68 Z")`;
    }

    
  }

  if (career != null) {
    let careerWidth = career.offsetWidth;

    if (careerWidth > 1229){
      career.style.clipPath = `path("m 10 762 v -595.221 c 16.8067 35.5931 53.0273 60.2206 95 60.2206 h ${careerWidth-210} c 52.47 0 95 42.533 95 95 v 440 h -${careerWidth+199} Z")`;
    } else {
      career.style.clipPath = `path("m 10 908.984 v -744.622 c 11.3608 17.812 31.2947 29.625 53.9875 29.62 h ${careerWidth-129} c 30.376 0 55 24.6244 55 55.0005 v 659.996 h -${careerWidth-100} Z")`;
    }
    
  }

  if (menuHeader != null) {
    let menuHeaderWidth = menuHeader.offsetWidth;
    
    if (menuHeaderWidth > 1229){
      menuHeader.style.clipPath = `path('m 10 80 c 0 -41.4213 33.5786 -75 75 -75 h ${menuHeaderWidth-170} c 41.42 0 75 33.5787 75 75 v 148 c 0 52.467 -42.53 95 -95 95 h -${menuHeaderWidth-210} c -92 -3 -88 19 -95 60.221 v -303.221 Z')`;
    } else {
      menuHeader.style.clipPath = `path('m 10 40 c 0 -19.33 15.67 -35 35 -35 h ${menuHeaderWidth-90} c 19.33 0 35 15.67 35 35 v 198 c 0 30.376 -24.624 55 -55 55 h -${menuHeaderWidth-130} c -23.1577 0 -43.4868 12.11 -55 30.343 v -353.221 Z')`;

    }

  }

  window.addEventListener("resize", function(){

    if (heroImg != null) {

      heroImg.forEach(el => {
        heroImgWidth = el.offsetWidth;
  
        if (heroImgWidth > 1229){
          el.style.clipPath = `path("m 10 80 c 0 -41.4213 33.5786 -75 75 -75 h ${heroImgWidth-170} c 41.42 0 75 33.5787 75 75 v 588 c 0 52.467 -42.53 95 -95 95 h -${heroImgWidth-210} c -41.9727 0 -78.1933 24.628 -95 60.221 v -743.221 Z")`;   
        } else {
          el.style.clipPath = `path("m 10 40 c 0 -19.33 15.67 -35 35 -35 h ${heroImgWidth-90} c 19.33 0 35 15.67 35 35 v 627 c 0 30.376 -24.624 55 -55 55 h -${heroImgWidth-130} c -23.1577 0 -43.4868 12.11 -55 30.343 v -712.343 Z")`; 
        }  
      })
       
    }

    if (responsibility != null) {
    responsibilityWidth = responsibility.offsetWidth;
    responsibilityHeight = responsibility.offsetHeight;

    if (responsibilityWidth > 1229){
      responsibility.style.clipPath = `path("m ${responsibilityWidth-10} 43.0799 c -17 35.5931 -55 60.2201 -95 60.2201 h -${responsibilityWidth-210} c -52.467 0 -95 42.533 -95 95 v ${responsibilityHeight-347} c 0 52.467 42.533 95 95 95 h ${responsibilityWidth-210} c 40 0 78 24.627 95 60.22 v -1123.88 Z")`;
    } else {
      responsibility.style.clipPath = `path("m ${responsibilityWidth-10} 34.6569 c -11.513 18.2329 -31.842 30.3431 -55 30.3431 h -${responsibilityWidth-130} c -30.3757 0 -55 24.6243 -55 55 v ${responsibilityHeight-205} c 0 30.38 24.6243 55 55 55 h ${responsibilityWidth-130} c 23.158 0 43.487 12.11 55 30.34 v -1096.68 Z")`;
    }
    }

    if (career != null) {
    careerWidth = career.offsetWidth;
    
    if (careerWidth > 1229){
      career.style.clipPath = `path("m 10 762 v -595.221 c 16.8067 35.5931 53.0273 60.2206 95 60.2206 h ${careerWidth-210} c 52.47 0 95 42.533 95 95 v 440 h -${careerWidth+199} Z")`;
    } else {
      career.style.clipPath = `path("m 10 908.984 v -744.622 c 11.3608 17.812 31.2947 29.625 53.9875 29.62 h ${careerWidth-129} c 30.376 0 55 24.6244 55 55.0005 v 659.996 h -${careerWidth-100} Z")`;
    }

    }

    if (menuHeader != null) {
      menuHeaderWidth = menuHeader.offsetWidth;
      
      if (menuHeaderWidth > 1229){
        menuHeader.style.clipPath = `path('m 10 80 c 0 -41.4213 33.5786 -75 75 -75 h ${menuHeaderWidth-170} c 41.42 0 75 33.5787 75 75 v 148 c 0 52.467 -42.53 95 -95 95 h -${menuHeaderWidth-210} c -92 -3 -88 19 -95 60.221 v -303.221 Z')`;
      } else {
        menuHeader.style.clipPath = `path('m 10 40 c 0 -19.33 15.67 -35 35 -35 h ${menuHeaderWidth-90} c 19.33 0 35 15.67 35 35 v 198 c 0 30.376 -24.624 55 -55 55 h -${menuHeaderWidth-130} c -23.1577 0 -43.4868 12.11 -55 30.343 v -353.221 Z')`;
  
      }
      }

  });

  $('.category-menu__btn').on('click', function(){
    $('.category-menu__list').toggleClass('active');
    $('.category-menu__btn').toggleClass('active');
  });
  $('.category-menu__item').on('click', function(){
    var itemValue = $(this).data('value');
    console.log(itemValue);
    $('.category-menu__btn span').text($(this).text()).parent().attr('data-value', itemValue);
    $('.category-menu__list').toggleClass('active');
  });


});

