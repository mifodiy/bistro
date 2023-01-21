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

});

