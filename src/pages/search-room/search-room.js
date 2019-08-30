//------------------ Imports ------------------------

import "../../scss/main.scss";
import "../../js/main.js";
 // var moment = require('moment');
 // moment().format();
 // import moment from 'moment'
 // import 'moment/locale/es' 
 // moment.locale('ru');
$( document ).ready(function() {


  $('#search-room__date-search').dateRangePicker({
    language: 'ru',
    singleMonth: true,
    showShortcuts: false,
    showTopbar: true,
    startOfWeek: 'monday',
    format: 'D MMM',
    separator: ' - ',
    hoveringTooltip: false,
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
      $('#search-room__date-search').data('dateRangePicker').clear();
      $(".td-checked").removeClass("td-checked td-first-day-selected-temp");
    });

    $('.calendar__link_apply').click(function(evt)
    {
      evt.stopPropagation();
      $('#search-room__date-search').data('dateRangePicker').close();
    });

  });

  $('#search-room__date-search').data('dateRangePicker').setDateRange('19-08-2019','23-08-2019');

});