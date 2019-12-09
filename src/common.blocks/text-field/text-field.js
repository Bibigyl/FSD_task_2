import Cleave from 'cleave.js';

$( document ).ready(function() {
	$('.text-field_masked').each(function() {
		var cleave = new Cleave('.text-field_masked', {
			date: true,
			delimiter: '.',
			datePattern: ['d', 'm', 'Y']
		});		
	});
});