$( document ).ready(function() {

  const animationDurationInMs = 400;

  $(".js-expandable-checkbox-list__arrow").on("click", function() {
    let $checkboxList = $(this).closest('.js-expandable-checkbox-list');
    $checkboxList.find('.js-expandable-checkbox-list__list').slideToggle(animationDurationInMs);
    $checkboxList.toggleClass("expandable-checkbox-list_open");
  });
});