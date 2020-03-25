class SliderRange {

    constructor($sliderRange) {

        this.$sliderRange = $sliderRange;
        this.build();

    }

    build() {
        let $sliderRange = this.$sliderRange;
        let $slider = $sliderRange.find('.js-slider-range__slider');
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

        $slider.slider({
            range: true,
            min: min,
            max: max,
            step: step,
            values: values
        });

        const THOUSANDS_RANKS = /(\d)(?=(\d\d\d)+(?!\d))/g;
        let begin = $slider.slider("values", 0).toString().replace(THOUSANDS_RANKS, "$1 ");
        let end = $slider.slider("values", 1).toString().replace(THOUSANDS_RANKS, "$1 ");

        $text.html(
            `<span class="range-value">${begin}₽</span>
            <span class="range-divider"></span>
            <span class="range-value">${end}₽</span>`
        );

        $slider.slider({
            slide: function(event, ui) {

                let begin = ui.values[0].toString().replace(THOUSANDS_RANKS, "$1 ");
                let end = ui.values[1].toString().replace(THOUSANDS_RANKS, "$1 ");
                
                $text.html(
                    `<span class="range-value">${begin}₽</span>
                    <span class="range-divider">
                    </span><span class="range-value">${end}₽</span>`
                );

                $slider.data({
                    'value': Number(ui.value)
                });
            }
        });
    }
}


$('.js-slider-range').each(function() {
    new SliderRange($(this));
});