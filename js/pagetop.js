// page-top
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $(".page-top").addClass("appear");
  } else {
    $(".page-top").removeClass("appear");
  }
}

$(window).scroll(function () {
  PageTopAnime();
});

$(".page-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500,
    function () {
      $(".page-top").removeClass("appear");
    }
  );
  return false;
});
