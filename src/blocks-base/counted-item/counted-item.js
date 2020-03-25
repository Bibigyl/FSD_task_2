import MessageHub from '../../js/MessageHub.js';
import bind from 'bind-decorator';

class CountedItem {

    constructor($item) {
        this.$item = $item;
        let $operations = $item.find('.js-counted-item__operation');

        $operations.on('click', this.handleOperationClick);

        new MessageHub($item, 'data-input', this.handleMessage);
    }

    @bind
    handleMessage() {
        let $item = this.$item;
        if ( $item.attr('data-input') != 'clear' ) { return }

        let $value = $item.find('.js-counted-item__value');
        let $dec = $item.find('.js-counted-item__operation_dec');

        $value.text('0');
        $dec.addClass('counted-item__operation_disabled');
        $item.attr('data-output', '');
        $item.attr('data-input', '');
    }

    @bind
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


$('.js-counted-item').each(function() {
    new CountedItem($(this));
})