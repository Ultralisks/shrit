window.onload = function(){
  var mySwiper1 = new Swiper ('#swiper1', {
    autoplay: 2000, //3秒切换一次
    disableOnInteraction: false,
    loop: true,
    speed: 500,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.swiper-pagination',
  });
  var mySwiper2 = new Swiper ('#swiper2', {
    autoplay: 2000, //3秒切换一次
    disableOnInteraction: false,
    loop: true,
    speed: 500,
    direction: 'vertical',
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    pagination: '.swiper-pagination',
  });
}
