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

});

