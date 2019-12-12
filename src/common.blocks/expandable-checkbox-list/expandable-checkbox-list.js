$( document ).ready(function() {
  $(".expandable-checkbox-list__arrow").on("click", function() {
    $(this).parent().toggleClass("expandable-checkbox-list_open");
  });
});