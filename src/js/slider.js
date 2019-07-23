import Swiper from 'swiper';
var swiper1 = new Swiper ('.video-swiper', {
	slidesPerView: 2,
	//loop: true,
	spaceBetween: 30,
	simulateTouch: false,
	lazy: {
		loadPrevNext: true,
		loadOnTransitionStart: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.testim-next',
		prevEl: '.testim-prev',
	},

})

$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second')
$('.testim-next').click(function () {
	$('.video-swiper .swiper-slide').removeClass('swiper-active-second');
	$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second');
});
$('.testim-prev').click(function () {
	$('.video-swiper .swiper-slide').removeClass('swiper-active-second');
	$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second');
});