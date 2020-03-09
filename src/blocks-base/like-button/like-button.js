$(document).ready(function() {
	
	$('.js-like-button__input').on('change', function() {
		let $button = $(this).closest('.js-like-button');
		let $buttonNum = $button.find('.js-like-button__number')
		let num = parseInt($buttonNum.text(), 10);

		$button.toggleClass('like-button_checked');
		$button.hasClass('like-button_checked') ? num++ : num--;
		$buttonNum.text(num);
	});
});