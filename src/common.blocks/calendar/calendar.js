$( document ).ready(function() {


});


//----------- Сделать позже? ---------------


// var firstClickTime = 0;
// var firstClickEl;

// $(".day").on("mouseenter", function() {
//  alert("tit");
//  var thisTime = $(this).attr("time");
  
//  if ( !firstClickTime ) {
//    alert("первый клик пуст");
//    return;
//  } else {
//    if ( $(this).hasClass("checked") ) return;

//    firstClickEl = $(this).parent().parent().parent().find("div[time='" + firstClickTime + "']");
//    console.log(firstClickEl.text());
//    if ( !firstClickEl.text() ) {
//      console.log("firstClickEl.text()");
//      if ( firstClickTime < thisTime ) {
//        $(this).parent().addClass("td-hovering-forward");
//      } else {
//        $(this).parent().addClass("td-hovering-back");
//      }
//    }

//    if ( firstClickTime > thisTime ) {
//      $(this).parent().addClass("td-hovering-back");
//      $(this).parent().parent().parent().find(".td-selected-first").removeClass("td-selected-first").addClass("td-selected-last");
//    } else if ( firstClickTime < thisTime ) {
//      $(this).parent().addClass("td-hovering-forward");
//      $(this).parent().parent().parent().find(".td-selected-last").removeClass("td-selected-last").addClass("td-selected-first");
//    }
//  }
// });




// $(".month-wrapper .day").on("mouseleave", function() {
//    $(this).parent().removeClass("td-hovering-forward td-hovering-back");
// });

// $(".month-wrapper .day").on("click", function() {

//  //-----3 строчки мусор
//  //  var firstClickEl = $("td div[time='" + firstClickTime + "']");
//  // firstClickEl.css("background","red")
//  // alert(firstClickEl.text());

//  if ( !firstClickTime ) {
//    $(this).parent().addClass("td-selected-first");
//    firstClickTime = $(this).attr("time");
//  } else {
//    alert(firstClickTime);
//    $(this).parent().parent().parent().find(".td-selected-first").removeClass("td-selected-first");
//    $(this).parent().parent().parent().find(".td-selected-last").removeClass("td-selected-last");
//    firstClickTime = false;
//  }
// });


