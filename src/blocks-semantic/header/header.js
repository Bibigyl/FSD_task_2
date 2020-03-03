$(document).ready(function () {

  const animationDurationInMs = 400;

  $('.header__hamburger').each(function () {

    $(this).on('click', function () {
      $(this).closest('.header').find('.header__menu').slideToggle(animationDurationInMs);
      $(this).toggleClass("header__hamburger_active");
    });

  });

});