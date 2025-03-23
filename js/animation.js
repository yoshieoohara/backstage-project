// loading
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("loaded")) {
    localStorage.setItem("loaded", "true");

    setTimeout(() => {
      document.querySelector(".loading-screen").style.opacity = 0;
      setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
      }, 500); 
    }, 2000); 
  } else {

    document.querySelector(".loading-screen").style.display = "none";
  }
});

// body-animation
$(function() {
	$('body').fadeIn(1000); 
});

// header-color
jQuery(function ($) {
  $(window).on("scroll", function () {
    const fvHeight = $("#top-fv").outerHeight();
    const scroll = $(window).scrollTop();

    if (scroll > fvHeight - 100) {
      $(".logo-img").attr("src", "img/logo-black.png");
    } else {
      $(".logo-img").attr("src", "img/logo-white.png");
    }
  });
});

// service-line-animation
jQuery(function ($) {
  gsap.registerPlugin(ScrollTrigger);

  const lines = gsap.utils.toArray(".service-message__link-line");

  lines.forEach((line, i) => {
    const arrow = line.querySelector(".arrow");

    // ラインのアニメーション
    gsap.to(line, {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "power2.out",
      duration: 1,
      delay: i * 0.8, // 上下で時間差
      scrollTrigger: {
        trigger: line,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // 矢印のアニメーション
    gsap.to(arrow, {
      opacity: 1,
      delay: i * 0.4 + 0.8, // ラインより少し遅らせる
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: line,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
});

// fade-animation
function fadeIn() {
  $(".fadeUpTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 200;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });

  $(".fadeInTrigger").each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 200;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass("fadeIn");
    } else {
      $(this).removeClass("fadeIn");
    }
  });
}


$('.fadeLeftTrigger').each(function () {
  let scroll = $(window).scrollTop();
  let triTop = $(this).offset().top + 100;
  let winHeight = $(window).height();
  if (scroll >= triTop - winHeight) {
    $(this).addClass('fadeLeft');
  } else {
    $(this).removeClass('fadeLeft');
  }
});

$('.fadeRightTrigger').each(function () {
  let scroll = $(window).scrollTop();
  let triTop = $(this).offset().top + 100;
  let winHeight = $(window).height();
  if (scroll >= triTop - winHeight) {
    $(this).addClass('fadeRight');
  } else {
    $(this).removeClass('fadeRight');
  }
});

$(window).scroll(function () {
  fadeIn();
});

$(document).ready(function () {
  fadeIn();
});

// top-line-animation
$(window).scroll(function () {
  var scroll = $(window).scrollTop(); 
  var line = $('.line'); 

  
  if (scroll > 200) {
    line.css({
      transform: 'scaleX(1)', 
      transition: 'transform 0.5s ease-out', 
    });
  } else {
    line.css({
      transform: 'scaleX(0)', 
    });
  }
});













