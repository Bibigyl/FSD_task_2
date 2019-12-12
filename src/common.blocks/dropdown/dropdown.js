$( document ).ready(function() {

    $(".dropdown__arrow").on("click", function() {
        let $dropdown = $(this).closest('.dropdown');

        $dropdown.children(".dropdown__list").slideToggle(200, "linear");$dropdown.toggleClass("dropdown_open");
    });


    $(".dropdown__button_to-clear").on("click", function() {
        let $dropdown = $(this).closest('.dropdown');
        let $list = $dropdown.find(".dropdown__list");
        let $liArr = $list.find('li');

        for ( let i = 0; i < $liArr.length; i++ ) {
            $liArr.eq(i).children(".dropdown__num").text("0");
            $liArr.eq(i).children(".dropdown__button_minus").addClass("dropdown__button_not-active"); 
        }

        $dropdown.find(".dropdown__field span").text("Сколько гостей")
        $(this).addClass("hidden");
    });

    
    $(".dropdown__button_to-apply").on("click", function() {
        let $dropdown = $(this).closest('.dropdown');

        $dropdown.find('.dropdown__list').slideToggle(200, "linear").parent().toggleClass("dropdown_open");
    });


    $(".dropdown__button").on("click", function() {

        let $dropdown = $(this).closest('.dropdown');
        let $textField = $dropdown.find(".dropdown__text");
        let text = "";
        let t = "";
        let count = 0;
        let $numNode = $(this).parent().find(".dropdown__num");
        let num = $numNode.text() * 1;
        let $list = $dropdown.find(".dropdown__list");
        let $ul = $list.children('ul');

        if ( !$(this).hasClass("dropdown__button_not-active") ) {
            if ( $(this).hasClass("dropdown__button_minus") ) {
                num = num - 1;
                $numNode.text(num);
                if ( num == 0 ) { $(this).addClass("dropdown__button_not-active") }
                if ( num == 98 ) { 
                    $(this).parent().find(".dropdown__button_plus").removeClass("dropdown__button_not-active"); 
                }
            } else {
                num = num + 1;
                $numNode.text(num);
                if ( num == 99 ) { $(this).addClass("dropdown__button_not-active") }
                if ( num == 1 ) { 
                    $(this).parent().find(".dropdown__button_minus").removeClass("dropdown__button_not-active"); 
                }
            }
        } else {
            return;
        }

        if ( $(this).hasClass("dropdown__button_plus") ) {
            $dropdown.find(".dropdown__button_to-clear").removeClass("hidden");
        } else {
            for ( let i = 0; i < $ul.children().length; i++ ) {
                count = count + $ul.children().eq(i).find(".dropdown__num").text()*1;
            }
            if ( count == 0 ) {
                $dropdown.find(".dropdown__button_to-clear").addClass("hidden");
            }
        }

        if ( $dropdown.hasClass("dropdown_guests") ) {
            text = guestsText();
        }
        if ( $dropdown.hasClass("dropdown_furniture") ) {
            text = furnitureText();
        }

        $textField.text(text);


    //-------functions fot text------

        function furnitureText() {
            for ( let i = 0; i < 3; i++ ) {
                t = $ul.children().eq(i).find(".dropdown__num").text();
                if (t != 0) {
                    if ( t > 4 && t < 21  ) {
                        switch (i) {
                            case 0:
                                text = text + t + " спален, ";
                                break;
                            case 1:
                                text = text + t + " кроватей, ";
                                break;
                            case 2:
                                text = text + t + " ванных комнат, ";
                                break;
                        }
                    } else if ( t % 10 == 1 ) {
                        switch (i) {
                            case 0:
                                text = text + t + " спальня, ";
                                break;
                            case 1:
                                text = text + t + " кровать, ";
                                break;
                            case 2:
                                text = text + t + " ванная комната, ";
                                break;
                        }
                    } else if ( t % 10 >= 2 && t % 10 <= 4 ) {
                        switch (i) {
                            case 0:
                                text = text + t + " спальни, ";
                                break;
                            case 1:
                                text = text + t + " кровати, ";
                                break;
                            case 2:
                                text = text + t + " ванные комнаты, ";
                                break;
                        }
                    } else {
                        switch (i) {
                            case 0:
                                text = text + t + " спален, ";
                                break;
                            case 1:
                                text = text + t + " кроватей, ";
                                break;
                            case 2:
                                text = text + t + " ванных комнат, ";
                                break;
                        }
                    }
                }
            }
            text = text.slice(0, text.length - 2);
            return text;
        }

        function guestsText() {
            
            let count = $ul.children().eq(0).find(".dropdown__num").text()*1 + $ul.children().eq(1).find(".dropdown__num").text()*1;
            let n = $ul.children().eq(2).find(".dropdown__num").text()*1;

            if ( count >= 5 && count <= 20 ) {
                count = count + " гостей";
            } else if ( count % 10 == 1 ) {
                count = count + " гость";
            } else if ( count % 10 >= 2 && count % 10 <= 4 ) {
                count = count + " гостя";
            } else if ( count == 0 && n == 0 ) {
                count = "Сколько гостей";
                return count;
            } else {
                count = count + " гостей";
            }

            if (n == 0 ) {
                return count; 
            } else if ( n % 10 == 1 ) {
                n = n + " младенец";
            } else if ( n % 10 >= 2 && n % 10 <= 4 ) {
                n = n + " младенца";
            } else {
                n = n + " младенцев";
            }

            count = count + ", " + n;

            return count; 
        }
    });
});

function setDropdownValues($node, vals) {
    let $items = $node.find('.dropdown__item');

    for (let i = 0; i < vals.length; i++) {
        for (let r = 1; r <= vals[i]; r++) {
            $items.eq(i).find('.dropdown__button_plus').trigger('click');
        }
    }
}

export {setDropdownValues};