$(document).ready(function() {
	
	$(".like-button__input").on("change", function() {
		$(this).parent().parent().toggleClass("like-button_checked");
	});
});