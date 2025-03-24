// hamburger
jQuery(function ($) {
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("scrolled");
        $(".header__logo").addClass("scrolled");
      } else {
        $(".header").removeClass("scrolled");
        $(".header__logo").removeClass("scrolled");
      }
    });

    $(".js-hamburger").click(function () {
      $(this).toggleClass("is-open");
      $(".js-drawer").toggleClass("is-open");
      $("body").toggleClass("no-scroll");
    });

    $(".js-drawer a[href]").on("click", function () {
      $(".js-hamburger").removeClass("is-open");
      $(".js-drawer").removeClass("is-open");
      $("body").removeClass("no-scroll");
    });

    $(".accordion p").on("click", function (e) {
      e.preventDefault();
      const $parent = $(this).closest(".accordion");
    
      if (!$parent.hasClass("is-open")) {
        $(".accordion").removeClass("is-open");
        $(".accordion-menu").stop(true, true).slideUp(300);
    
        $parent.addClass("is-open");
        $parent.find(".accordion-menu").stop(true, true).slideDown(300);
      } else {
        $parent.removeClass("is-open");
        $parent.find(".accordion-menu").stop(true, true).slideUp(300);
      }
    });
  });
});



