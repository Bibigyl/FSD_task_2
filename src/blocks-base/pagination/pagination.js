$(document).ready(function () {

    $('.pagination').each(function() {

        let itemsOnPage = $(this).attr('data-items-on-page');
        let itemsNumber = $(this).attr('data-items-number');
        let page = $(this).attr('data-page');


        $('.js-pagination__pages').pagination({
            items: itemsNumber,
            itemsOnPage: itemsOnPage,
            displayedPages: 3,
            currentPage: page,
            nextText: '<div class="pagination__arrow material-icons"> arrow_forward</div>',
            edges: 1
        });

    });
});