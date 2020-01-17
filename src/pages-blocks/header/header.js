$(document).ready(function () {

  $('.header__hamburger').each(function () {

    $(this).on('click', function () {
      $(this).closest('.header').find('.header__menu').slideToggle(400);
      $(this).toggleClass("header__hamburger_active");
    });

  });

});