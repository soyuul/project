// main slide script
const swiper = new Swiper('.mySwiper', {

  pagination: {
    el:'.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + (index + 1) + "</div>";
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
});


// time slide script
const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation:{
      nextEl : ".navigation-next",
      prevEl : ".navigation-prev",
  },
  autoplay:{
    delay:2500,
    disableOnInteraction:true,
  },
});

// big slide script
const swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: -70,
  pagination: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  autoplay:{
    delay:2500,
    disableOnInteraction:true,
  },
})