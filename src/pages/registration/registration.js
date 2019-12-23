//--------------- import scss -----------------------------

import '../../scss/main.scss';
import './registration.scss';

//--------------- import libs -----------------------------

//import "../../libs/jquery.maskedinput/jquery.maskedinput.min.js";

//--------------- import common js -----------------------------

//import "../../js/main.js";

//------------------ import components scripts ------------------------

//import "../../components/header/header.js";



$( document ).ready(function() {

	$(".button_for-login").on("click", function() {
		$(".check-in-card-wrap").addClass("hidden");
		$(".login-card-wrap").removeClass("hidden");
		$(".registration__front").css("height", "670px");
	});

	$(".button_check-in").on("click", function() {
		$(".login-card-wrap").addClass("hidden");
		$(".check-in-card-wrap").removeClass("hidden");
		$(".registration__front").css("height", "702px");
	});

});