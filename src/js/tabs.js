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


// $('body').on('click', '.testim-tab-nav a', function () {
// 	$('.testim-tab-nav a').removeClass('active');
// 	$(this).addClass('active');
// 	var href = $(this).attr('href');
// 	$('.tab-pane').removeClass('active').removeClass('in');
// 	$(href).addClass('active');
// 	swiper1.update();
// 	setTimeout(function () {
// 		$(href).addClass('in');
// 	}, 200);
// 	return false;
// });

