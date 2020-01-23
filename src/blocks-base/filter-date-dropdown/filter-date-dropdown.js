import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/es-us';
moment.locale('ru');

$( document ).ready(function() {

    $('.js-filter-date-dropdown').each( function() {

        let $this = $(this);
        let $input = $this.find('input');
        let $calendar = $this.find('.js-filter-date-dropdown__calendar');
        let firstDate = $this.attr('data-first-date') || false;

        let lastDate = $this.attr('data-last-date') || false;
        let language = $this.attr('data-language');
        let buttonClear = $this.attr('data-button-to-clear');
        let buttonApply = $this.attr('data-button-to-apply');

        $this.dateRangePicker({
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

        $this.bind('datepicker-opened', function() {
    
            $calendar.addClass('filter-date-dropdown__calendar_open');
    
            $this.find('.js-calendar__icon-link_action_clear').click(function(evt) {
                evt.stopPropagation();
                $this.data('dateRangePicker').clear();
                $input.val('');
            });
    
            $this.find('.js-calendar__icon-link_action_apply').click(function(evt) {
                evt.stopPropagation();
                $this.data('dateRangePicker').close();
                $calendar.removeClass('filter-date-dropdown__calendar_open');
            });

            $this.find('.js-filter-date-dropdown__arrow').click(function(evt) {
                if ($calendar.hasClass('filter-date-dropdown__calendar_open')) {
                    evt.stopPropagation();
                    $this.data('dateRangePicker').close();
                    $calendar.removeClass('filter-date-dropdown__calendar_open');        
                }
            });
        });

        $calendar.find('.date-picker-wrapper').append(
            '<button class="icon-link calendar__icon-link_action_clear js-calendar__icon-link_action_clear" type="button">' +
            buttonClear + 
            '</button><button class="icon-link icon-link_primary calendar__icon-link_action_apply js-calendar__icon-link_action_apply" type="button">' + 
            buttonApply + '</button>');
    
        if (firstDate && lastDate) {
            try {
                moment.locale(language);

                firstDate = moment(firstDate, 'DD.MM.YYYY').format('D MMM');
                lastDate = moment(lastDate, 'DD.MM.YYYY').format('D MMM');

                $this.data('dateRangePicker').setDateRange(firstDate, lastDate);
            } catch(e) {
                console.warn('Wrong date format');
            }            
        }
    });
});