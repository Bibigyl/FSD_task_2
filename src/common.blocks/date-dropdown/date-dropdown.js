$( document ).ready(function() {

    $('.date-dropdown').each( function() {

        $this = $(this);
        $first = $(this).find('.date-dropdown__first-day').find('input');
        $last = $(this).find('.date-dropdown__last-day').find('input');

        $(this).dateRangePicker({
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
        })
        
    
        // Cобытия "принять" и "очистить" создаются только после открытия
        .bind('datepicker-opened', function() {
    
            $('.date-picker-wrapper').find('.calendar__link_clear').click(function(evt) {
                evt.stopPropagation();
                $('.date-dropdown').data('dateRangePicker').clear();
            });
    
            $('.date-picker-wrapper').find('.calendar__link_apply').click(function(evt) {
                evt.stopPropagation();
                $('.date-dropdown').data('dateRangePicker').close();
            });
        });
    });
});
