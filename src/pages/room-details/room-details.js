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

import "../../common.blocks/dropdown/dropdown.js";
import "../../common.blocks/date-dropdown/date-dropdown.js";
import "../../common.blocks/like-button/like-button.js";
import "../../common.blocks/donut/donut.js";
import {donutDiagram} from '../../common.blocks/donut/donut.js'

//------------------ import components scripts -----------------------------

import "../../components/header/header.js";



$( document ).ready(function() {
    let donutNode = document.querySelector('.room-details__diagram');
    donutDiagram( [520, 260, 260, 0], donutNode);
});

