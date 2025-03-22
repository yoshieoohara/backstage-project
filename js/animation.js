// loading
// document.addEventListener("DOMContentLoaded", () => {
//   const topContainer = document.querySelector(".top-container");

//   if (!localStorage.getItem("visited")) {
//     // 初回のみ3秒後に表示
//     setTimeout(() => {
//       topContainer.style.opacity = "1";
//       topContainer.style.transform = "translateX(0)";
//       localStorage.setItem("visited", "true");
//     }, 3000);
//   } else {
//     // 2回目以降は即表示
//     topContainer.style.opacity = "1";
//     topContainer.style.transform = "translateX(0)";
//   }
// });

// // bfcache（戻るキャッシュ）対応
// window.addEventListener("pageshow", (event) => {
//   if (event.persisted) {
//     const topContainer = document.querySelector(".top-container");
//     topContainer.style.opacity = "1";
//     topContainer.style.transform = "translateX(0)";
//   }
// });

$(window).on('load', function () {
  // 初回アクセス時のみ実行
  if (!sessionStorage.getItem('splashShown')) {
    $("#splash-logo").delay(1200).fadeOut('slow'); // ロゴを1.2秒でフェードアウト
    $("#splash").delay(1500).fadeOut('slow', function () { // splashエリアを1.5秒でフェードアウト
      $('body').addClass('appear'); // フェードアウト後bodyにappearクラス付与
    });

    // sessionStorageに「splashShown」を設定して、2回目以降は実行されないようにする
    sessionStorage.setItem('splashShown', 'true');
  } else {
    // 2回目以降は即座にappearクラスを付与
    $('body').addClass('appear');
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

// top-line-animation
jQuery(function ($) {
  gsap.registerPlugin(ScrollTrigger);

  const line = document.querySelector(".line");

  gsap.to(line, {
    scaleX: 1,
    ease: "power2.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".line-wrap",
      start: "top 80%",
      toggleActions: "play none none none",
    },
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
