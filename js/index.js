
// 以下swp換圖 
window.addEventListener('load', function() {
  var swiper = new Swiper('.swiper1', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})

window.addEventListener('load', function() {
  var swiper = new Swiper('.swiper02',{
    autoplay: {
    delay: 5000,  
    disableOnInteraction: false,
    },
    speed: 700,
    allowTouchMove: false,
    lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 3,
    },
    centeredSlides: true,
    spaceBetween : 50,
    slidesOffsetBefore: 40,
    loop: true,
    slidesPerView : 'auto',
    on: {
    slideChangeTransitionEnd: function(){
      this.slides.transition(this.params.autoplay.delay+this.params.speed).transform('translate3d(-60px, 0, 0)');
    },
    slideChangeTransitionStart: function(){
      this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
    },
    },
  });
  window.onresize=function(){
    swiper.update();
  }
})



