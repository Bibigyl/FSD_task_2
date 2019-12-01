//------------------ Imports ------------------------
import "../../scss/main.scss";
import "../../js/main.js";

//import ApexCharts from 'apexcharts';



$( document ).ready(function() {

	$(".button_login").on("click", function() {
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