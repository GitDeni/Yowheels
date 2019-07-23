import Swiper from 'swiper';
var swiper1 = new Swiper ('.video-swiper', {
	slidesPerView: 2,
	loop: true,
	spaceBetween: 30,
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