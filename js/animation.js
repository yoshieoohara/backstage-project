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

    // .top-header 内の .logo-img のみ対象
    if (scroll > fvHeight - 100) {
      $(".top-header .logo-img").attr("src", "img/logo-black.png");
    } else {
      $(".top-header .logo-img").attr("src", "img/logo-white.png");
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


// top-line-animation
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var line = $(".top__line");

  if (scroll > 200) {
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

// p-ttl-animation
document.addEventListener("DOMContentLoaded", () => {
  const pTtl = document.querySelector(".p-ttl");

  // スクロールまたは遅延後にアクティブクラスを追加してアニメーションを開始
  setTimeout(() => {
    pTtl.classList.add("active");
  }, 300); // 0.3秒後にアニメーションを開始
});


// scroll-anime
$(window).on("scroll", function () {
  $(".rotate-in, .slide-in, .rotate-in-reverse, .slide-in-reverse, .slide-up").each(function () {
    const offset = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const wHeight = $(window).height();

    if (scroll > offset - wHeight + wHeight / 3) {
      $(this).addClass("show");
    }
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   window.addEventListener("load", function () {
//     const slideUpText = document.querySelectorAll(".title__anime");
//     new SplitType(slideUpText);
//     slideUpText.forEach((element) => {
//       const chars = element.querySelectorAll(".char");
//       gsap.to(chars, {
//         opacity: 1,
//         stagger: 0.06,
//         delay: 1,
//       });
//     });
//   });
// });

