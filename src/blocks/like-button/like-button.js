$(document).ready(function() {
	
	$(".js-like-button__input").on("change", function() {
		let $btn = $(this).closest('.like-button');
		let $btnNum = $btn.find('.js-like-button__number')
		let num = +$btnNum.text();

		$btn.toggleClass("like-button_checked");
		$btn.hasClass('like-button_checked') ? num++ : num--;
		$btnNum.text(num);
	});
});