// tab
function GethashID(hashIDName) {
  if (hashIDName) {
    $(".tab__link li").removeClass("is-active");
    $(".tab-content").removeClass("is-show");

    $(".tab__link a").each(function () {
      var idName = $(this).attr("href");
      if (idName === hashIDName) {
        $(this).parent().addClass("is-active");
        $(hashIDName).addClass("is-show");
      }
    });
  }
}

$(".tab__link a").on("click", function (event) {
  event.preventDefault();
  var idName = $(this).attr("href");

  history.pushState(null, null, idName);

  GethashID(idName);
});

$(window).on("load", function () {
  var hashName = location.hash;

  if (hashName && $(hashName).length) {
    GethashID(hashName);
  } else {
    $(".tab__link li").first().addClass("is-active");
    $(".tab__content").first().addClass("is-show");
  }
});

$(window).on("popstate", function () {
  var hashName = location.hash;
  if (hashName && $(hashName).length) {
    GethashID(hashName);
  }
});
