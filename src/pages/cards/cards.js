//--------------- import scss -----------------------------

import '../../scss/main.scss';
import './cards.scss';

//--------------- import libs -----------------------------

import "../../libs/daterangepicker/jquery.daterangepicker.js";

import moment from 'moment'
import 'moment/locale/ru' 
moment.locale('ru');

//--------------- import common js -----------------------------

import "../../js/main.js";

//---------------- import blocks scripts -----------------------------

import "../../common.blocks/text-field/text-field.js";
import "../../common.blocks/dropdown/dropdown.js";
import "../../common.blocks/date-dropdown/date-dropdown.js";


$(document).ready(function() {

    // Открытый календарь в карточках
    
    $('.cards__calendar').dateRangePicker({
        language: 'ru',
        singleMonth: true,
        showShortcuts: false,
        showTopbar: false,
        startOfWeek: 'monday',
        hoveringTooltip: false,

        customArrowPrevSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_back</i></div>',
        customArrowNextSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_forward</i></div>',

        inline: true,
        container: '.calendar-wrap',
        alwaysOpen: true, 
    });

    $('.cards__calendar').data('dateRangePicker').setDateRange('2019/08/19','2019/08/23');

    $('.calendar__link_clear').click(function(evt) {
        evt.stopPropagation();
        $('.cards__calendar').data('dateRangePicker').clear();
    });

});