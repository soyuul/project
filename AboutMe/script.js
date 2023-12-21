//nav hover
const menuNav = document.querySelector('.menu-nav');
const mainBtns = document.querySelectorAll('#main-btn');
const subBtns = document.querySelectorAll('#sub-nev');

menuNav.addEventListener('mouseenter', function(e){
  const id = e.target.dataset.id;
  if(id){
    mainBtns.forEach(function(main){
      main.classList.remove("content");
      e.target.classList.add("product-nav");
    });
  };
});

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

 