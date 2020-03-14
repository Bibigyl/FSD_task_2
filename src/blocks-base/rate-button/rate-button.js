import bind from 'bind-decorator';
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

class RateButton {

    constructor($rateButton) {

        if ( !$rateButton.hasClass('js-rate-button_clickable') ) { return }

        this.$rate = $rateButton;
        this.FULL = 'star';
        this.EMPTY = 'star_border';
        this.$enteredIcon = null;

        let $icon = $rateButton.find('.js-rate-button__icon');
        $icon.on('mouseenter', this.handleIconMouseEnter);
        $icon.on('click', this.handleIconClick);
        $icon.on('mouseleave', this.handleIconMouseLeave);
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