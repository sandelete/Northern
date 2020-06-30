
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 600,

    autoplay: {
      delay: 4000,
      
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })