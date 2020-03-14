import bind from 'bind-decorator';

class RateButton {

    FULL = 'star';
    EMPTY = 'star_border';

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
        let that = this;

        $icon.text(this.FULL);
        $icon.prevAll().each(function() { 
            $(this).text(that.FULL);
        });
        $icon.nextAll().each(function() { 
            $(this).text(that.EMPTY); 
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
        let that = this;
        let $lastChecked = this.$rate.find('.js-rate-button__icon_checked').last();

        $lastChecked.text(that.FULL);
        $lastChecked.prevAll().each(function() { 
            $(this).text(that.FULL);
        });
        $lastChecked.nextAll().each(function() { 
            $(this).text(that.EMPTY); 
        });      
    }
}


$('.js-rate-button').each(function() {
    let rateButton = new RateButton($(this));
})