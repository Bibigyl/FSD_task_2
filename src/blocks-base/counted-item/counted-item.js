class CountedItem {

    constructor($item) {
        this.$item = $item;
        let $operations = $item.find('.js-counted-item__operation');

        $operations.on('click', this.handleOperationClick.bind(this));

        let countedItemObserve = new CountedItemObserve($item);
    }

    handleOperationClick() {
        let $item = this.$item;
        let $operation = $(event.target);

        let $value = $item.find('.js-counted-item__value');
        let $inc = $item.find('.js-counted-item__operation_inc');
        let $dec = $item.find('.js-counted-item__operation_dec');
        let value = parseInt($value.text(), 10);
        let text = $item.find('.js-counted-item__text').text();
        let min = $item.attr('data-min');
        let max = $item.attr('data-max');

        if ($operation.hasClass('counted-item__operation_disabled')) {return;}

        if ( $operation.hasClass('js-counted-item__operation_dec') ) {

            value = value - 1;
            $inc.removeClass('counted-item__operation_disabled');

            if ( value == min ) { 
                $operation.addClass('counted-item__operation_disabled') 
            }

        } else {

            value = value + 1;
            $dec.removeClass('counted-item__operation_disabled');

            if ( value == max ) { 
                $operation.addClass('counted-item__operation_disabled') 
            }
        }

        $value.text(value);
        text = value == 0 ? '' : `${value} ${text}`;
        $item.attr('data-output', text)
    }
}

class CountedItemObserve {

    constructor($item) {

        this.item = $item.get(0);
        let itemObserver = new MutationObserver(this.mutationObserverCallback.bind(this));
        itemObserver.observe(this.item, {attributeFilter: ['data-input']});
    }

    mutationObserverCallback() {
        let item = this.item;
        if (item.getAttribute('data-input') != 'clear') { return }

        let valueNode = item.querySelector('.js-counted-item__value');
        let dec = item.querySelector('.js-counted-item__operation_dec');

        valueNode.textContent = '0';
        dec.classList.add('counted-item__operation_disabled');
        item.setAttribute('data-output', '');
        item.setAttribute('data-input', '');
    }
}


$('.js-counted-item').each(function() {
    let countedItem = new CountedItem($(this));
})