class ExpandableCheckboxList {

  constructor($list) {

    this.ANIMATION_DURATION_MS = 400;
    this.$list = $list;
    let $arrow = $list.find('.js-expandable-checkbox-list__arrow');

    $arrow.on('click', this.handleArrowClick.bind(this));
  }

  handleArrowClick() {
    let $checkboxList = this.$list.closest('.js-expandable-checkbox-list');
    $checkboxList.find('.js-expandable-checkbox-list__list').slideToggle(this.ANIMATION_DURATION_MS);
    $checkboxList.toggleClass('expandable-checkbox-list_open');
  }
}

$('.js-expandable-checkbox-list').each(function() {
  let expandableCheckboxList = new ExpandableCheckboxList($(this));
})