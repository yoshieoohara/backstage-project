// drawer-accordion
$(".accordion p").on("click", function () {
  $(this).closest(".accordion").toggleClass("is-open");
});

$(".accordion").on("mouseenter", function () {
  $(this).addClass("is-open");
});

$(".accordion").on("mouseleave", function () {
  if (!$(this).find("p").hasClass("is-open")) {
    $(this).removeClass("is-open");
  }
});

// works-accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".works__list-item");

  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = btn.closest(".works__list-item");
      const bottom = item.querySelector(".works__list-bottom");

      document.querySelectorAll(".works__list-item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("is-open");
          const otherBottom = otherItem.querySelector(".works__list-bottom");
          if (otherBottom) {
            otherBottom.style.maxHeight = 0;
            otherBottom.style.opacity = 0;
          }
        }
      });

      item.classList.toggle("is-open");

      if (item.classList.contains("is-open")) {
        bottom.style.maxHeight = bottom.scrollHeight + "px";
        bottom.style.opacity = 1;
      } else {
        bottom.style.maxHeight = 0;
        bottom.style.opacity = 0;
      }
    });
  });
});

// artist-accordion
$(function () {
  $(".artist__accordion-ttl").click(function () {
    $(".artist__accordion-ttl")
      .not(this)
      .removeClass("is-open")
      .next(".artist__accordion-txt")
      .slideUp();

    $(this).toggleClass("is-open").next(".artist__accordion-txt").slideToggle();
  });
});
