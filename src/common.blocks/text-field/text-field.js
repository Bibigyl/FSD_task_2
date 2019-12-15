import Cleave from 'cleave.js';

$( document ).ready(function() {
	$('.text-field__input_masked').each(function() {
		let cleave = new Cleave($(this), {
			date: true,
			delimiter: '.',
			datePattern: ['d', 'm', 'Y']
		});	
	});
});