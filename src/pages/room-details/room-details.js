//--------------- import libs -----------------------------

import "../../libs/jquery.maskedinput/jquery.maskedinput.min.js";
import "../../libs/daterangepicker-master/moment.min.js";
import "../../libs/jquery.daterangepicker/jquery.daterangepicker.js";


import moment from 'moment'
import 'moment/locale/ru' 
moment.locale('ru');

//------------------ import blocks scripts -----------------------------

import "../../common.blocks/dropdown/dropdown.js";
import "../../common.blocks/like-button/like-button.js";
import "../../common.blocks/donut/donut.js";
import {donutColors, donutDiagram} from '../../common.blocks/donut/donut.js'

//------------------ import components scripts -----------------------------

import "../../components/booking-card/booking-card.js";
import "../../components/header/header.js";



$( document ).ready(function() {
    donutDiagram( [520, 260, 260, 0], document.getElementById('donut'));
});

