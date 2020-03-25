import bind from 'bind-decorator';

class RateButton {

    static FULL = 'star';
    static EMPTY = 'star_border';

    constructor($rateButton) {

        if ( !$rateButton.hasClass('js-rate-button_clickable') ) { return }

        this.$rate = $rateButton;

        let $icons = $rateButton.find('.js-rate-button__icon');

        $icons.on('mouseenter', this.handleIconMouseEnter);
        $icons.on('click', this.handleIconClick);
        $icons.on('mouseleave', this.handleIconMouseLeave);   
    }

    @bind
    handleIconMouseEnter() {
        let $icon = $(event.target);

        $icon.text(RateButton.FULL);
        $icon.prevAll().each(function() { 
            $(this).text(RateButton.FULL);
        });
        $icon.nextAll().each(function() { 
            $(this).text(RateButton.EMPTY); 
        });               
    }

    @bind
    handleIconClick() {
        let $icon = $(event.target);

        $icon.addClass('rate-button__icon_checked js-rate-button__icon_checked');
        $icon.prevAll().each(function() { 
            $(this).addClass('rate-button__icon_checked js-rate-button__icon_checked');
        });
        $icon.nextAll().each(function() { 
            $(this).removeClass('rate-button__icon_checked js-rate-button__icon_checked');
        });   
    }

    @bind
    handleIconMouseLeave() {
        let $lastChecked = this.$rate.find('.js-rate-button__icon_checked').last();

        $lastChecked.text(RateButton.FULL);
        $lastChecked.prevAll().each(function() { 
            $(this).text(RateButton.FULL);
        });
        $lastChecked.nextAll().each(function() { 
            $(this).text(RateButton.EMPTY); 
        });      
    }
}


$('.js-rate-button').each(function() {
    new RateButton($(this));
})