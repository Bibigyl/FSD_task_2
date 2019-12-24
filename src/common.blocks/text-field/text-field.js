import Cleave from 'cleave.js';

$( document ).ready(function() {
	$('.text-field_masked input').each(function() {

		let params = {};

		if ( $(this).attr('data-type') ) {
			let type = $(this).attr('data-type');
			params[type] = true;
			params[type + 'Pattern'] = JSON.parse( $(this).attr('data-pattern') );
		}

		params['delimiter'] = $(this).attr('data-delimiter');
		params['blocks'] = $(this).attr('data-blocks');

		let cleave = new Cleave($(this), params);	
	});
});