$( document ).ready(function() {

  const ANIMATION_DURATION_MS = 400;

  $(".js-expandable-checkbox-list__arrow").on("click", function() {
    let $checkboxList = $(this).closest('.js-expandable-checkbox-list');
    $checkboxList.find('.js-expandable-checkbox-list__list').slideToggle(ANIMATION_DURATION_MS);
    $checkboxList.toggleClass("expandable-checkbox-list_open");
  });
});