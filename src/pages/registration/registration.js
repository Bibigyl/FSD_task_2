//--------------- import scss -----------------------------

import '../../scss/main.scss';
import './registration.scss';

//--------------- import common js -----------------------------

import "../../js/main.js";

//------------------ import blocks scripts -----------------------------

import "../../common.blocks/text-field/text-field.js";

//------------------ import components scripts -----------------------------

import "../../components/header/header.js";



$( document ).ready(function() {

	$(".js-registration__card .check-in-card__enter-button").on("click", function() {

		$('.registration__check-in-card').addClass('registration__card_hidden');
		$('.registration__login-card').removeClass('registration__card_hidden');

		$('.registration__container').addClass('registration__container_small');
	});

	$(".js-registration__card .login-card__enter-button").on("click", function() {

		$('.registration__login-card').addClass('registration__card_hidden');
		$('.registration__check-in-card').removeClass('registration__card_hidden');

		$('.registration__container').removeClass('registration__container_small');
	});

});