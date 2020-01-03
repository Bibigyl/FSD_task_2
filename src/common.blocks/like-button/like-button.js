$(document).ready(function() {
	
	$(".like-button__input").on("change", function() {
		$(this).closest('.loke-button').toggleClass("like-button_checked");
	});
});