//--------------- import scss -----------------------------

import '../../scss/main.scss';
import './cards.scss';

//--------------- import libs -----------------------------

//import "../../libs/daterangepicker-master/moment.min.js";
//import "../../libs/daterangepicker-master/daterangepicker.js";
//import "../../libs/jquery.daterangepicker/jquery.daterangepicker.js";
import "../../libs/daterangepicker/jquery.daterangepicker.js";


import moment from 'moment'
import 'moment/locale/ru' 
moment.locale('ru');

//--------------- import common js -----------------------------

import "../../js/main.js";

//------------------ import blocks scripts -----------------------------

import "../../common.blocks/text-field/text-field.js";
//import "../../common.blocks/slider-range/slider-range.js";
import "../../common.blocks/dropdown/dropdown.js";
import "../../common.blocks/date-dropdown/date-dropdown.js";
import {setDropdownValues} from "../../common.blocks/dropdown/dropdown.js";
//import "../../common.blocks/expandable-checkbox-list/expandable-checkbox-list.js";
//import "../../common.blocks/pagination/pagination.js";
//import "../../common.blocks/like-button/like-button.js";

//------------------ import components scripts -----------------------------

//import "../../components/booking-card/booking-card.js";
//import "../../components/search-card/search-card.js";
//import "../../components/header/header.js";



$( document ).ready(function() {

    // Открытый календарь в карточках
    
/*     $('.cards__calendar').dateRangePicker({
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
        $(".td-checked").removeClass("td-checked");
    }); */

    
});