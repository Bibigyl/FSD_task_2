$( document ).ready(function() {

    $(".js-dropdown__arrow").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.children(".js-dropdown__popup").slideToggle(200, "linear");
            $dropdown.toggleClass("dropdown_open");
        });
    });


    $(".js-dropdown__action_clear").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');
            let initialText = $dropdown.attr('data-initial-text');
            let $list = $dropdown.find(".js-dropdown__popup");
            let $liArr = $list.find('.js-dropdown__item');

            for ( let i = 0; i < $liArr.length; i++ ) {
                $liArr.eq(i).children(".js-dropdown__number").text("0");
                $liArr.eq(i).children(".js-dropdown__operation_dec").addClass("dropdown__operation_disabled"); 
            }

            $dropdown.find(".js-dropdown__text").text(initialText);
            $(this).addClass("dropdown__action_hidden");
        });
    });


    
    $(".js-dropdown__action_apply").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.find('.js-dropdown__popup').slideToggle(200, "linear").parent().toggleClass("dropdown_open");
        });
    })



    $(".js-dropdown__operation").each(function() {
        $(this).on("click", function() {

            let $dropdown = $(this).closest('.js-dropdown');
            let initialText = $dropdown.attr('data-initial-text');
            let $textField = $dropdown.find(".js-dropdown__text");
            let count = 0;
            let $numNode = $(this).parent().find(".js-dropdown__number");
            let num = $numNode.text() * 1;
            let $list = $dropdown.find(".js-dropdown__popup");
            let $ul = $list.children('.js-dropdown__items');
    
            if ( !$(this).hasClass("dropdown__operation_disabled") ) {
                if ( $(this).hasClass("js-dropdown__operation_dec") ) {
                    num = num - 1;
                    $numNode.text(num);
                    if ( num == 0 ) { $(this).addClass("dropdown__operation_disabled") }
                    if ( num == 98 ) { 
                        $(this).parent().find(".js-dropdown__operation_inc").removeClass("dropdown__operation_disabled"); 
                    }
                } else {
                    num = num + 1;
                    $numNode.text(num);
                    if ( num == 99 ) { $(this).addClass("dropdown__operation_disabled") }
                    if ( num == 1 ) { 
                        $(this).parent().find(".js-dropdown__operation_dec").removeClass("dropdown__operation_disabled"); 
                    }
                }
            } else {
                return;
            }
    
            if ( $(this).hasClass("dropdown__operation_inc") ) {
                $dropdown.find(".js-dropdown__action_clear").removeClass("dropdown__action_hidden");
            } else {
                for ( let i = 0; i < $ul.children().length; i++ ) {
                    count = count + $ul.children().eq(i).find(".js-dropdown__number").text();
                }
                if ( count == 0 ) {
                    $dropdown.find(".js-dropdown__action_clear").addClass("dropdown__action_hidden");
                }
            }
    
            $textField.text(newText());
    
    
            function newText() {
                let $li;
                let newText = '';
                let num;
    
                $ul.children(".js-dropdown__item").each(function() {
                    $li = $(this);
                    num = $li.find('.js-dropdown__number').text();
                    if (num != '0') {
                        newText = newText + num + ' ' + $li.attr('data-item') + ', ';
                    }
                });
    
                newText = newText.slice(0, -2) || initialText;
                return newText;
            } 
        });
    });
});






/* 
$( document ).ready(function() {

    $(".js-dropdown__arrow").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.children(".js-dropdown__popup").slideToggle(200, "linear");
            $dropdown.toggleClass("dropdown_open");
        });
    });


    $(".js-dropdown__action_clear").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');
            let initialText = $dropdown.attr('data-initial-text');
            let $list = $dropdown.find(".js-dropdown__popup");
            let $liArr = $list.find('.js-dropdown__item');

            for ( let i = 0; i < $liArr.length; i++ ) {
                $liArr.eq(i).children(".js-dropdown__number").text("0");
                $liArr.eq(i).children(".js-dropdown__operation_dec").addClass("dropdown__operation_disabled"); 
            }

            $dropdown.find(".js-dropdown__text").text(initialText);
            $(this).addClass("dropdown__action_hidden");
        });
    });


    
    $(".js-dropdown__action_apply").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.find('.js-dropdown__popup').slideToggle(200, "linear").parent().toggleClass("dropdown_open");
        });
    })


    // 1. в блоке dropdown я ищу элемент другого блока(кнопки плюс минус), и по клику на этот элемент выполняю функцию 

    // здесь плохо
    $(".js-dropdown .js-counted-item__operation").each(function() {
        $(this).on("click", function() {

            let $dropdown = $(this).closest('.js-dropdown');
            let $textField = $dropdown.find(".js-dropdown__text");
            let initialText = $dropdown.attr('data-initial-text');
            let text = '';
            
            // здесь снова плохо
            let $items = $dropdown.find('.js-counted-item');
            let itemText = '';

            $items.each(function(i, $item) {
                // здесь снова плохо
                itemText = $(this).attr('data-counted-item');
                text = itemText != '' ? text + itemText + ', ' : text;
            });

            text = text.slice(0, -2) || initialText;
            $textField.text(text);
        });
    });


    // 2. При изменении атрибута у любого counted-item, дропдаун реагирует и меняет в себе текст
    document.querySelectorAll('.js-dropdown').forEach(function(dropdown) {

        // плохо
        // и потом несколько раз к ней обращаюсь
        let items = dropdown.querySelectorAll('.js-counted-item');
        let textField = dropdown.querySelector('.js-dropdown__text');
        let initialText = dropdown.getAttribute('data-initial-text');
        let text = '';

        let dropdownObserver = new MutationObserver(function(mutation) {
            
            let itemText;
            items.forEach(function(item) {
                itemText = item.getAttribute('data-counted-item');
                text = itemText != '' ? text + itemText + ', ' : text;
            })

            text = text.slice(0, -2) || initialText;
            textField.textContent = text;
            text = '';
        });

        items.forEach(function(item) {
            dropdownObserver.observe(item, {attributes: true});
        });   
    });
}); */