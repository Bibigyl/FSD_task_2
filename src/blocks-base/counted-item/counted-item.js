$( document ).ready(function() {

    $(".js-counted-item__operation").each(function() {
        $(this).on("click", function() {

            let $item = $(this).closest('.js-counted-item');
            let $valueNode = $item.find(".js-counted-item__value");
            let value = $valueNode.text() * 1;
            let text = $item.find(".js-counted-item__text").text();
    
            if ( !$(this).hasClass("counted-item__operation_disabled") ) {
                if ( $(this).hasClass("js-counted-item__operation_dec") ) {
                    value = value - 1;
                    $valueNode.text(value);
                    if ( value == 0 ) { $(this).addClass("counted-item__operation_disabled") }
                    if ( value == 98 ) { 
                        $(this).parent().find(".js-counted-item__operation_inc").removeClass("counted-item__operation_disabled"); 
                    }
                } else {
                    value = value + 1;
                    $valueNode.text(value);
                    if ( value == 99 ) { $(this).addClass("counted-item__operation_disabled") }
                    if ( value == 1 ) { 
                        $(this).parent().find(".js-counted-item__operation_dec").removeClass("counted-item__operation_disabled"); 
                    }
                }
            } else {
                return;
            }

            text = value == 0 ? '' : value + ' ' + text;
            $item.attr('data-output', text)
        });
    });


    document.querySelectorAll('.js-counted-item').forEach(function(item) {

        let valueNode = item.querySelector('.js-counted-item__value');
        let dec = item.querySelector('.js-counted-item__operation_dec');

        let itemObserver = new MutationObserver(function() {

            if (item.getAttribute('data-input') == 'clear') {
                valueNode.textContent = '0';
                dec.classList.add('counted-item__operation_disabled');
                item.setAttribute('data-output', '');
                item.setAttribute('data-input', '');
            }

        });

        itemObserver.observe(item, {attributeFilter: ['data-input']});
    });
});