$(document).ready(function () {
  $('.carousel__inner').slick({
    /* dots: true, */
    speed: 1200,
    /*     adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000, */
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-left.svg"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
});