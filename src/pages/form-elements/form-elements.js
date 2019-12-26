//--------------- import scss -----------------------------

import '../../scss/main.scss';
import './form-elements.scss';

//--------------- import libs -----------------------------

import "../../libs/jquery-ui-1.12.1.custom/jquery-ui.min.js";
//import "../../libs/daterangepicker-master/moment.min.js";
//import "../../libs/daterangepicker-master/daterangepicker.js";
import "../../libs/daterangepicker/jquery.daterangepicker.js";


import moment from 'moment'
import 'moment/locale/ru' 
moment.locale('ru');
moment().format();

//--------------- import common js -----------------------------

import "../../js/main.js";

//------------------ import blocks scripts -----------------------------

import "../../common.blocks/text-field/text-field.js";
import "../../common.blocks/slider-range/slider-range.js";
import "../../common.blocks/dropdown/dropdown.js";
import "../../common.blocks/date-dropdown/date-dropdown.js";
import "../../common.blocks/filter-date-dropdown/filter-date-dropdown.js";
import {setDropdownValues} from "../../common.blocks/dropdown/dropdown.js";
import "../../common.blocks/expandable-checkbox-list/expandable-checkbox-list.js";
import "../../common.blocks/pagination/pagination.js";
import "../../common.blocks/like-button/like-button.js";



$(document).ready(function() {
    setDropdownValues($('.dropdown-wrap-2 .dropdown'), [2, 2, 0]);
    setDropdownValues($('.dropdown-wrap-3 .dropdown'), [2, 2, 0]);
    setDropdownValues($('.dropdown-wrap-5 .dropdown'), [2, 1, 0]);
})
