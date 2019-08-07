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
	$(this).parent().parent().children(".dropdown-ul-wrap").slideToggle(300, "linear").parent().toggleClass("dropdown_state_open");

});

$(".dropdown__button").on("click", function() {

	let $dropdown = $(this).parent().parent().parent().parent();
	let $textField = $dropdown.find(".dropdown__field span:first-child");
	let text = "";
	let t = "";
	let count = 0;
	let $numNode = $(this).parent().find(".dropdown__num");
	let num = $numNode.text() * 1;
	let $ulNode = $dropdown.find("ul");

	if ( !$(this).hasClass("dropdown__button_not-active") ) {
		if ( $(this).hasClass("dropdown__button_minus") ) {
			num = num - 1;
			$numNode.text(num);
			if ( num == 0 ) { $(this).addClass("dropdown__button_not-active") }
			if ( num == 98 ) { 
				$(this).parent().find(".dropdown__button_plus").removeClass("dropdown__button_not-active"); 
			}
		} else {
			num = num + 1;
			$numNode.text(num);
			if ( num == 99 ) { $(this).addClass("dropdown__button_not-active") }
			if ( num == 1 ) { 
				$(this).parent().find(".dropdown__button_minus").removeClass("dropdown__button_not-active"); 
			}
		}
	} else {
		return;
	}

	if ( $(this).hasClass("dropdown__button_plus") ) {
		$dropdown.find(".dropdown__link_clear").removeClass("hidden");
	} else {
		for ( let i = 0; i < $ulNode.children().length; i++ ) {
			count = count + $ulNode.children().eq(i).find(".dropdown__num").text()*1;
		}
		if ( count == 0 ) {
			$dropdown.find(".dropdown__link_clear").addClass("hidden");
		}
	}

	if ( $dropdown.hasClass("dropdown_choice_guests") ) {
		text = guestsCount();
	}
	if ( $dropdown.hasClass("dropdown_choice_furniture") ) {
		text = furnitureText();
	}

	$textField.text(text);


//-------funcs------

	function furnitureText() {
		for ( let i = 0; i < 3; i++ ) {
			t = $ulNode.children().eq(i).find(".dropdown__num").text();
			if (t != 0) {
				if ( t % 10 == 1 ) {
					switch (i) {
						case 0:
							text = text + t + " спальня, ";
							break;
						case 1:
							text = text + t + " кровать, ";
							break;
						case 2:
							text = text + t + " ванная комната, ";
							break;
					}
				} else if ( t % 10 >= 2 && t % 10 <= 4 ) {
					switch (i) {
						case 0:
							text = text + t + " спальни, ";
							break;
						case 1:
							text = text + t + " кровати, ";
							break;
						case 2:
							text = text + t + " ванные комнаты, ";
							break;
					}
				} else {
					switch (i) {
						case 0:
							text = text + t + " спален, ";
							break;
						case 1:
							text = text + t + " кроватей, ";
							break;
						case 2:
							text = text + t + " ванных комнат, ";
							break;
					}
				}
			}
		}
		text = text.slice(0, text.length - 2);
		return text;
	}

	function guestsText() {
		for ( let i = 0; i < 3; i++ ) {
			t = $ulNode.children().eq(i).find(".dropdown__num").text();
			if (t != 0) {
				if ( t % 10 == 1 ) {
					switch (i) {
						case 0:
							text = text + t + " взрослый, ";
							break;
						case 1:
							text = text + t + " ребенок, ";
							break;
						case 2:
							text = text + t + " младенец, ";
							break;
					}
				} else if ( t % 10 >= 2 && t % 10 <= 4 ) {
					switch (i) {
						case 0:
							text = text + t + " взрослых, ";
							break;
						case 1:
							text = text + t + " детей, ";
							break;
						case 2:
							text = text + t + " младенца, ";
							break;
					}
				} else {
					switch (i) {
						case 0:
							text = text + t + " взрослых, ";
							break;
						case 1:
							text = text + t + " детей, ";
							break;
						case 2:
							text = text + t + " младенцев, ";
							break;
					}
				}
			}
		}
		text = text.slice(0, text.length - 2);
		return text;
	}

	function guestsCount() {
		let count = $ulNode.children().eq(0).find(".dropdown__num").text()*1 + $ulNode.children().eq(1).find(".dropdown__num").text()*1;
		if ( count >= 5 && count <= 20 ) {
			count = count + " гостей";
		} else if ( count % 10 == 1 ) {
			count = count + " гость";
		} else if ( count % 10 >= 2 && count % 10 <= 4 ) {
			count = count + " гостя";
		} else if ( count == 0 ) {
			count = "Сколько гостей";
		} else {
			count = count + " гостей";
		}
		return count;	
	}

});

$(".dropdown__link_clear").on("click", function() {
	let $ulNode = $(this).parent().children("ul");
	let $liArr = $ulNode.children();

	for ( let i = 0; i < $liArr.length; i++ ) {
		$liArr.eq(i).children(".dropdown__num").text("0");
		$liArr.eq(i).children(".dropdown__button_minus").addClass("dropdown__button_not-active");	
	}

	$ulNode.parent().parent().children(".dropdown__field").text("Сколько гостей")
	$(this).addClass("hidden");
});

//----------------------------- Checkbox-list -------------------------------------

$(".checkbox-list__arrow").on("click", function() {
	$(this).parent().children("ul").slideToggle(300, "linear").parent().toggleClass("checkbox-list_state_open");
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