import bind from 'bind-decorator';

class LikeButton {
    constructor($likeButton) {

        this.$likeButton = $likeButton;
        let $input = $likeButton.find('.js-like-button__input');

        $input.on('change', this.handleButtonChange);
    }

    @bind
    handleButtonChange() {
        let $button = this.$likeButton;;
        let $buttonNum = $button.find('.js-like-button__number')
        let num = Number($buttonNum.text());

        $button.toggleClass('like-button_checked');
        $button.hasClass('like-button_checked') ? num++ : num--;
        $buttonNum.text(num);
    }
}


$('.js-like-button').each(function() {
    new LikeButton($(this));
});