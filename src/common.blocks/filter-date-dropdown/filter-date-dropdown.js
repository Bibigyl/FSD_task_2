import moment from 'moment'
import 'moment/locale/ru' 
moment.locale('ru');
moment().format();

$( document ).ready(function() {

    $('.js-filter-date-dropdown').each( function() {

        let $this = $(this);
        let $input = $this.find('input');
        let $calendar = $this.find('.filter-date-dropdown__calendar');
        let firstDate = $this.attr('data-first-date') || false;
        let lastDate = $this.attr('data-last-date') || false;

        $this.dateRangePicker({
            language: 'ru',
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
            customArrowPrevSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_back</i></div>',
            customArrowNextSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_forward</i></div>',
            container: $calendar
        });
        
        .bind('datepicker-opened', function() {
    
            $calendar.addClass('filter-date-dropdown__calendar_open');
    
            $this.find('.calendar__link_clear').click(function(evt) {
                evt.stopPropagation();
                $this.data('dateRangePicker').clear();
            });
    
            $this.find('.calendar__link_apply').click(function(evt) {
                evt.stopPropagation();
                $this.data('dateRangePicker').close();
                $calendar.removeClass('filter-date-dropdown__calendar_open');
            });

            $this.find('.filter-date-dropdown__arrow').click(function(evt) {
                if ($calendar.hasClass('filter-date-dropdown__calendar_open')) {
                    evt.stopPropagation();
                    $this.data('dateRangePicker').close();
                    $calendar.removeClass('filter-date-dropdown__calendar_open');        
                }
            });
        });
    
        if (firstDate && lastDate) {
            try {
                firstDate = moment(firstDate, 'DD.MM.YYYY').format('D MMM');
                lastDate = moment(lastDate, 'DD.MM.YYYY').format('D MMM');

                $this.data('dateRangePicker').setDateRange(firstDate, lastDate);
            } catch(e) {
                console.warn('Wrong date format');
            }            
        }
    });
});