class Dropdown {

    constructor($dropdown) {
        this.ANIMATION_DURATION_MS = 200;
        this.$dropdown = $dropdown;

        let $arrows = $dropdown.find('.js-dropdown__arrow');
        let $clear = $dropdown.find('.js-dropdown__action_clear');
        let $apply = $dropdown.find('.js-dropdown__action_apply');

        $arrows.on('click', this.handleArrowClick.bind(this));

        $clear.on('click', this.handleClearClick.bind(this));

        $apply.on('click', this.handleApplyClick.bind(this));

        let dropdownObserve = new DropdownObserve($dropdown);
    }

    handleArrowClick() {
        this.$dropdown.children('.js-dropdown__popup').slideToggle(this.ANIMATION_DURATION_MS, 'linear');
        this.$dropdown.toggleClass('dropdown_open');
    }

    handleClearClick() {
        let $items = this.$dropdown.find('[data-outer="dropdown-item"]');

        $items.each(function () {
            $(this).attr('data-input', 'clear');
        });

        $(this).addClass('dropdown__action_hidden');
    }

    handleApplyClick() {
        this.$dropdown.find('.js-dropdown__popup').slideToggle(this.ANIMATION_DURATION_MS, 'linear').parent().toggleClass('dropdown_open');
    }
}

class DropdownObserve {

    constructor($dropdown) {

        this.dropdown = $dropdown.get(0);
        let items = this.dropdown.querySelectorAll('[data-outer="dropdown-item"]');

        let dropdownObserver = new MutationObserver(this.mutationObserverCallback.bind(this));

        items.forEach(function (item) {
            dropdownObserver.observe(item, {attributeFilter: ['data-output']});
        });
    }

    mutationObserverCallback() {
        let items = this.dropdown.querySelectorAll('[data-outer="dropdown-item"]');
        let textField = this.dropdown.querySelector('.js-dropdown__text');
        let clear = this.dropdown.querySelector('.js-dropdown__action_clear');
        let initialText = this.dropdown.getAttribute('data-initial-text');
        let text = '';


        let itemTexts = [];
        let itemText;
        items.forEach(function (item) {
            itemText = item.getAttribute('data-output');
            if ( itemText != '' ) { itemTexts.push(itemText); }
        });

        if (itemTexts.length != 0) {
            if (clear) {clear.classList.remove('dropdown__action_hidden')};
            text = itemTexts.join(', ');
        } else {
            if (clear) {clear.classList.add('dropdown__action_hidden')};
            text = initialText;
        }

        textField.textContent = text;
    }
}


$('.js-dropdown').each(function() {
    let dropdown = new Dropdown($(this));
});