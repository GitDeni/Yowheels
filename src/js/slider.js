import Swiper from 'swiper';

// первый таб с отзывами

var swiper1 = new Swiper ('.video-swiper', {
	slidesPerView: 2,
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

// второй таб с отзывами
var swiper2 = new Swiper ('.photo-swiper', {
	slidesPerView: 2,
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

$('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second')
$('.testim-next').click(function () {
	$('.photo-swiper .swiper-slide').removeClass('swiper-active-second');
	$('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second');
});
$('.testim-prev').click(function () {
	$('.photo-swiper .swiper-slide').removeClass('swiper-active-second');
	$('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second');
});
export {swiper1, swiper2}