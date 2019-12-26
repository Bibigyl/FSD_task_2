import Cleave from 'cleave.js';

$( document ).ready(function() {
	$('.text-field_masked input').each(function() {

		let params = {};

		if ( $(this).attr('data-type') ) {
			let type = $(this).attr('data-type');
			params[type] = true;

			try {
				params[type + 'Pattern'] = $(this).attr('data-pattern') ?
				JSON.parse( $(this).attr('data-pattern') ) :
				false;				
			} catch(e) {
				console.warn(e.stack);
			}
		}

		params['delimiter'] = $(this).attr('data-delimiter') ?
		$(this).attr('data-delimiter') :
		false;

		try {
			params['blocks'] = $(this).attr('data-blocks') ?
			JSON.parse( $(this).attr('data-blocks') ) :
			false;				
		} catch(e) {
			console.warn(e.stack);
		}

		let cleave = new Cleave($(this), params);	
	});
});