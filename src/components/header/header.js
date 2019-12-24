//Checks all checkboxs triggering all CSS transitions 
function check (status) {
  $("#menu__button").checked = status;

  if(status){
    var uncheck = setTimeout(function() { 
      check(false);
    }, 2000);
  }
  
}


// Triggers demonstration on button click
$("#menu__button").onclick = function () {
  check(true);
};

// Flashes menus on load
document.addEventListener("DOMContentLoaded", function(event) { 
  check(true);
});

$("#menu__button").on("click", function() {
	$(this).parent().children(".mobil-menu").slideToggle(300, "linear").css("display", "flex");
})


$(document).ready(function(){
  $(".header__hamburger").click(function(){
    $(this).toggleClass("header__hamburger_active");
  });
});