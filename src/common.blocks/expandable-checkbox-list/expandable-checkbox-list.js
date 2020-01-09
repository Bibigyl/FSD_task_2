$( document ).ready(function() {
  $(".expandable-checkbox-list__arrow").on("click", function() {
    let $checkboxList = $(this).closest('.expandable-checkbox-list');
    $checkboxList.find('.expandable-checkbox-list__list').slideToggle(400);
    $checkboxList.toggleClass("expandable-checkbox-list_open");
  });
});