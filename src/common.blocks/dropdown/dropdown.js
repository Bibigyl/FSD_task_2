$( document ).ready(function() {

    $(".dropdown__arrow").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.dropdown');

            $dropdown.children(".dropdown__list").slideToggle(200, "linear");$dropdown.toggleClass("dropdown_open");
        });
    });


    $(".dropdown__button_to-clear").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.dropdown');
            let initialText = $dropdown.attr('initialText');
            let $list = $dropdown.find(".dropdown__list");
            let $liArr = $list.find('li');

            for ( let i = 0; i < $liArr.length; i++ ) {
                $liArr.eq(i).children(".dropdown__num").text("0");
                $liArr.eq(i).children(".dropdown__button_minus").addClass("dropdown__button_not-active"); 
            }

            $dropdown.find(".dropdown__field span").text(initialText)
            $(this).addClass("hidden");
        });
    });


    
    $(".dropdown__button_to-apply").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.dropdown');

            $dropdown.find('.dropdown__list').slideToggle(200, "linear").parent().toggleClass("dropdown_open");
        });
    })



    $(".dropdown__button").each(function() {
        $(this).on("click", function() {

            let $dropdown = $(this).closest('.dropdown');
            let initialText = $dropdown.attr('initialText');
            let $textField = $dropdown.find(".dropdown__text");
            let count = 0;
            let $numNode = $(this).parent().find(".dropdown__num");
            let num = $numNode.text() * 1;
            let $list = $dropdown.find(".dropdown__list");
            let $ul = $list.children('ul');
    
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
                $dropdown.find(".dropdown__button_to-clear").removeClass("hidden");
            } else {
                for ( let i = 0; i < $ul.children().length; i++ ) {
                    count = count + $ul.children().eq(i).find(".dropdown__num").text()*1;
                }
                if ( count == 0 ) {
                    $dropdown.find(".dropdown__button_to-clear").addClass("hidden");
                }
            }
    
            $textField.text(newText());
    
    
            function newText() {
                let $li;
                let newText = '';
    
                $ul.children(".dropdown__item").each(function() {
                    $li = $(this);
                    if ($li.find('.dropdown__num').text() != '0') {
                        newText = newText + $li.find('.dropdown__num').text() + ' ' + $li.attr('item') + ', ';
                    }
                });
    
                newText = newText.slice(0, -2) || initialText;
                return newText;
            } 
        });
    });
});

function setDropdownValues($node, vals) {
    let $items = $node.find('.dropdown__item');

    vals.forEach(function(item, i) {
        for (let r = 1; r <= +item; r++) {
            $items.eq(i).find('.dropdown__button_plus').trigger('click');
        }        
    })
}

export {setDropdownValues};