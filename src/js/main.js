//--------------- import libs -----------------------------

import "../libs/jquery.maskedinput/jquery.maskedinput.min.js";
import "../libs/jquery-ui-1.12.1.custom/jquery-ui.min.js";

// ------------------ temmp -----------------------------

$( document ).ready(function() {
  
$(".input_masked_date").mask('99/99/9999',{placeholder:"ДД/ММ/ГГГГ"});




//-----------------Slider--------------------------

// Initiate Slider
$('#slider-range').slider({
  range: true,
  min: 200,
  max: 15500,
  step: 200,
  values: [5000, 10000]
});

// Apply initial values to the range container
$('.range').html('<span class="range-value">' + $('#slider-range').slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + $("#slider-range").slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span>');

$('#slider-range').slider({
  slide: function(event, ui) {

    // Update the range container values upon sliding

    $('.range').html('<span class="range-value">' + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '<sup>₽</sup></span>');

    // Get old value
    var previousVal = parseInt($(this).data('value'));

    // Save new value
    $(this).data({
      'value': parseInt(ui.value)
    });

  }

});


//---------------------------Custom pagination -------------------------------



//----------------------------- Dropdown -------------------------------------

$(".dropdown__arrow").on("click", function() {
	$(this).parent().children("ul").slideToggle(300, "linear").parent().parent().toggleClass("dropdown_state_open");

});

$(".dropdown__button").on("click", function() {
	var numNode = $(this).parent().find(".dropdown__num");
	var num = numNode.text() * 1;
	if ( !$(this).hasClass("dropdown__button_not-active") ) {
		if ( $(this).hasClass("dropdown__button_minus") ) {
			num = num - 1;
			numNode.text(num);
			if ( num == 0 ) { $(this).addClass("dropdown__button_not-active") }
			if ( num == 98 ) { 
				$(this).parent().find(".dropdown__button_plus").removeClass("dropdown__button_not-active"); 
			}
		} else {
			num = num + 1;
			numNode.text(num);
			if ( num == 99 ) { $(this).addClass("dropdown__button_not-active") }
			if ( num == 1 ) { 
				$(this).parent().find(".dropdown__button_minus").removeClass("dropdown__button_not-active"); 
			}
		}
	}
});

});

//---------------------------Pagination -------------------------------

var totalElements = 300; // elements to show on the page
var perPage = 20; // how many elements need to show per page
var visibleLinks = 4; // how many links need to be visible;

var linksCount = Math.ceil(totalElements / perPage); // pagination links count;
var paginationContainer = $(".pagination");
var paginationBody = $(".paginationBody"); // where the pagination will be append

// create the first array of links
const paginationArray = [...Array(linksCount > visibleLinks ? visibleLinks + 1 : linksCount).keys()].slice(1); 
paginationArray.splice(visibleLinks - 1, 1, linksCount);

// Pagination init function
(function paginationInit(currentPage = 1) {
  if (linksCount > visibleLinks) {
    if ( linksCount - currentPage < visibleLinks - 1 && currentPage !== paginationArray[1] ) {
      if (linksCount - currentPage >= visibleLinks - 2) {
        currentPage = currentPage - 1;
      } else if(currentPage !== paginationArray[paginationArray.length - 2] && 
                currentPage !== paginationArray[paginationArray.length - 1]){
        return;        
      }else {
        currentPage = currentPage - 1 - (visibleLinks - 2 - (linksCount - currentPage));
      }
    } else if (currentPage !== 1) {
      if (
        currentPage > paginationArray[1] &&
        currentPage < paginationArray[paginationArray.length - 2]
      ) {
        return;
      } else if ( currentPage === paginationArray[1] ){
        if( currentPage - (visibleLinks - 2) >= -1 ) {
          currentPage = currentPage - (visibleLinks - 2) >= 2 ? currentPage - (visibleLinks - 2) : 1;
        }else{
          currentPage = 1;
        }
      } else {
        currentPage -= 1;
      }
    } else {
      currentPage = 1;
    }
    paginationArray.splice(1, paginationArray.length - 2,...Array(visibleLinks - 2)
        .fill(currentPage)
        .map((e, i) => (e += i + 1))
    );
  }
  
  paginationContainer.html("");
  
  paginationArray.map(e => {
    paginationContainer.append("<a href=" + e + ">" + e + "</a>");
  });
  if(paginationArray[1] > 2) {
    $(paginationContainer.children("a")[1]).before("<span>...</span>");
  }
  if(paginationArray[paginationArray.length - 2] < linksCount - 1) {
    $(paginationContainer.children("a")[paginationArray.length - 1]).before('<span>...</span>')
  }
  paginationContainer.children("a").on("click", function(e) {
    e.preventDefault();
    paginationInit(+$(e.target).attr("href"));
  });
})();