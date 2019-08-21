//------------------ Imports ------------------------

import "../../scss/main.scss";
import "../../js/main.js";

$( document ).ready(function() {
  
  $('#ui-calendar').dateRangePicker({
    language: 'ru',
    singleMonth: true,
    showShortcuts: false,
    showTopbar: false,
    startOfWeek: 'monday',
    hoveringTooltip: false,

    customArrowPrevSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_back</i></div>',
    customArrowNextSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_forward</i></div>',

    inline: true,
    container: '#ui-calendar-card',
    alwaysOpen: true, 
  });


  $('#ui-calendar').data('dateRangePicker').setDateRange('2019-08-19','2019-08-23');

  var calendarDayClickCounter = 0;

  $(".day").on("click", function() {

    calendarDayClickCounter += 1;
    if ( calendarDayClickCounter == 1 ) {
      $(this).parent().addClass("td-first-day-selected-temp");
    } else if ( calendarDayClickCounter == 2 ) {
      $(this).parent().parent().parent().find(".td-first-day-selected-temp").removeClass("td-first-day-selected-temp");
      calendarDayClickCounter = 0;
    }
  });

  $('.calendar__link_clear').click(function(evt)
  {
    evt.stopPropagation();
    $('#ui-calendar').data('dateRangePicker').clear();
    $(".td-checked").removeClass("td-checked td-first-day-selected-temp");
  });


  $('#ui-date-search').dateRangePicker({
    language: 'ru',
    singleMonth: true,
    showShortcuts: false,
    showTopbar: true,
    startOfWeek: 'monday',
    format: 'DD.MM.YYYY',
    hoveringTooltip: false,
    getValue: function()
    {
      if ($('#ui-first-date').val() && $('#ui-last-date').val() )
        return $('#ui-first-date').val() + ' to ' + $('#ui-last-date').val();
      else
        return '';
    },
    setValue: function(s,s1,s2)
    {
      $('#ui-first-date').val(s1);
      $('#ui-last-date').val(s2);
    },
    customArrowPrevSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_back</i></div>',
    customArrowNextSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_forward</i></div>',
  }).bind('datepicker-opened', function() {

    var dayClickCounter = 0;

    $(".month-wrapper .day").on("click", function() {
      dayClickCounter += 1;
      if ( dayClickCounter == 1 ) {
        $(this).parent().addClass("td-first-day-selected-temp");
      } else if ( dayClickCounter == 2 ) {
        $(this).parent().parent().parent().find(".td-first-day-selected-temp").removeClass("td-first-day-selected-temp");
        dayClickCounter = 0;
      }
    });

    $('.calendar__link_clear').click(function(evt)
    {
      evt.stopPropagation();
      $('#ui-date-search').data('dateRangePicker').clear();
      $("#ui-date-search .td-checked").removeClass("td-checked td-first-day-selected-temp");
    });

    $('.calendar__link_apply').click(function(evt)
    {
      evt.stopPropagation();
      $('#ui-date-search').data('dateRangePicker').close();
      $("#ui-date-search .td-checked").removeClass("td-checked td-first-day-selected-temp");
    });
  });
  
});




