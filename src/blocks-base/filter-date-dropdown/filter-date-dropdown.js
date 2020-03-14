import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/es-us';
moment.locale('ru');


class FilterDateDropdown {

    constructor($filterDateDropdown) {

        this.$dropdown = $filterDateDropdown;
        this.build();
    }


    build() {
        let $dropdown = this.$dropdown;
        let $input = $dropdown.find('input');
        let $calendar = $dropdown.find('.js-filter-date-dropdown__calendar');

        let firstDate = $dropdown.attr('data-first-date') || '';
        let lastDate = $dropdown.attr('data-last-date') || '';
        let language = $dropdown.attr('data-language');
        let buttonClearText = $dropdown.attr('data-button-to-clear');
        let buttonApplyText = $dropdown.attr('data-button-to-apply');

        $dropdown.dateRangePicker({
            language: language,
            singleMonth: true,
            showShortcuts: false,
            showTopbar: true,
            startOfWeek: 'monday',
            format: 'D MMM',
            separator: ' - ',
            hoveringTooltip: false,
            setValue: function(s) {
                if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val()) {
                    $input.val(s);
                }
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
                moment.locale(language);

                firstDate = moment(firstDate, 'DD.MM.YYYY').format('D MMM');
                lastDate = moment(lastDate, 'DD.MM.YYYY').format('D MMM');

                $dropdown.data('dateRangePicker').setDateRange(firstDate, lastDate);
            } catch(e) {
                console.warn('Wrong date format');
            }            
        }

        $dropdown.find('.js-calendar__icon-link_action_clear').on('click', function() {
            $dropdown.data('dateRangePicker').clear();
            $input.find('input').val('');
        });

        $dropdown.find('.js-calendar__icon-link_action_apply').on('click', function() {
            $dropdown.data('dateRangePicker').close();
        });

        $dropdown.find('.js-filter-date-dropdown__arrow').on('click', function() {
            $dropdown.data('dateRangePicker').close();      
        });
    }
}


$('.js-filter-date-dropdown').each(function() {
    let filreDateDropdown = new FilterDateDropdown($(this));
});