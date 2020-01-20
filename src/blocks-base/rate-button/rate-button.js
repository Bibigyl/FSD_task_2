$(document).ready(function() {

    $('.js-rate-button_clickable').each(function() {

        let $rate = $(this);
        let full = 'star';
        let empty = 'star_border';

        $(this).find('.js-rate-button__icon').each(function() {

            $(this).on('mouseenter', function() {

                $(this).text(full);
                $(this).prevAll().each(function() { 
                    $(this).text(full);
                });
                $(this).nextAll().each(function() { 
                    $(this).text(empty); 
                });               
            });

            $(this).on('click', function() {

                $(this).addClass('rate-button__icon_checked');
                $(this).prevAll().each(function() { 
                    $(this).addClass('rate-button__icon_checked');
                });
                $(this).nextAll().each(function() { 
                    $(this).removeClass('rate-button__icon_checked');
                });   
            });

            $(this).on('mouseleave', function() {

                let $lastChecked = $('.rate-button__icon_checked').last();
                $lastChecked.text(full);
                $lastChecked.prevAll().each(function() { 
                    $(this).text(full);
                });
                $lastChecked.nextAll().each(function() { 
                    $(this).text(empty); 
                });               
            });
        });
    });
});