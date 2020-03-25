import slick from 'slick-carousel/slick/slick.min.js'

class Slider {

    constructor($slider) {

        this.$slider = $slider;
        
        const nextArrow = $slider.attr('data-arrows') !== undefined ?
        '<button class="slider__arrow slider__arrow_next"><i class="material-icons">expand_more</i></button>' :
        '';
        const prevArrow = $slider.attr('data-arrows') !== undefined ?
        '<button class="slider__arrow slider__arrow_prev"><i class="material-icons">expand_more</i></button>' :
        '';
        const hasDots = $slider.attr('data-arrows') !== undefined;
        const dotsClass = hasDots ? 'slider__dots' : '';

        $slider.slick({
            nextArrow: nextArrow,
            prevArrow: prevArrow,
            dots: hasDots,
            dotsClass: dotsClass,
            speed: 350,
            fade: true,
            cssEase: 'linear'
        });
    }
}

$('.js-slider').each(function() {
    new Slider($(this));
})