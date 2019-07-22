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




// if ($('.credit-pane').hasClass('active')) {
// 	$('.credit-leasing').css({
// 		width: '670px',
// 		height: '1225px',
// 	});
// }
// else if ($('.leasing-pane').hasClass('active')) {
// 	$('.credit-leasing').css({
// 		width: '969px',
// 		height: '690px',
// 	});
// };