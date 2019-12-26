$( document ).ready(function() {
  $(".expandable-checkbox-list__arrow").on("click", function() {
    $(this)
    .parent().find('.expandable-checkbox-list__list').slideToggle(400)
    .parent().toggleClass("expandable-checkbox-list_open");
  });
});