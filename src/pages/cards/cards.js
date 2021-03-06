//--------------- import scss -----------------------------

import '../../scss/main.scss';
import './cards.scss';

//--------------- import libs -----------------------------

import 'jquery-date-range-picker/dist/jquery.daterangepicker.js';

import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru');

//--------------- import common js -----------------------------

import '../../js/main.js';

//---------------- import blocks scripts -----------------------------

import '../../blocks-base/text-field/text-field.js';
import '../../blocks-base/counted-item/counted-item.js';
import '../../blocks-base/dropdown/dropdown.js';
import '../../blocks-base/date-dropdown/date-dropdown.js';
import '../../blocks-base/slider/slider.js';

$(document).ready(function () {

    $('.js-cards__calendar').dateRangePicker({
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

    $('.calendar-wrap').find('.date-picker-wrapper').append(
        '<button class="icon-link calendar__icon-link_action_clear js-calendar__icon-link_action_clear">Очистить</button><button class="icon-link icon-link_primary calendar__icon-link_action_apply js-calendar__icon-link_action_apply">Применить</button>'
    );

    $('.js-cards__calendar').data('dateRangePicker').setDateRange('2019/08/19', '2019/08/23');

    $('.js-cards__calendar-wrap .js-calendar__icon-link_action_clear').click(function (evt) {
        evt.stopPropagation();
        $('.js-cards__calendar').data('dateRangePicker').clear();
    });

});