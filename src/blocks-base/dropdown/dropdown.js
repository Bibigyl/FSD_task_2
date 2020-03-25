import MessageHub from '../../js/MessageHub.js';
import bind from 'bind-decorator';

class Dropdown {

    static ANIMATION_DURATION_MS = 150;

    constructor($dropdown) {
        this.$dropdown = $dropdown;

        let $field = $dropdown.find('.js-dropdown__field');
        let $clear = $dropdown.find('.js-dropdown__action_clear');
        let $apply = $dropdown.find('.js-dropdown__action_apply');


        $field.on('click', this.handleFieldClick);

        $clear.on('click', this.handleClearClick);

        $apply.on('click', this.handleApplyClick);

        let $items = $dropdown.find('[data-outer="dropdown-item"]');
        new MessageHub($items, 'data-output', this.handleMessage);
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
    handleFieldClick() {
        if (!this.$dropdown.hasClass('dropdown_open')) {
            this.open();
        } else {
            this.close();
        }
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
        this.close()
    }

    @bind
    handleFocusLoss(e) {
        if (this.$dropdown.has(e.target).length === 0){
            this.close();
        }
    }

    open() {
        this.$dropdown.find('.js-dropdown__popup').slideDown(Dropdown.ANIMATION_DURATION_MS, 'linear').parent().addClass('dropdown_open');

        $(document).on('mouseup', this.handleFocusLoss);
    }

    close() {
        this.$dropdown.find('.js-dropdown__popup').slideUp(Dropdown.ANIMATION_DURATION_MS, 'linear').parent().removeClass('dropdown_open');

        $(document).unbind('mouseup', this.handleFocusLoss);
    }
}


$('.js-dropdown').each(function() {
    new Dropdown($(this));
});