// drawer-accordion
jQuery(function ($) {
  $(".js-drawer-accordion").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("is-open");
  });
  $(".accordion p").on("click", function () {
    $(this).toggleClass("is-open");
  });
});

// works-accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionBtns = document.querySelectorAll(".accordion__btn");

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
  $(".js-accordion-ttl")
    .first()
    .addClass("is-open")
    .next(".js-accordion-txt")
    .show();

  $(".js-accordion-ttl").click(function () {
    $(".js-accordion-ttl")
      .not(this)
      .removeClass("is-open")
      .next(".js-accordion-txt")
      .slideUp();

    $(this).toggleClass("is-open").next(".js-accordion-txt").slideToggle();
  });
});
