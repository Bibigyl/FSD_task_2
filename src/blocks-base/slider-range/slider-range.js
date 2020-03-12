class SliderRange {

    constructor($sliderRange) {

        this.$sliderRange = $sliderRange;
        this.$slider = $sliderRange.find('.js-slider-range__slider');
        this.build();

    }

    build() {
        let $slider = this.$slider;
        let $sliderRange = this.$sliderRange;
        let $text = $sliderRange.find('.slider-range__text');
        let min = Number($sliderRange.attr('data-min'));
        let max = Number($sliderRange.attr('data-max'));
        let step = Number($sliderRange.attr('data-step'));
        let values;

        try {
            values = JSON.parse($sliderRange.attr('data-values'));
        } catch {
            console.warn('Incorrect data');
            values = [min, max];
        }

        // Initiate Slider
        $slider.slider({
            range: true,
            min: min,
            max: max,
            step: step,
            values: values
        });

        // Apply initial values to the range container
        $text.html('<span class="range-value">' + $slider.slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + $slider.slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span>');

        $slider.slider({
            slide: function(event, ui) {

                // Update the range container values upon sliding
                $text.html('<span class="range-value">' + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span>');


                // Save new value
                $slider.data({
                    'value': Number(ui.value)
                });
            }
        });
    }
}


$('.js-slider-range').each(function() {
    let sliderRange = new SliderRange($(this));
});