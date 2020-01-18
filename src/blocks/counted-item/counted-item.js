$( document ).ready(function() {

    $(".js-counted-item__operation").each(function() {
        $(this).on("click", function() {

            let $item = $(this).closest('.js-counted-item');
            let $numNode = $item.find(".js-counted-item__number");
            let num = $numNode.text() * 1;
            let text = $item.find(".js-counted-item__text").text();
    
            if ( !$(this).hasClass("counted-item__operation_not-active") ) {
                if ( $(this).hasClass("js-counted-item__operation_dec") ) {
                    num = num - 1;
                    $numNode.text(num);
                    if ( num == 0 ) { $(this).addClass("counted-item__operation_not-active") }
                    if ( num == 98 ) { 
                        $(this).parent().find(".js-counted-item__operation_inc").removeClass("counted-item__operation_not-active"); 
                    }
                } else {
                    num = num + 1;
                    $numNode.text(num);
                    if ( num == 99 ) { $(this).addClass("counted-item__operation_not-active") }
                    if ( num == 1 ) { 
                        $(this).parent().find(".js-counted-item__operation_dec").removeClass("counted-item__operation_not-active"); 
                    }
                }
            } else {
                return;
            }

            text = num == 0 ? '' : num + ' ' + text;
            $item.attr('data-counted-item', text)
        });
    });
});