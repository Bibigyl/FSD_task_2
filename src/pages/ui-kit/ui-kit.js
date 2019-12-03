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
import "../../common.blocks/like-button/like-button.js";

//------------------ import components scripts -----------------------------

import "../../components/booking-card/booking-card.js";
import "../../components/search-card/search-card.js";
import "../../components/header/header.js";



$( document ).ready(function() {

    // Открытый календарь в карточках
    
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

    $('#ui-calendar').data('dateRangePicker').setDateRange('2019/08/19','2019/08/23');

    $('.calendar__link_clear').click(function(evt) {
        evt.stopPropagation();
        $('#ui-calendar').data('dateRangePicker').clear();
        $(".td-checked").removeClass("td-checked");
    });


    // Календарь на компонентах, два инпута

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
    })
    

    // Здесь события "принять" и "очистить" создаются только после открытия
    .bind('datepicker-opened', function() {

        $('.calendar__link_clear').click(function(evt) {
            evt.stopPropagation();
            $('#ui-date-search').data('dateRangePicker').clear();
            $("#ui-date-search .td-checked").removeClass("td-checked td-first-day-selected-temp");
        });

        $('.calendar__link_apply').click(function(evt) {
            evt.stopPropagation();
            $('#ui-date-search').data('dateRangePicker').close();
            $("#ui-date-search .td-checked").removeClass("td-checked td-first-day-selected-temp");
        });

    });
    
});




