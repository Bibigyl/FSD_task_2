$(document).ready(function() {
	
	$(".like-button").on("click", function() {
		$(this).parent().parent().toggleClass("like-button-wrap_active");
	});
});