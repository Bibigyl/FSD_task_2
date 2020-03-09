$( document ).ready(function() {

    $('.js-counted-item__operation').each(function() {
        $(this).on('click', function() {

            let $item = $(this).closest('.js-counted-item');
            let $value = $item.find('.js-counted-item__value');
            let $inc = $item.find('.js-counted-item__operation_inc');
            let $dec = $item.find('.js-counted-item__operation_dec');
            let value = parseInt($value.text(), 10);
            let text = $item.find('.js-counted-item__text').text();
            let min = $item.attr('data-min');
            let max = $item.attr('data-max');

            if ($(this).hasClass('counted-item__operation_disabled')) {return;}

            if ( $(this).hasClass('js-counted-item__operation_dec') ) {

                value = value - 1;
                $inc.removeClass('counted-item__operation_disabled');

                if ( value == min ) { 
                    $(this).addClass('counted-item__operation_disabled') 
                }

            } else {

                value = value + 1;
                $dec.removeClass('counted-item__operation_disabled');

                if ( value == max ) { 
                    $(this).addClass('counted-item__operation_disabled') 
                }
            }

            $value.text(value);
            text = value == 0 ? '' : `${value} ${text}`;
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