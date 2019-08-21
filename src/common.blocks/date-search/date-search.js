
/* ----------------------- Its an example, how date-search works. 
If 2 inputs: The wraper needs id like #date-search, children also need id like #first-date, #last-date

$('#date-search').dateRangePicker({
  language: 'ru',
  singleMonth: true,
  showShortcuts: false,
  showTopbar: true,
  startOfWeek: 'monday',
  format: 'DD.MM.YYYY',
  hoveringTooltip: false,
  getValue: function()
  {
    if ($('#first-date').val() && $('#last-date').val() )
      return $('#first-date').val() + ' to ' + $('#last-date').val();
    else
      return '';
  },
  setValue: function(s,s1,s2)
  {
    $('#first-date').val(s1);
    $('#last-date').val(s2);
  },
  customArrowPrevSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_back</i></div>',
  customArrowNextSymbol: '<div class="calendar__arrow arrow"><i class="material-icons">arrow_forward</i></div>',

}).bind('datepicker-opened', function() {

    var dayClickCounter = 0;

    $(".month-wrapper .day").on("click", function() {
      dayClickCounter += 1;
      if ( dayClickCounter == 1 ) {
        $(this).parent().addClass("td-first-day-selected-temp");
      } else if ( dayClickCounter == 2 ) {
        $(this).parent().parent().parent().find(".td-first-day-selected-temp").removeClass("td-first-day-selected-temp");
        dayClickCounter = 0;
      }
    });

    $('.calendar__link_clear').click(function(evt)
    {
      evt.stopPropagation();
      $('#date-search').data('dateRangePicker').clear();
      $("#date-search .td-checked").removeClass("td-checked td-first-day-selected-temp");
    });

    $('.calendar__link_apply').click(function(evt)
    {
      evt.stopPropagation();
      $('#date-search').data('dateRangePicker').close();
      $("#date-search .td-checked").removeClass("td-checked td-first-day-selected-temp");
    });
  });

});

*/