import MessageHub from '../../js/MessageHub.js';
import bind from 'bind-decorator';

class Dropdown {

    ANIMATION_DURATION_MS = 150;

    constructor($dropdown) {
        this.$dropdown = $dropdown;

        let $arrows = $dropdown.find('.js-dropdown__arrow');
        let $clear = $dropdown.find('.js-dropdown__action_clear');
        let $apply = $dropdown.find('.js-dropdown__action_apply');

        $arrows.on('click', this.handleArrowClick);

        $clear.on('click', this.handleClearClick);

        $apply.on('click', this.handleApplyClick);

        let $items = $dropdown.find('[data-outer="dropdown-item"]');
        let messageHub = new MessageHub($items, 'data-output', this.handleMessage);
    }

    @bind
    handleMessage() {
        let $items = this.$dropdown.find('[data-outer="dropdown-item"]');
        let $textField = this.$dropdown.find('.js-dropdown__text');
        let $clear = this.$dropdown.find('.js-dropdown__action_clear');
        let initialText = this.$dropdown.attr('data-initial-text');
        let text = '';


        let itemTexts = [];
        let itemText;
        $items.each(function() {
            itemText = $(this).attr('data-output');
            if ( itemText != '' ) { itemTexts.push(itemText); }
        });

        if (itemTexts.length != 0) {
            if ($clear) {$clear.removeClass('dropdown__action_hidden')};
            text = itemTexts.join(', ');
        } else {
            if ($clear) {$clear.addClass('dropdown__action_hidden')};
            text = initialText;
        }

        $textField.text(text);
    }

    @bind
    handleArrowClick() {
        this.$dropdown.children('.js-dropdown__popup').slideToggle(this.ANIMATION_DURATION_MS, 'linear');
        this.$dropdown.toggleClass('dropdown_open');
    }

    @bind
    handleClearClick() {
        let $items = this.$dropdown.find('[data-outer="dropdown-item"]');

        $items.each(function () {
            $(this).attr('data-input', 'clear');
        });

        $(this).addClass('dropdown__action_hidden');
    }

    @bind
    handleApplyClick() {
        this.$dropdown.find('.js-dropdown__popup').slideToggle(this.ANIMATION_DURATION_MS, 'linear').parent().toggleClass('dropdown_open');
    }
}


$('.js-dropdown').each(function() {
    let dropdown = new Dropdown($(this));
});