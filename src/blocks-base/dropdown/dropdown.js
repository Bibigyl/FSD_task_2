$(document).ready(function () {

    const ANIMATION_DURATION_MS = 200;

    $(".js-dropdown__arrow").each(function () {
        $(this).on("click", function () {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.children(".js-dropdown__popup").slideToggle(ANIMATION_DURATION_MS, "linear");
            $dropdown.toggleClass("dropdown_open");
        });
    });


    $(".js-dropdown__action_clear").each(function () {
        $(this).on("click", function () {
            let $dropdown = $(this).closest('.js-dropdown');
            let $items = $dropdown.find('.js-dropdown__counted-item');

            $items.each(function () {
                $(this).attr('data-input', 'clear');
            });

            $(this).addClass("dropdown__action_hidden");
        });
    });


    $(".js-dropdown__action_apply").each(function () {
        $(this).on("click", function () {
            let $dropdown = $(this).closest('.js-dropdown');

            $dropdown.find('.js-dropdown__popup').slideToggle(ANIMATION_DURATION_MS, "linear").parent().toggleClass("dropdown_open");
        });
    });


    document.querySelectorAll('.js-dropdown').forEach(function (dropdown) {

        let items = dropdown.querySelectorAll('[data-outer="dropdown-item"]');
        let textField = dropdown.querySelector('.js-dropdown__text');
        let clear = dropdown.querySelector('.js-dropdown__action_clear');
        let initialText = dropdown.getAttribute('data-initial-text');
        let text = '';


        let dropdownObserver = new MutationObserver(function () {

            let itemTexts = [];
            let itemText;
            items.forEach(function (item) {
                itemText = item.getAttribute('data-output');
                if ( itemText != '' ) { itemTexts.push(itemText); }
            });

            if (itemTexts.length != 0) {
                if (clear) {clear.classList.remove('dropdown__action_hidden')};
                text = itemTexts.join(', ');
            } else {
                if (clear) {clear.classList.add('dropdown__action_hidden')};
                text = initialText;
            }

            textField.textContent = text;
            text = '';
        });

        items.forEach(function (item) {
            dropdownObserver.observe(item, {attributeFilter: ['data-output']});
        });

    });
});