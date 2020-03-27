class MessageHub {

    constructor($items, attribute, handleMessage, context = {}) {

        let mutationObserver = new MutationObserver(handleMessage.bind(context));

        $items.each(function () {
            mutationObserver.observe($(this).get(0), {
                attributeFilter: [attribute]
            });
        });
    }
}

export default MessageHub;