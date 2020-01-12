$( document ).ready(function() {

    $(".dropdown__arrow").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.dropdown');

            $dropdown.children(".dropdown__list").slideToggle(200, "linear");$dropdown.toggleClass("dropdown_open");
        });
    });


    $(".dropdown__button_action_clear").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.dropdown');
            let initialText = $dropdown.attr('data-initial-text');
            let $list = $dropdown.find(".dropdown__list");
            let $liArr = $list.find('li');

            for ( let i = 0; i < $liArr.length; i++ ) {
                $liArr.eq(i).children(".dropdown__number").text("0");
                $liArr.eq(i).children(".dropdown__button_action_subtrack").addClass("dropdown__button_not-active"); 
            }

            $dropdown.find(".dropdown__field span").text(initialText)
            $(this).addClass("dropdown__button_hidden");
        });
    });


    
    $(".dropdown__button_action_apply").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.dropdown');

            $dropdown.find('.dropdown__list').slideToggle(200, "linear").parent().toggleClass("dropdown_open");
        });
    })



    $(".dropdown__button_to-change-quantity").each(function() {
        $(this).on("click", function() {

            let $dropdown = $(this).closest('.dropdown');
            let initialText = $dropdown.attr('data-initial-text');
            let $textField = $dropdown.find(".dropdown__text");
            let count = 0;
            let $numNode = $(this).parent().find(".dropdown__number");
            let num = $numNode.text() * 1;
            let $list = $dropdown.find(".dropdown__list");
            let $ul = $list.children('ul');
    
            if ( !$(this).hasClass("dropdown__button_not-active") ) {
                if ( $(this).hasClass("dropdown__button_action_subtrack") ) {
                    num = num - 1;
                    $numNode.text(num);
                    if ( num == 0 ) { $(this).addClass("dropdown__button_not-active") }
                    if ( num == 98 ) { 
                        $(this).parent().find(".dropdown__button_action_add").removeClass("dropdown__button_not-active"); 
                    }
                } else {
                    num = num + 1;
                    $numNode.text(num);
                    if ( num == 99 ) { $(this).addClass("dropdown__button_not-active") }
                    if ( num == 1 ) { 
                        $(this).parent().find(".dropdown__button_action_subtrack").removeClass("dropdown__button_not-active"); 
                    }
                }
            } else {
                return;
            }
    
            if ( $(this).hasClass("dropdown__button_action_add") ) {
                $dropdown.find(".dropdown__button_action_clear").removeClass("dropdown__button_hidden");
            } else {
                for ( let i = 0; i < $ul.children().length; i++ ) {
                    count = count + $ul.children().eq(i).find(".dropdown__number").text()*1;
                }
                if ( count == 0 ) {
                    $dropdown.find(".dropdown__button_action_clear").addClass("dropdown__button_hidden");
                }
            }
    
            $textField.text(newText());
    
    
            function newText() {
                let $li;
                let newText = '';
    
                $ul.children(".dropdown__item").each(function() {
                    $li = $(this);
                    if ($li.find('.dropdown__number').text() != '0') {
                        newText = newText + $li.find('.dropdown__number').text() + ' ' + $li.attr('item') + ', ';
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
            $items.eq(i).find('.dropdown__button_action_add').trigger('click');
        }        
    })
}

export {setDropdownValues};