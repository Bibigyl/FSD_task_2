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

import "../../blocks/text-field/text-field.js";
import "../../blocks/dropdown/dropdown.js";
import "../../blocks/date-dropdown/date-dropdown.js";


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

    // Создаем кнопки "очистить" и "принять"
    $('.calendar-wrap').find('.date-picker-wrapper').append(
        '<button class="icon-link calendar__icon-link_action_clear js-calendar__icon-link_action_clear">Очистить</button><button class="icon-link icon-link_primary calendar__icon-link_action_apply js-calendar__icon-link_action_apply">Применить</button>'
    );

    $('.cards__calendar').data('dateRangePicker').setDateRange('2019/08/19','2019/08/23');

    $('.js-calendar__icon-link_action_clear').click(function(evt) {
        evt.stopPropagation();
        $('.cards__calendar').data('dateRangePicker').clear();
    });

});