// loading
// document.addEventListener("DOMContentLoaded", () => {
//   if (!localStorage.getItem("visited")) {
//     setTimeout(() => {
//       document.querySelector(".top-container").style.opacity = "1";
//       document.querySelector(".top-container").style.transform =
//         "translateX(0)";
//       localStorage.setItem("visited", "true");
//     }, 3000);
//     document.querySelector(".top-container").style.opacity = "1";
//     document.querySelector(".top-container").style.transform = "translateX(0)";
//   }
// });
// top-line-animation
gsap.registerPlugin(ScrollTrigger);

gsap.to(".top-message__ttl--en span::after", {
  scrollTrigger: {
    trigger: ".top-message__ttl--en span",
    start: "top 80%", // ビューポートの80%の位置で開始
    toggleActions: "play none none none",
  },
  width: "100%",
  duration: 1,
  ease: "power2.out",
});

// service-animation
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
