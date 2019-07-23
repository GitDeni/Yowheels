import Swiper from 'swiper';
var mySwiper = new Swiper ('.video-swiper', {
	// Optional parameters
	slidesPreView: 1,
	//loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.testim-prev',
		prevEl: '.testim-next',
	},

	spaceBetween: 0,

})