$( document ).ready(function() {

  $('.js-slider-range__slider').each(function() {

    let $slider = $(this).closest('.js-slider-range');
    let min = parseInt($slider.attr('data-min'), 10);
    let max = parseInt($slider.attr('data-max'), 10);
    let step = parseInt($slider.attr('data-step'), 10);
    let values;

    try {
      values = JSON.parse($slider.attr('data-values'));
    } catch {
      console.warn('Incorrect data');
      values = [min, max];
    }

    // Initiate Slider
    $(this).slider({
      range: true,
      min: min,
      max: max,
      step: step,
      values: values
    });

    // Apply initial values to the range container
    $('.slider-range__text').html('<span class="range-value">' + $(this).slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + $(this).slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span>');

    $(this).slider({
      slide: function(event, ui) {

        // Update the range container values upon sliding
        $('.slider-range__text').html('<span class="range-value">' + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span>');


        // Save new value
        $(this).data({
          'value': parseInt(ui.value, 10)
        });
      }
    });
  });
});