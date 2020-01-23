$( document ).ready(function() {
  $(".js-expandable-checkbox-list__arrow").on("click", function() {
    let $checkboxList = $(this).closest('.js-expandable-checkbox-list');
    $checkboxList.find('.js-expandable-checkbox-list__list').slideToggle(400);
    $checkboxList.toggleClass("expandable-checkbox-list_open");
  });
});