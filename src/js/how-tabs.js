$('body').on('click', '.to-2', function () {
	$(this).parents('.tab-pane').removeClass('active');
	$('.how-pane-2').addClass('active');
	$('.carrr').removeClass('mark-0').addClass('mark-1');
	$('.stage-0').addClass('blurred');
	$('.stage-1').removeClass('blurred');
	setTimeout(function () {
		$('.how-pane-2').addClass('in');
	}, 200);
	return false;
});
$('body').on('click', '.to-3', function () {
	$(this).parents('.tab-pane').removeClass('active');
	$('.how-pane-3').addClass('active');
	$('.carrr').removeClass('mark-1').addClass('mark-2');
	$('.stage-1').addClass('blurred');
	$('.stage-2').removeClass('blurred');
	setTimeout(function () {
		$('.how-pane-3').addClass('in');
	}, 200);
	return false;
});
$('body').on('click', '.to-4', function () {
	$(this).parents('.tab-pane').removeClass('active');
	$('.how-pane-4').addClass('active');
	$('.carrr').removeClass('mark-2').addClass('mark-3');
	$('.stage-2').addClass('blurred');
	$('.stage-3').removeClass('blurred');
	setTimeout(function () {
		$('.how-pane-4').addClass('in');
	}, 200);
	return false;
});
$('body').on('click', '.to-5', function () {
	$(this).parents('.tab-pane').removeClass('active');
	$('.how-pane-5').addClass('active');
	$('.carrr').removeClass('mark-3').addClass('mark-4');
	$('.stage-3').addClass('blurred');
	$('.stage-4').removeClass('blurred');
	setTimeout(function () {
		$('.how-pane-5').addClass('in');
	}, 200);
	return false;
});