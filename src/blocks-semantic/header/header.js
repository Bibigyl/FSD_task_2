class Header {

    constructor($header) {

        this.$header = $header;
        this.ANIMATION_DURATION_MS = 400;

        $header.find('.js-header__hamburger').on('click', this.handleHumburgerClick.bind(this));
    }

    handleHumburgerClick() {
        let $humburger = $(event.target);
        this.$header.find('.js-header__menu').slideToggle(this.ANIMATION_DURATION_MS);
        $humburger.toggleClass('header__hamburger_active');
    }
}


$('.js-header').each(function() {
    let header = new Header($(this));
});