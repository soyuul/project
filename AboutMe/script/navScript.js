/** @format */

// nav fixed
const navbar = document.querySelector("#nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// nav hover
const navs = document.querySelectorAll(".nav-btn");

navs.forEach(function(btn){
  btn.addEventListener("mouseover", function(e){
    let navBtn =  e.currentTarget;
    navBtn.classList.add("show-sub-text");
  })
  btn.addEventListener("mouseout", function(e){
    let navBtn =  e.currentTarget;
    navBtn.classList.remove("show-sub-text");
  })
})



// slide script

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
 },
 autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
});
