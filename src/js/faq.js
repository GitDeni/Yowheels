var hide = function(e){
	e.preventDefault();
	$(this).addClass('closed').removeClass('rotate');
	$(this).parents('.faq-card').addClass('closed');
	$(this).parents('.faq-card').children('.faq-card__answer').slideUp();

};
var show = function(e){
	e.preventDefault();
	$(this).removeClass('closed').addClass('rotate');
	$(this).parents('.faq-card').children('.faq-card__answer').slideDown();
}
$('body').on('click','.faq-button', hide);
$('body').on('click', '.closed', show);