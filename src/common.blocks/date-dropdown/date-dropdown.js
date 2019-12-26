$( document ).ready(function() {

    $('.js-date-dropdown').each( function() {

        let $this = $(this);
        let $first = $this.find('.date-dropdown__first-day input');
        let $last = $this.find('.date-dropdown__last-day input');
        let $calendar = $this.find('.date-dropdown__calendar');
        let firstDate = $this.find('.date-dropdown__first-day').attr('data-date') || false;
        let lastDate = $this.find('.date-dropdown__last-day').attr('data-date') || false;

        $this.dateRangePicker({
            language: 'ru',
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
            customArrowPrevSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_back</i></div>',
            customArrowNextSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_forward</i></div>',
            container: $calendar
        })
        
        // Cобытия "принять" и "очистить" создаются после открытия
        .bind('datepicker-opened', function() {

            $calendar.addClass('.date-dropdown__calendar_open');
    
            $this.find('.calendar__link_clear').click(function(evt) {
                evt.stopPropagation();
                $this.data('dateRangePicker').clear();
            });
    
            $this.find('.calendar__link_apply').click(function(evt) {
                evt.stopPropagation();
                $this.data('dateRangePicker').close();
                $calendar.removeClass('.date-dropdown__calendar_open');
            });

            $this.find('.date-dropdown__arrow').click(function(evt) {
                if ($calendar.hasClass('.date-dropdown__calendar_open')) {
                    evt.stopPropagation();
                    $this.data('dateRangePicker').close();
                    $calendar.removeClass('.date-dropdown__calendar_open');        
                }
            });
        });

        // если возможно, устанавливаем дату
        if (firstDate && lastDate) {
            try {
                $this.data('dateRangePicker').setDateRange(firstDate, lastDate);
            } catch(e) {
                console.warn('Wrong date format');
            }            
        }
    });
});
