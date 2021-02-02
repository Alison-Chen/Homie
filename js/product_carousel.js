$(".product").owlCarousel({
    loop: false, // 循環播放
    margin: 10, // 外距 10px
    nav: true, // 顯示點點
    dots: false,
    autoplay: false,
    // autoplayTimeout:3000,
    // autoplayHoverPause:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 2,
        // stagePadding: 100 // 螢幕大小為 0~600 顯示 1 個項目
      },
      320:{
        items: 1,
        // stagePadding: 50 
      },
      750: {
        items: 3,
        // stagePadding: 600// 螢幕大小為 600~1000 顯示 3 個項目
      },
      992:{
        items: 2,
        // stagePadding: 50 
      },
      1000: {
        items: 6, // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });