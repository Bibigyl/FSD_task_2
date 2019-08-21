$( document ).ready(function() {
  $(".checkbox-list__arrow").on("click", function() {
    $(this).parent().children("ul").slideToggle(300, "linear").parent().toggleClass("checkbox-list_state_open");
  });
});