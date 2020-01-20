import "jquery-ui/ui/widgets/slider.js";

$( document ).ready(function() {

  $('.slider-range__slider').each(function() {

    // Initiate Slider
    $(this).slider({
      range: true,
      min: 200,
      max: 15500,
      step: 200,
      values: [5000, 10000]
    });

    // Apply initial values to the range container
    $('.slider-range__text').html('<span class="range-value">' + $(this).slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + $(this).slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span>');

    $(this).slider({
      slide: function(event, ui) {

        // Update the range container values upon sliding

        $('.slider-range__text').html('<span class="range-value">' + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span>');

        // Get old value
        var previousVal = parseInt($(this).data('value'));

        // Save new value
        $(this).data({
          'value': parseInt(ui.value)
        });

      }

    });

  });

});