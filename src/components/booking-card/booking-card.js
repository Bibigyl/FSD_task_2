$( document ).ready(function() {

    $('#booking-card__date-search').dateRangePicker({
        language: 'ru',
        singleMonth: true,
        showShortcuts: false,
        showTopbar: true,
        startOfWeek: 'monday',
        format: 'DD.MM.YYYY',
        hoveringTooltip: false,
        getValue: function()
        {
            if ($('#booking-card__first-date').val() && $('#booking-card__last-date').val() )
                return $('#booking-card__first-date').val() + ' to ' + $('#booking-card__last-date').val();
            else
                return '';
        },
        setValue: function(s,s1,s2)
        {
            $('#booking-card__first-date').val(s1);
            $('#booking-card__last-date').val(s2);
        },
        customArrowPrevSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_back</i></div>',
        customArrowNextSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_forward</i></div>',

    }).bind('datepicker-opened', function() {

        $('.calendar__link_clear').click(function(evt)
        {
            evt.stopPropagation();
            $('#booking-card__date-search').data('dateRangePicker').clear();
            $(".td-checked").removeClass("td-checked td-first-day-selected-temp");
        });

        $('.calendar__link_apply').click(function(evt)
        {
            evt.stopPropagation();
            $('#booking-card__date-search').data('dateRangePicker').close();
            $(".td-checked").removeClass("td-checked td-first-day-selected-temp");
        });
    });

});