//--------------- import scss -----------------------------

import '../../scss/main.scss';
import './search-room.scss';

//--------------- import libs -----------------------------

import "../../libs/jquery.maskedinput/jquery.maskedinput.min.js";
import "../../libs/jquery-ui-1.12.1.custom/jquery-ui.min.js";
import "../../libs/daterangepicker-master/moment.min.js";
import "../../libs/daterangepicker-master/daterangepicker.js";
import "../../libs/jquery.daterangepicker/jquery.daterangepicker.js";


import moment from 'moment'
import 'moment/locale/ru' 
moment.locale('ru');

//--------------- import common js -----------------------------

import "../../js/main.js";

//------------------ import blocks scripts -----------------------------

import "../../common.blocks/input/input.js";
import "../../common.blocks/slider-range/slider-range.js";
import "../../common.blocks/dropdown/dropdown.js";
import "../../common.blocks/checkbox-list/checkbox-list.js";
import "../../common.blocks/pagination/pagination.js";

//------------------ import components scripts -----------------------------

import "../../components/header/header.js";

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

  $('#search-room__date-search').data('dateRangePicker').setDateRange('19 авг.','23 авг.');

});