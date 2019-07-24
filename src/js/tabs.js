import { nfapply } from "q";
import {swiper1} from "../js/slider";
import {swiper2} from "../js/slider";

// табы в модалке
$('body').on('click', '.tab-nav a', function () {
	$('.tab-nav a').removeClass('active');
	$(this).addClass('active');
	var href = $(this).attr('href');
	$('.tab-pane').removeClass('active').removeClass('in');
	$(href).addClass('active');
	$('.credit-leasing').attr('data-id', href);
	setTimeout(function () {
		$(href).addClass('in');
	}, 200);
	return false;
});

// табы в отзывах
$('body').on('click', '.testim-tab-nav a', function () {

	$('.testim-tab-nav a').removeClass('active');
	$(this).addClass('active');
	var href = $(this).attr('href');
	$('.tab-pane').removeClass('active').removeClass('in');
	$(href).addClass('active');
	swiper1.update();
	swiper2.update();
	setTimeout(function () {
		$(href).addClass('in');
	}, 200);

	return false;
});

