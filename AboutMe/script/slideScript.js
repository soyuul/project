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


//   time slide script
// const prevBtn = document.querySelector(".navigation-prev");
// const nextBtn = document.querySelector(".navigation-next");
// const timeSlide = document.querySelector(".time_slide");

// function prev(){
//     if(curPos > 0){
//         nextBtn.removeAttribute("disabled");
//         position += IMAGE_WIDTH

//         timeSlide.style.transform = `translateX(${position}px)`
//         curPos -= 1;
//     }
//     if(curPos == 0){
//         prevBtn.setAttribute("disabled", "true")
//     }
// }

// function next(){
//     if(curPos < 3){
//         prevBtn.removeAttribute("disabled");
//         position -= IMAGE_WIDTH

//         timeSlide.style.transform = `translateX(${position}px)`
//         curPos += 1;
//     }
//     if(curPos == 3){
//         prevBtn.setAttribute("disabled", "true")
//     }
// }

// function init(){
//     prevBtn.setAttribute("disabled", "true")
//     prevBtn.addEventListener("click", prev)
//     nextBtn.addEventListener("click", next)
// }

// init();
