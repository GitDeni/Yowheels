$('body').on('click', '.to-2', function () {
	$(this).parents('.tab-pane').removeClass('active');
	$('.how-pane-2').addClass('active');
	setTimeout(function () {
		$('.how-pane-2').addClass('in');
	}, 200);
	return false;
});
$('body').on('click', '.to-3', function () {
	$(this).parents('.tab-pane').removeClass('active');
	$('.how-pane-3').addClass('active');
	setTimeout(function () {
		$('.how-pane-3').addClass('in');
	}, 200);
	return false;
});
$('body').on('click', '.to-4', function () {
	$(this).parents('.tab-pane').removeClass('active');
	$('.how-pane-4').addClass('active');
	setTimeout(function () {
		$('.how-pane-4').addClass('in');
	}, 200);
	return false;
});
$('body').on('click', '.to-5', function () {
	$(this).parents('.tab-pane').removeClass('active');
	$('.how-pane-5').addClass('active');
	setTimeout(function () {
		$('.how-pane-5').addClass('in');
	}, 200);
	return false;
});