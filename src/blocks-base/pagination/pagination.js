class Pagination {

    constructor($pagination) {
        let itemsOnPage = $pagination.attr('data-items-on-page');
        let itemsNumber = $pagination.attr('data-items-number');
        let page = $pagination.attr('data-page');


        $('.js-pagination__pages').pagination({
            items: itemsNumber,
            itemsOnPage: itemsOnPage,
            displayedPages: 3,
            currentPage: page,
            nextText: '<div class="pagination__arrow material-icons"> arrow_forward</div>',
            edges: 1
        });
    }
}


$('.js-pagination').each(function() {
    let pagination = new Pagination($(this));
});