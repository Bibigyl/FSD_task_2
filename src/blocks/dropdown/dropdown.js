$( document ).ready(function() {

    $(".js-dropdown__arrow").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.children(".js-dropdown__popup").slideToggle(200, "linear");
            $dropdown.toggleClass("dropdown_open");
        });
    });


    $(".js-dropdown__action_clear").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');
            let $items = $dropdown.find('.js-dropdown__item-data');

            $items.each(function() {
                $(this).attr('data-clear', true);
            });

            $(this).addClass("dropdown__action_hidden");
        });
    });

    
    $(".js-dropdown__action_apply").each(function() {
        $(this).on("click", function() {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.find('.js-dropdown__popup').slideToggle(200, "linear").parent().toggleClass("dropdown_open");
        });
    });


    document.querySelectorAll('.js-dropdown').forEach(function(dropdown) {

        let items = dropdown.querySelectorAll('.js-dropdown__item-data');
        let textField = dropdown.querySelector('.js-dropdown__text');
        let clear = dropdown.querySelector('.js-dropdown__action_clear');
        let initialText = dropdown.getAttribute('data-initial-text');
        let text = '';

        let dropdownObserver = new MutationObserver(function() {
            
            let itemText;
            items.forEach(function(item) {
                itemText = item.getAttribute('data-counted-item');
                text = itemText != '' ? text + itemText + ', ' : text;
            })

            if ( text.slice(0, -2) ) {
                clear.classList.remove('dropdown__action_hidden');
                text = text.slice(0, -2);
            } else {
                clear.classList.add('dropdown__action_hidden');
                text = initialText;
            }

            textField.textContent = text;
            text = '';
        });

        items.forEach(function(item) {
            dropdownObserver.observe(item, {attributes: true});
        });   
    });
});