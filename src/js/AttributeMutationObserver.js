class AttributeMutationObserver {

    constructor($items, attribute, callback, context = {}) {

        let dropdownObserver = new MutationObserver(callback.bind(context));

        $items.each(function () {
            dropdownObserver.observe($(this).get(0), {attributeFilter: [attribute]});
        });
    }
}

export default AttributeMutationObserver;