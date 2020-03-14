import bind from 'bind-decorator';

class DateDropdown {

    constructor($dateDropdown) {

        this.$dateDropdown = $dateDropdown;
        let $first = $dateDropdown.find('.js-date-dropdown__date_order_first input');
        let $last = $dateDropdown.find('.js-date-dropdown__date_order_last input');

        this.build();
        
        $first.on('blur', this.handleInputOnBlur);
        $last.on('blur', this.handleInputOnBlur);

        $first.on('keypress', this.handleInputOnKeypress);
        $last.on('keypress', this.handleInputOnKeypress);
    }


    build() {
        let $dateDropdown = this.$dateDropdown;
        let $first = $dateDropdown.find('.js-date-dropdown__date_order_first input');
        let $last = $dateDropdown.find('.js-date-dropdown__date_order_last input');
        let $calendar = $dateDropdown.find('.js-date-dropdown__calendar');
        
        let firstDate = $dateDropdown.find('.js-date-dropdown__date_order_first').attr('data-date') || '';
        let lastDate = $dateDropdown.find('.js-date-dropdown__date_order_last').attr('data-date') || '';
        let language = $dateDropdown.attr('data-language');
        let buttonClearText = $dateDropdown.attr('data-button-to-clear');
        let buttonApplyText = $dateDropdown.attr('data-button-to-apply');

        $dateDropdown.dateRangePicker({
            language: language,
            singleMonth: true,
            showShortcuts: false,
            showTopbar: true,
            startOfWeek: 'monday',
            format: 'DD.MM.YYYY',
            hoveringTooltip: false,
            setValue: function(s,s1,s2) {
                $first.val(s1);
                $last.val(s2);
            },
            inline: true,
            customArrowPrevSymbol: '<div class="calendar__arrow js-calendar__arrow"><i class="material-icons">arrow_back</i></div>',
            customArrowNextSymbol: '<div class="calendar__arrow js-calendar__arrow"><i class="material-icons">arrow_forward</i></div>',
            container: $calendar
        });

        $calendar.find('.date-picker-wrapper').append(
            `<button class="icon-link calendar__icon-link_action_clear js-calendar__icon-link_action_clear" type="button">${buttonClearText}</button>
            <button class="icon-link icon-link_primary calendar__icon-link_action_apply js-calendar__icon-link_action_apply" type="button">${buttonApplyText}</button>`);


        if (firstDate && lastDate) {
            try {
                $dateDropdown.data('dateRangePicker').setDateRange(firstDate, lastDate);
            } catch(e) {
                console.warn('Wrong date format');
            }            
        }

        $dateDropdown.find('.js-calendar__icon-link_action_clear').on('click', function() {
            $dateDropdown.data('dateRangePicker').clear();
        });

        $dateDropdown.find('.js-calendar__icon-link_action_apply').on('click', function() {
            $dateDropdown.data('dateRangePicker').close();
        });

        $dateDropdown.find('.js-date-dropdown__arrow').on('click', function() {
            $dateDropdown.data('dateRangePicker').close();
        });
    }


    @bind
    handleInputOnBlur() {
        let $dateDropdown = this.$dateDropdown;
        let $first = $dateDropdown.find('.js-date-dropdown__date_order_first input');
        let $last = $dateDropdown.find('.js-date-dropdown__date_order_last input');

        if ( $first.val() && $last.val() ) {
            try {
                $dateDropdown.data('dateRangePicker').setDateRange($first.val(), $last.val());
                $dateDropdown.data('dateRangePicker').close();
            } catch(e) {
                console.warn('Incorrect dates');
            }      
        }
    }

    @bind
    handleInputOnKeypress(event) {
        if (event.keyCode == 13) {
            this.handleInputOnBlur();
        }
    }
}

$('.js-date-dropdown').each(function() {
    let dateDropdown = new DateDropdown($(this));
})