//--------------- import libs -----------------------------

import "../../libs/jquery.maskedinput/jquery.maskedinput.min.js";
import "../../libs/jquery-ui-1.12.1.custom/jquery-ui.min.js";
import "../../libs/daterangepicker-master/moment.min.js";
//import "../libs/daterangepicker-master/daterangepicker.js";
import "../../libs/jquery.daterangepicker/jquery.daterangepicker.js";


import moment from 'moment'
import 'moment/locale/ru' 
moment.locale('ru');

//------------------ import blocks scripts -----------------------------

import "../../common.blocks/input/input.js";

//------------------ import components scripts -----------------------------

import "../../components/header/header.js";



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