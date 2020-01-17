//--------------- import scss -----------------------------

import '../../scss/main.scss';
import './room-details.scss';

//--------------- import libs -----------------------------

import "../../libs/daterangepicker/jquery.daterangepicker.js";

import moment from 'moment'
import 'moment/locale/ru' 
moment.locale('ru');

//--------------- import common js -----------------------------

import "../../js/main.js";

//------------------ import blocks scripts -----------------------------

import "../../blocks/dropdown/dropdown.js";
import "../../blocks/date-dropdown/date-dropdown.js";
import "../../blocks/like-button/like-button.js";
import "../../blocks/donut/donut.js";
import {donutDiagram} from '../../blocks/donut/donut.js'

//------------------ import components scripts -----------------------------

import "../../pages-blocks/header/header.js";



$( document ).ready(function() {
    let donutNode = document.querySelector('.room-details__diagram');
    donutDiagram( [520, 260, 260, 0], donutNode);
});

