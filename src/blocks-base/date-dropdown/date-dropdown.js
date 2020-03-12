class DateDropdown {

    constructor($dateDropdown) {

        this.$dateDropdown = $dateDropdown;
        let $first = $dateDropdown.find('.js-date-dropdown__date_order_first input');
        let $last = $dateDropdown.find('.js-date-dropdown__date_order_last input');

        this.build();
        
        $first.on('blur', this.handleInputOnBlur.bind(this));
        $last.on('blur', this.handleInputOnBlur.bind(this));

        $first.on('keypress', this.handleInputOnKeypress.bind(this));
        $last.on('keypress', this.handleInputOnKeypress.bind(this));
    }


    build() {
        let $dateDropdown = this.$dateDropdown;
        let $first = $dateDropdown.find('.js-date-dropdown__date_order_first input');
        let $last = $dateDropdown.find('.js-date-dropdown__date_order_last input');
        let $calendar = $dateDropdown.find('.js-date-dropdown__calendar');
        
        let firstDate = $dateDropdown.find('.js-date-dropdown__date_order_first').attr('data-date') || false;
        let lastDate = $dateDropdown.find('.js-date-dropdown__date_order_last').attr('data-date') || false;
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

        $dateDropdown.bind('datepicker-opened', this.datepickerOpenedCallback.bind(this));

        $calendar.find('.date-picker-wrapper').append(
            '<button class="icon-link calendar__icon-link_action_clear js-calendar__icon-link_action_clear" type="button">' +
            buttonClearText + 
            '</button><button class="icon-link icon-link_primary calendar__icon-link_action_apply js-calendar__icon-link_action_apply" type="button">' + 
            buttonApplyText + 
            '</button>');


        if (firstDate && lastDate) {
            try {
                $dateDropdown.data('dateRangePicker').setDateRange(firstDate, lastDate);
            } catch(e) {
                console.warn('Wrong date format');
            }            
        }
    }

    datepickerOpenedCallback() {
        let $dateDropdown = this.$dateDropdown;
        let $calendar = $dateDropdown.find('.js-date-dropdown__calendar');

        $calendar.addClass('.date-dropdown__calendar_open');
    
        $dateDropdown.find('.js-calendar__icon-link_action_clear').click(function(evt) {
            evt.stopPropagation();
            $dateDropdown.data('dateRangePicker').clear();
        });

        $dateDropdown.find('.js-calendar__icon-link_action_apply').click(function(evt) {
            evt.stopPropagation();
            $dateDropdown.data('dateRangePicker').close();
            $calendar.removeClass('.date-dropdown__calendar_open');
        });

        $dateDropdown.find('.js-date-dropdown__arrow').click(function(evt) {
            if ($calendar.hasClass('.date-dropdown__calendar_open')) {
                evt.stopPropagation();
                $dateDropdown.data('dateRangePicker').close();
                $calendar.removeClass('.date-dropdown__calendar_open');        
            }
        });
    }

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

    handleInputOnKeypress(event) {
        if (event.keyCode == 13) {
            this.handleInputOnBlur();
        }
    }
}

$('.js-date-dropdown').each(function() {
    let dateDropdown = new DateDropdown($(this));
})