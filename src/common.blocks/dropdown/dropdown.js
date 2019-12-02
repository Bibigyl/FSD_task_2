$( document ).ready(function() {

    $(".dropdown__arrow").on("click", function() {
        $(this).parent().parent().children(".dropdown-ul-wrap").slideToggle(200, "linear").parent().toggleClass("dropdown_open");

    });


    $(".dropdown__link_clear").on("click", function() {
        let $ulNode = $(this).parent().children("ul");
        let $liArr = $ulNode.children();

        for ( let i = 0; i < $liArr.length; i++ ) {
            $liArr.eq(i).children(".dropdown__num").text("0");
            $liArr.eq(i).children(".dropdown__button_minus").addClass("dropdown__button_not-active"); 
        }

        $ulNode.parent().parent().find(".dropdown__field span").text("Сколько гостей")
        $(this).addClass("hidden");
    });

    
    $(".dropdown__link_apply").on("click", function() {
        $(this).parent().slideToggle(200, "linear").parent().toggleClass("dropdown_open");
    });


    $(".dropdown__button").on("click", function() {

        let $dropdown = $(this).parent().parent().parent().parent();
        let $textField = $dropdown.find(".dropdown__field span:first-child");
        let text = "";
        let t = "";
        let count = 0;
        let $numNode = $(this).parent().find(".dropdown__num");
        let num = $numNode.text() * 1;
        let $ulNode = $dropdown.find("ul");

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
            $dropdown.find(".dropdown__link_clear").removeClass("hidden");
        } else {
            for ( let i = 0; i < $ulNode.children().length; i++ ) {
                count = count + $ulNode.children().eq(i).find(".dropdown__num").text()*1;
            }
            if ( count == 0 ) {
                $dropdown.find(".dropdown__link_clear").addClass("hidden");
            }
        }

        if ( $dropdown.hasClass("dropdown_guests") ) {
            text = guestsCount();
        }
        if ( $dropdown.hasClass("dropdown_furniture") ) {
            text = furnitureText();
        }

        $textField.text(text);


    //-------functions fot text------

        function furnitureText() {
            for ( let i = 0; i < 3; i++ ) {
                t = $ulNode.children().eq(i).find(".dropdown__num").text();
                if (t != 0) {
                    if ( t % 10 == 1 ) {
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

        function guestsTextFull() {
            for ( let i = 0; i < 3; i++ ) {
                t = $ulNode.children().eq(i).find(".dropdown__num").text();
                if (t != 0) {
                    if ( t % 10 == 1 ) {
                        switch (i) {
                            case 0:
                                text = text + t + " взрослый, ";
                                break;
                            case 1:
                                text = text + t + " ребенок, ";
                                break;
                            case 2:
                                text = text + t + " младенец, ";
                                break;
                        }
                    } else if ( t % 10 >= 2 && t % 10 <= 4 ) {
                        switch (i) {
                            case 0:
                                text = text + t + " взрослых, ";
                                break;
                            case 1:
                                text = text + t + " детей, ";
                                break;
                            case 2:
                                text = text + t + " младенца, ";
                                break;
                        }
                    } else {
                        switch (i) {
                            case 0:
                                text = text + t + " взрослых, ";
                                break;
                            case 1:
                                text = text + t + " детей, ";
                                break;
                            case 2:
                                text = text + t + " младенцев, ";
                                break;
                        }
                    }
                }
            }
            text = text.slice(0, text.length - 2);
            return text;
        }

        function guestsCount() {
            let count = $ulNode.children().eq(0).find(".dropdown__num").text()*1 + $ulNode.children().eq(1).find(".dropdown__num").text()*1;
            let n = $ulNode.children().eq(2).find(".dropdown__num").text()*1;

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