import Swiper from 'swiper';


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

var swiper3 = new Swiper ('.written-swiper', {
	slidesPerView: 4,
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

// if ($('.video-pane').hasClass('active')) {
// 	$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second');
// }

$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second');
// $('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second');
$('.testim-next').click(function () {
	$('.video-swiper .swiper-slide').removeClass('swiper-active-second');
	$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second');
});
$('.testim-prev').click(function () {
	$('.video-swiper .swiper-slide').removeClass('swiper-active-second');
	$('.video-swiper .swiper-slide-active').next().addClass('swiper-active-second');
});

// второй таб с отзывами


// $('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second')
// $('.testim-next').click(function () {
// 	$('.photo-swiper .swiper-slide').removeClass('swiper-active-second');
// 	$('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second');
// });
// $('.testim-prev').click(function () {
// 	$('.photo-swiper .swiper-slide').removeClass('swiper-active-second');
// 	$('.photo-swiper .swiper-slide-active').next().addClass('swiper-active-second');
// });
export {swiper1, swiper2, swiper3}