$( document ).ready(function() {
  $(".expandable-checkbox-list__arrow").on("click", function() {
    $(this)
    .parent().find('.checkbox-buttons').slideToggle(400)
    .parent().toggleClass("expandable-checkbox-list_open");
  });
});