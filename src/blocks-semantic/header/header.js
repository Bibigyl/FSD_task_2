import bind from 'bind-decorator';

class Header {

    static ANIMATION_DURATION_MS = 400;

    constructor($header) {

        this.$header = $header;

        $header.find('.js-header__hamburger').on('click', this.handleHumburgerClick);
    }

    @bind
    handleHumburgerClick() {
        let $humburger = $(event.target);
        this.$header.find('.js-header__menu').slideToggle(ANIMATION_DURATION_MS);
        $humburger.toggleClass('header__hamburger_active');
    }
}


$('.js-header').each(function() {
    let header = new Header($(this));
});