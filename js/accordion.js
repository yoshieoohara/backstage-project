 // drawer-accordion
 jQuery(function ($) {
  $('.js-drawer-accordion').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('is-open');
  });
  $('.accordion p').on('click', function () {
    $(this).toggleClass('is-open');
  });
});

 // works-accordion
 document.addEventListener('DOMContentLoaded', function() {
   const accordionBtns = document.querySelectorAll('.accordion__btn');

   accordionBtns.forEach(btn => {
     btn.addEventListener('click', function() {
       const top = btn.closest('.works__list-top');
       const bottom = top.nextElementSibling; // works__list-bottom
       const allItems = document.querySelectorAll('.works__list-item'); // 全てのアイテム

       // 他のアイテムが開いていたら閉じる
       allItems.forEach(item => {
         if (item !== top.closest('.works__list-item')) {
           item.classList.remove('is-open'); // 他のアイテムを閉じる
           item.querySelector('.works__list-bottom').style.maxHeight = 0; // 高さを0に
           item.querySelector('.works__list-bottom').style.opacity = 0; // 透明に
         }
       });

       // 開閉のトグル
       top.classList.toggle('is-open'); // 開く／閉じる

       // 開いた時の処理
       if (top.classList.contains('is-open')) {
         bottom.style.maxHeight = bottom.scrollHeight + 'px'; // コンテンツに合わせた高さを設定
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
  $(".js-accordion-ttl").first().addClass("is-open").next(".js-accordion-txt").show();

  $(".js-accordion-ttl").click(function () {
    $(".js-accordion-ttl").not(this).removeClass("is-open").next(".js-accordion-txt").slideUp();

    $(this).toggleClass("is-open").next(".js-accordion-txt").slideToggle();
  });
});
