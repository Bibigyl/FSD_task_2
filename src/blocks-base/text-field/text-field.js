import Cleave from 'cleave.js';

class TextField {

    constructor($textField) {
        this.$textField = $textField;
        if (!$textField.hasClass('js-text-field_masked')) {
            return
        }

        this.build();
    }

    build() {
        let params = {};
        let $input = this.$textField.find('input');

        if ($input.attr('data-type')) {
            let type = $input.attr('data-type');
            params[type] = true;

            try {
                params[type + 'Pattern'] = $input.attr('data-pattern') ?
                    JSON.parse($input.attr('data-pattern')) :
                    '';
            } catch (e) {
                console.warn(e.stack);
            }
        }

        params['delimiter'] = $input.attr('data-delimiter') ?
            $input.attr('data-delimiter') :
            '';

        try {
            params['blocks'] = $input.attr('data-blocks') ?
                JSON.parse($input.attr('data-blocks')) :
                '';
        } catch (e) {
            console.warn(e.stack);
        }

        new Cleave($input, params);
    }
}


$('.js-text-field').each(function () {
    new TextField($(this));
});