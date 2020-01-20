import "jquery-date-range-picker/dist/jquery.daterangepicker.js";

import moment from 'moment'
import 'moment/locale/ru' 
moment.locale('ru');


$( document ).ready(function() {

    $('.js-date-dropdown').each( function() {

        let $this = $(this);
        let $first = $this.find('.js-date-dropdown__date_order_first input');
        let $last = $this.find('.js-date-dropdown__date_order_last input');
        let $calendar = $this.find('.js-date-dropdown__calendar');
        
        let firstDate = $this.find('.js-date-dropdown__date_order_first').attr('data-date') || false;
        let lastDate = $this.find('.js-date-dropdown__date_order_last').attr('data-date') || false;
        let language = $this.attr('data-language');
        let buttonClear = $this.attr('data-button-to-clear');
        let buttonApply = $this.attr('data-button-to-apply');

        $this.dateRangePicker({
            language: language,
            singleMonth: true,
            showShortcuts: false,
            showTopbar: true,
            startOfWeek: 'monday',
            format: 'DD.MM.YYYY',
            hoveringTooltip: false,
            setValue: function(s,s1,s2) {
                $first.val(s1);
                $last.val(s2);
            },
            inline: true,
            customArrowPrevSymbol: '<div class="calendar__arrow js-calendar__arrow"><i class="material-icons">arrow_back</i></div>',
            customArrowNextSymbol: '<div class="calendar__arrow js-calendar__arrow"><i class="material-icons">arrow_forward</i></div>',
            container: $calendar
        });
        
        // Cобытия "принять" и "очистить" создаются после открытия
        $this.bind('datepicker-opened', function() {

            $calendar.addClass('.date-dropdown__calendar_open');
    
            $this.find('.js-calendar__icon-link_action_clear').click(function(evt) {
                evt.stopPropagation();
                $this.data('dateRangePicker').clear();
            });
    
            $this.find('.js-calendar__icon-link_action_apply').click(function(evt) {
                evt.stopPropagation();
                $this.data('dateRangePicker').close();
                $calendar.removeClass('.date-dropdown__calendar_open');
            });

            $this.find('.date-dropdown__arrow').click(function(evt) {
                if ($calendar.hasClass('.date-dropdown__calendar_open')) {
                    evt.stopPropagation();
                    $this.data('dateRangePicker').close();
                    $calendar.removeClass('.date-dropdown__calendar_open');        
                }
            });
        });

        // Создаем кнопки "очистить" и "принять"
        $calendar.find('.date-picker-wrapper').append(
            '<button class="icon-link calendar__icon-link_action_clear js-calendar__icon-link_action_clear" type="button">' +
            buttonClear + 
            '</button><button class="icon-link icon-link_primary calendar__icon-link_action_apply js-calendar__icon-link_action_apply" type="button">' + 
            buttonApply + '</button>');


        // Если возможно, устанавливаем дату
        if (firstDate && lastDate) {
            try {
                $this.data('dateRangePicker').setDateRange(firstDate, lastDate);
            } catch(e) {
                console.warn('Wrong date format');
            }            
        }

        // Ввод даты вручную
        $first.on('blur', inputOnBlur);
        $last.on('blur', inputOnBlur);

        $first.on('keypress', inputOnKeypress);
        $last.on('keypress', inputOnKeypress);

        function inputOnBlur() {
            if ( $first.val() && $last.val() ) {
                try {
                    $this.data('dateRangePicker').setDateRange($first.val(), $last.val());
                    $this.data('dateRangePicker').close();
                } catch(e) {
                    console.warn('Incorrect dates');
                }      
            }
        }

        function inputOnKeypress(event) {
            if (event.keyCode == 13) {
                inputOnBlur();
            }
        }
    });
});
