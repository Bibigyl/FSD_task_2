$( document ).ready(function() {

    $(".js-dropdown__arrow").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.children(".js-dropdown__list").slideToggle(200, "linear");$dropdown.toggleClass("dropdown_open");
        });
    });


    $(".js-dropdown__button_action_clear").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');
            let initialText = $dropdown.attr('data-initial-text');
            let $list = $dropdown.find(".js-dropdown__list");
            let $liArr = $list.find('.js-dropdown__item');

            for ( let i = 0; i < $liArr.length; i++ ) {
                $liArr.eq(i).children(".js-dropdown__number").text("0");
                $liArr.eq(i).children(".js-dropdown__button_action_subtrack").addClass("dropdown__button_not-active"); 
            }

            $dropdown.find(".js-dropdown__text").text(initialText)
            $(this).addClass("dropdown__button_hidden");
        });
    });


    
    $(".js-dropdown__button_action_apply").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.find('.js-dropdown__list').slideToggle(200, "linear").parent().toggleClass("dropdown_open");
        });
    })



    $(".js-dropdown__button_to-change-quantity").each(function() {
        $(this).on("click", function() {

            let $dropdown = $(this).closest('.js-dropdown');
            let initialText = $dropdown.attr('data-initial-text');
            let $textField = $dropdown.find(".js-dropdown__text");
            let count = 0;
            let $numNode = $(this).parent().find(".js-dropdown__number");
            let num = $numNode.text() * 1;
            let $list = $dropdown.find(".js-dropdown__list");
            let $ul = $list.children('.js-dropdown__items');
    
            if ( !$(this).hasClass("dropdown__button_not-active") ) {
                if ( $(this).hasClass("js-dropdown__button_action_subtrack") ) {
                    num = num - 1;
                    $numNode.text(num);
                    if ( num == 0 ) { $(this).addClass("dropdown__button_not-active") }
                    if ( num == 98 ) { 
                        $(this).parent().find(".js-dropdown__button_action_add").removeClass("dropdown__button_not-active"); 
                    }
                } else {
                    num = num + 1;
                    $numNode.text(num);
                    if ( num == 99 ) { $(this).addClass("dropdown__button_not-active") }
                    if ( num == 1 ) { 
                        $(this).parent().find(".js-dropdown__button_action_subtrack").removeClass("dropdown__button_not-active"); 
                    }
                }
            } else {
                return;
            }
    
            if ( $(this).hasClass("dropdown__button_action_add") ) {
                $dropdown.find(".js-dropdown__button_action_clear").removeClass("dropdown__button_hidden");
            } else {
                for ( let i = 0; i < $ul.children().length; i++ ) {
                    count = count + $ul.children().eq(i).find(".dropdown__number").text()*1;
                }
                if ( count == 0 ) {
                    $dropdown.find(".js-dropdown__button_action_clear").addClass("dropdown__button_hidden");
                }
            }
    
            $textField.text(newText());
    
    
            function newText() {
                let $li;
                let newText = '';
    
                $ul.children(".js-dropdown__item").each(function() {
                    $li = $(this);
                    if ($li.find('.js-dropdown__number').text() != '0') {
                        newText = newText + $li.find('.js-dropdown__number').text() + ' ' + $li.attr('item') + ', ';
                    }
                });
    
                newText = newText.slice(0, -2) || initialText;
                return newText;
            } 
        });
    });
});

function setDropdownValues($node, vals) {
    let $items = $node.find('.js-dropdown__item');

    vals.forEach(function(item, i) {
        for (let r = 1; r <= +item; r++) {
            $items.eq(i).find('.js-dropdown__button_action_add').trigger('click');
        }        
    })
}

export {setDropdownValues};