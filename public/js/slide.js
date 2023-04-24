let swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

let swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true
  },
  navigation: {
    nextEl: '.swpBtnnext2',
    prevEl: '.swpBtnprev2'
  }
});

let swiper3 = new Swiper('.mySwiper3', {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true
  },
  navigation: {
    nextEl: '.swpBtnnext3',
    prevEl: '.swpBtnprev3'
  }
});

