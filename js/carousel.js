// index-banner

$(".b").owlCarousel({
  loop: true, // 循環播放
  margin: 10, // 外距 10px
  nav: false, // 顯示箭頭
  dots: false,
  autoplay: true,
  autoplayTimeout:4500,
  autoplayHoverPause:true,
  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 1 // 螢幕大小為 0~600 顯示 1 個項目
    },
    600: {
      items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
    },
    1000: {
      items: 1 // 螢幕大小為 1000 以上 顯示 5 個項目
    }
  }
});

$(".owl-carousel").owlCarousel({
  loop: true, // 循環播放
  margin: 10, // 外距 10px
  nav: true, // 顯示點點
  dots: false,
  autoplay: true,
  autoplayTimeout:4500,
  autoplayHoverPause:true,
  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 1 // 螢幕大小為 0~600 顯示 1 個項目
    },
    600: {
      items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
    },
    1000: {
      items: 1 // 螢幕大小為 1000 以上 顯示 5 個項目
    }
  }
});

