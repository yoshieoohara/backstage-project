// top-message slick
jQuery(function ($) {
  $(".js-top-message-slick").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 2,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  });
});

// top-works-slick
// jQuery(function ($) {
//   $(".js-works-slick-top").slick({
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 30000,
//     cssEase: "linear",
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     slidesToScroll: 3,
//     arrows: false,
//     infinite: true,
//     variableWidth: true,
//     rtl: true,
//   });
// });

// jQuery(function ($) {
//   $(".js-works-slick-bottom").slick({
//     autoplay: true,
//     autoplaySpeed: 0,
//     speed: 30000,
//     cssEase: "linear",
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     slidesToScroll: 3,
//     arrows: false,
//     infinite: true,
//     variableWidth: true,
//   });
// });

jQuery(function ($) {
  $(".js-works-slick").slick({
    autoplay: false,
    centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    dots: true,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    prevArrow: $(".js-works-slick-arrow-prev"),
    nextArrow: $(".js-works-slick-arrow-next"),
  });
})

$('.js-works-slick').on('afterChange', function(event, slick, currentSlide) {
  $('.works__slick-img').removeClass('slick-current'); 
  $('.works__slick-img').eq(currentSlide).addClass('slick-current'); 
});

// service-slick
jQuery(function ($) {
  $(".js-service-slick").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    fade: true,
    adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    dots: false,
    arrows: false,
  });
});

// artist-slick
jQuery(function ($) {
  $(".js-artist-slick").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    fade: true,
    adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    dots: true,
    arrows: false,
  });
});
