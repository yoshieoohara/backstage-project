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
      const $this = $(this);

      // クリックしたアコーディオンがすでに開いている場合の処理
      if (!$this.hasClass("is-open")) {
        // 開いている他のアコーディオンを閉じる
        $(".accordion p").removeClass("is-open");
        $(".accordion-menu").stop(true, true).slideUp(300); // 他を閉じる

        // クリックしたアコーディオンを開く
        $this.addClass("is-open");
        $this.next(".accordion-menu").stop(true, true).slideDown(300); // クリックしたのを開く
      } else {
        // クリックしたアコーディオンを閉じる
        $this.removeClass("is-open");
        $this.next(".accordion-menu").stop(true, true).slideUp(300); // 閉じる
      }
    });
  });
});


