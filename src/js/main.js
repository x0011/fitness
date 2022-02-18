$(document).ready(function(){
  $('.carousel__inner').slick({
      nextArrow: '<div class="carousel__prev-arrow"><img src="../icons/next-arrow.png"></div>',
      prevArrow: '<div class="carousel__next-arrow"><img src="../icons/prev-arrow.png"></div>',
      appendDots: '.carousel__dots',
      //dots: true,
      responsive: [
          {
            breakpoint: 850,
            settings: {
              dots: true,
              arrows: false,
              centerPadding: '40px',
            }
          },
        ]
  });

});