$(document).ready( function() {

  $('#search-card__date-search').dateRangePicker({
    language: 'ru',
    singleMonth: true,
    showShortcuts: false,
    showTopbar: true,
    startOfWeek: 'monday',
    format: 'DD.MM.YYYY',
    hoveringTooltip: false,
    getValue: function() {
      if ($('#search-card__first-date').val() && $('#search-card__last-date').val() )
        return $('#search-card__first-date').val() + ' to ' + $('#search-card__last-date').val();
      else
        return '';
    },
    setValue: function(s,s1,s2) {
      $('#search-card__first-date').val(s1);
      $('#search-card__last-date').val(s2);
    },
    customArrowPrevSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_back</i></div>',
    customArrowNextSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_forward</i></div>',
  }
  
  ).bind('datepicker-opened', function() {

    $('.calendar__link_clear').click(function(evt) {
      evt.stopPropagation();
      $('#search-card__date-search').data('dateRangePicker').clear();
      $(".td-checked").removeClass("td-checked td-first-day-selected-temp");
    });

    $('.calendar__link_apply').click(function(evt) {
      evt.stopPropagation();
      $('#search-card__date-search').data('dateRangePicker').close();
    });

  });

});