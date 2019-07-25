$('body').on('click', '.next-question', function () {
	$('.faq-tab-1').removeClass('active');
	$('.faq-tab-1').addClass('dn');
	$('.faq-tab-2').removeClass('dn');
	$('.faq-tab-2').addClass('active');
	setTimeout(function () {
		$('.faq-tab-2').addClass('in');
	}, 200);
	return false;
});