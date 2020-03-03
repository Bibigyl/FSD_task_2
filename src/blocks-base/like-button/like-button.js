$(document).ready(function() {
	
	$(".js-like-button__input").on("change", function() {
		let $btn = $(this).closest('.js-like-button');
		let $btnNum = $btn.find('.js-like-button__number')
		let num = parseInt($btnNum.text(), 10);

		$btn.toggleClass("like-button_checked");
		$btn.hasClass('like-button_checked') ? num++ : num--;
		$btnNum.text(num);
	});
});