document.querySelector('.menuHumber').addEventListener('click', function handleClick(event) {
  let headerInner = document.querySelector('.headerInner');
  if (headerInner.classList.contains('activeMn')) {
    headerInner.classList.remove('activeMn');
  } else {
    headerInner.classList.add('activeMn');
  }
});

let swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

let swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
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
  loop: true,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true
  },
  navigation: {
    nextEl: '.swpBtnnext3',
    prevEl: '.swpBtnprev3'
  }
});

let swiper4 = new Swiper('.mySwiper4', {
  slidesPerView: 2,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  loop: true,
  spaceBetween: 114,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 114,
    },
  },
});


function clickFooter(){
  document.getElementById("contactID").scrollIntoView({behavior: "smooth"});
}
document.getElementById("navContact").addEventListener("click", clickFooter);