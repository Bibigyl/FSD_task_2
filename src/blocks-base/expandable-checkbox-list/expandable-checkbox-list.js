import bind from 'bind-decorator';

class ExpandableCheckboxList {

  static ANIMATION_DURATION_MS = 400;

  constructor($list) {

    this.$list = $list;
    let $arrow = $list.find('.js-expandable-checkbox-list__arrow');

    $arrow.on('click', this.handleArrowClick);
  }

  @bind
  handleArrowClick() {
    let $checkboxList = this.$list.closest('.js-expandable-checkbox-list');
    $checkboxList.find('.js-expandable-checkbox-list__list').slideToggle(ExpandableCheckboxList.ANIMATION_DURATION_MS);
    $checkboxList.toggleClass('expandable-checkbox-list_open');
  }
}

$('.js-expandable-checkbox-list').each(function() {
  new ExpandableCheckboxList($(this));
})