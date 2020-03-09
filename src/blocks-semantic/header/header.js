$(document).ready(function () {

  const ANIMATION_DURATION_MS = 400;

  $('.js-header__hamburger').each(function () {

    $(this).on('click', function () {
      $(this).closest('.js-header').find('.js-header__menu').slideToggle(ANIMATION_DURATION_MS);
      $(this).toggleClass('header__hamburger_active');
    });

  });
  
});