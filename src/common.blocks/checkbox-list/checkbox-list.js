$( document ).ready(function() {
  $(".checkbox-list__arrow").on("click", function() {
    $(this).parent().toggleClass("checkbox-list_open");
  });
});