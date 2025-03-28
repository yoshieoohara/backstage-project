// loading
document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("loaded")) {
    sessionStorage.setItem("loaded", "true");

    setTimeout(() => {
      const loadingScreen = document.querySelector(".loading-screen");
      if (loadingScreen) {
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 500); 
      }
    }, 2000); 
  } else {
  
    const loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }
  }
});

// body-animation
$(function () {
  $("body").fadeIn(1000);
});

// header-color
jQuery(function ($) {
  $(window).on("scroll", function () {
    const fvHeight = $("#top-fv").outerHeight();
    const scroll = $(window).scrollTop();


    if (scroll > fvHeight - 100) {
      $(".top-header .logo-img").attr("src", "img/logo-black.png");
    } else {
      $(".top-header .logo-img").attr("src", "img/logo-white.png");
    }
  });
});

// top-line-animation
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var line = $(".top__line");

  if (scroll > 600) {
    line.css({
      transform: "scaleX(1)",
      transition: "transform 0.5s ease-out",
    });
  } else {
    line.css({
      transform: "scaleX(0)",
    });
  }
});

// service-line-animation
jQuery(function ($) {
  gsap.registerPlugin(ScrollTrigger);

  const lines = gsap.utils.toArray(".service-message__link-line");

  lines.forEach((line, i) => {
    const arrow = line.querySelector(".arrow");

    // line
    gsap.to(line, {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "power2.out",
      duration: 1,
      delay: i * 0.8, 
      scrollTrigger: {
        trigger: line,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // arrow
    gsap.to(arrow, {
      opacity: 1,
      delay: i * 0.4 + 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: line,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
});

// scroll-animation
$(window).on("scroll", function () {
  $(".rotate-in, .slide-in, .rotate-in-reverse, .slide-in-reverse, .slide-up").each(function () {
    const offset = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const wHeight = $(window).height();

    if (scroll > offset - wHeight + wHeight / 10) {
      $(this).addClass("show");
    }
  });
});



