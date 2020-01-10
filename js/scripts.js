function getTooltipPosition() {
    $(".event_info").each(function() {
        parentBlock = $(".event_day");
        rightCoord = $(this).offset().left + $(this).width();
        if(rightCoord >= bodyWidth) {
            $(this).addClass("right");
        }
    });
}

function getMenuElemsPosition() {
    if(bodyWidth <= 1024) {
        $("#searchWrap").appendTo(".resp_search");
        $("#sideMenu").appendTo(".catalog_resp");
    } else {
        $("#searchWrap").prependTo("#menuElems");
        $("#sideMenu").appendTo(".side_menu_wrapp");
    }

    if(bodyWidth <= 900) {
        $("#menuElems").appendTo(".resp_menu_wrapp");
        $(".main_nav").appendTo(".main_nav_resp");
    } else {
        $("#menuElems").prependTo("#menuElemsWrapp");
        $(".main_nav").appendTo(".main_nav_wrapp .row");
    }

}

function getCardsParams() {
    var cardAppendElems,
        cardColResp,
        col2;
    $(".advent_card").each(function() {
        cardAppendElems = $(this).find(".append_elems");
        cardColResp = $(this).find(".advert_col_resp");
        col2 = $(this).find(".advent_card_col_2");
        if(bodyWidth <= 600) {
            cardAppendElems.appendTo(cardColResp);
        } else {
            cardAppendElems.appendTo(col2);
        }
    });

    $(".forum_item_desc").each(function(){
        cardAppendElems = $(this).find(".append_elems");
        cardColResp = $(this).find(".advert_col_resp");
        col2 = $(this).find(".desc_col_2");
        if(bodyWidth <= 600) {
            cardAppendElems.appendTo(cardColResp);
        } else {
            cardAppendElems.appendTo(col2);
        }
    });

    $(".vacansie_card").each(function(){
        cardAppendElems = $(this).find(".append_elems");
        cardColResp = $(this).find(".col_resp");
        col2 = $(this).find(".vacansie_card_col_2");
        if(bodyWidth <= 600) {
            cardAppendElems.appendTo(cardColResp);
        } else {
            cardAppendElems.appendTo(col2);
        }
    });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock,
    item,
    dropdownList,
    slideBtn,
    dotVal,
    rightCoord,
    innerMenu;

$(window).load(function() {



});

$(window).resize(function() {    
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getTooltipPosition();
    getMenuElemsPosition();
    getCardsParams();
});

$(document).scroll(function() {



});

$(document).ready(function() {
    getTooltipPosition();
    getMenuElemsPosition();
    getCardsParams();

    $(".side_menu").each(function() {
        item = $(this).find("li");
        item.each(function() {
            if($(this).find("ul").length > 0) {
                $(this).prepend('<i class="right_arrow"></i>');
            }
            if($(this).hasClass("active")) {
                $(this).find("ul").css({
                    "display" : "block"
                });
            }
        });
    });

    $(".side_menu .right_arrow").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest("li");
        dropdownList = parentBlock.children("ul");
        if(dropdownList.is(":hidden")) {
            dropdownList.slideDown(300);
            parentBlock.addClass("active");
        } else {
            dropdownList.slideUp(300);
            parentBlock.removeClass("active");
        }
    });

    // -------------------------

    $(".active_val").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".dropdown_select");
        if(parentBlock.hasClass("active")) {
            parentBlock.removeClass("active");
        } else {
            $(".dropdown_select").removeClass("active");
            parentBlock.addClass("active");
        }        
    });

    $(".vals_list li").on("click", function(e) {
        e.preventDefault();
        var value = $(this).html();
        parentBlock = $(this).closest(".dropdown_select");
        var activeValue = parentBlock.find(".active_val");
        activeValue.html(value);
    });

    $(document).mouseup(function (e){
        hide_element = $(".dropdown_select");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $(".dropdown_select").removeClass("active");
        }
    });

    // ----------------------

    if( $(".promo_slider").length > 0 ) {

        $(".promo_slider").on('init', function() {
            $(".promo_slider_controls").find(".slick-dots li").each(function() {                
                var slideBtn = $(this).find("button");
                var dotVal = parseInt( slideBtn.text() );
                if(dotVal<= 9) {
                    slideBtn.text("0"+dotVal);
                }
            });
        });

        $(".promo_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendArrows: ".promo_slider_controls",
            appendDots: ".promo_slider_controls",
        });
    }

     $(".news_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
             {
               breakpoint: 900,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 520,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
    });

    $(".news_slider_2").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
             {
               breakpoint: 1090,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 900,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
    });

    if($(".rating").length > 0) {
        $(".rating").each(function() {
            var ratingVal = parseInt($(this).attr("data-rating"));
            $(".rating").rateYo({ 
                rating: ratingVal,
                spacing: "3px", 
                numStars: 5, 
                minValue: 0, 
                maxValue: 5, 
                normalFill: '#cccccc',
                ratedFill: '#ff8800',
                starWidth: "22px",
                readOnly: true,
                "starSvg": "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'"+
                "viewBox='0 0 49.9 49.9' style='enable-background:new 0 0 49.9 49.9;' xml:space='preserve'>"+
                     "<path d='M48.9,22.7c1-1,1.3-2.4,0.9-3.7c-0.4-1.3-1.5-2.2-2.9-2.4l"+
                     "-12.1-1.8c-0.5-0.1-1-0.4-1.2-0.9L28.2,3c-0.6-1.2-1.8-2-3.2-2"+
                     "c-1.4,0-2.6,0.8-3.2,2l-5.4,11c-0.2,0.5-0.7,0.8-1.2,0.9L3.1,16.6c"+
                     "-1.4,0.2-2.5,1.1-2.9,2.4c-0.4,1.3-0.1,2.7,0.9,3.7l8.7,8.5"
                    +"c0.4,0.4,0.5,0.9,0.5,1.4l-2.1,12C8,45.8,8.3,46.8,9,47.6c1.1,1.3,2.9,1.7,4.4,0.9l10.8"
                    +"-5.7c0.5-0.2,1-0.2,1.5,0l10.8,5.7"
                    +"c0.5,0.3,1.1,0.4,1.7,0.4c1.1,0,2.1-0.5,2.7-1.3c0.7-0.8,1-1.8,"
                    +"0.8-2.9l-2.1-12c-0.1-0.5,0.1-1,0.5-1.4L48.9,22.7z'/></path>"+
                    "</svg>"
            });
        });
    }

    if($(".rating_set").length > 0) {
        $(".rating_set").each(function() {
            var ratingVal = parseInt($(this).attr("data-rating"));
            $(".rating_set").rateYo({ 
                rating: ratingVal,
                spacing: "3px", 
                numStars: 5, 
                minValue: 0, 
                maxValue: 5, 
                normalFill: '#cccccc',
                ratedFill: '#ff8800',
                starWidth: "22px",
                "starSvg": "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'"+
                "viewBox='0 0 49.9 49.9' style='enable-background:new 0 0 49.9 49.9;' xml:space='preserve'>"+
                     "<path d='M48.9,22.7c1-1,1.3-2.4,0.9-3.7c-0.4-1.3-1.5-2.2-2.9-2.4l"+
                     "-12.1-1.8c-0.5-0.1-1-0.4-1.2-0.9L28.2,3c-0.6-1.2-1.8-2-3.2-2"+
                     "c-1.4,0-2.6,0.8-3.2,2l-5.4,11c-0.2,0.5-0.7,0.8-1.2,0.9L3.1,16.6c"+
                     "-1.4,0.2-2.5,1.1-2.9,2.4c-0.4,1.3-0.1,2.7,0.9,3.7l8.7,8.5"
                    +"c0.4,0.4,0.5,0.9,0.5,1.4l-2.1,12C8,45.8,8.3,46.8,9,47.6c1.1,1.3,2.9,1.7,4.4,0.9l10.8"
                    +"-5.7c0.5-0.2,1-0.2,1.5,0l10.8,5.7"
                    +"c0.5,0.3,1.1,0.4,1.7,0.4c1.1,0,2.1-0.5,2.7-1.3c0.7-0.8,1-1.8,"
                    +"0.8-2.9l-2.1-12c-0.1-0.5,0.1-1,0.5-1.4L48.9,22.7z'/></path>"+
                    "</svg>"
            });
        });
    }

    // ----------

    $(".event_info .close_btn_2").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".event_info").css({
            "display" : "none"
        });
        $(this).closest(".event_day").removeClass("event_day");
    });

    // ----------

    $(".del_btn").on("click", function(e) {
        e.preventDefault();
        $(this).closest(".table_row").remove();
    });

    // ----------

    $(".nav_2 > li").each(function() {
        if( $(this).find(".inner_menu").length > 0 ) {
            $(this).prepend('<button type="button" class="inner_menu_btn"></button>');
        }
    });

    $(".nav_2 > li .inner_menu_btn").on("click", function(e) {
        e.preventDefault();        
        if($(this).hasClass("active")) {
            $(".inner_menu_btn").removeClass("active");
            $(".nav_2 > li").removeClass("active");
            $(".nav_2 > li").removeClass("rightPosition");
            $(".nav_2 > li > a").removeClass("active");
        } else {
            $(".inner_menu_btn").removeClass("active");
            $(".nav_2 > li").removeClass("active");
            $(".nav_2 > li").removeClass("rightPosition");
            $(".nav_2 > li > a").removeClass("active");
            $(this).addClass("active");
            parentBlock = $(this).closest("li");
            parentBlock.addClass("active");
            parentBlock.children("a").addClass("active");
            innerMenu = parentBlock.children(".inner_menu");
            rightCoord = innerMenu.offset().left + innerMenu.outerWidth(true) + 30;
            if(rightCoord > bodyWidth ) {
                parentBlock.addClass("rightPosition");
            } else {
                parentBlock.removeClass("rightPosition");
            }
        }
    });

    $(document).mouseup(function (e){
        hide_element = $(".inner_menu_btn, .inner_menu");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            $(".inner_menu_btn").removeClass("active");
            $(".nav_2 > li").removeClass("active");
            $(".nav_2 > li").removeClass("rightPosition");
            $(".nav_2 > li > a").removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $(".inner_menu_btn").removeClass("active");
            $(".nav_2 > li").removeClass("active");
            $(".nav_2 > li").removeClass("rightPosition");
            $(".nav_2 > li > a").removeClass("active");
        }
    });

    // -----------------------

    $(".respmenubtn").click(function() {
        $(".resp_menu_wrapp, .respmenubtn").toggleClass("active");
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $(".resp_menu_wrapp").hasClass("active") ) {
                $(".resp_menu_wrapp, .respmenubtn").removeClass("active");
        }
    });

    // ------------------------

    $(".catalog_resp_btn").on("click", function(e) {
        e.preventDefault();
        if(bodyWidth <= 767) {
            parentBlock = $(this).closest(".catalog_resp_wrapp");
            dropdownNav = parentBlock.find(".catalog_resp");
            if(dropdownNav.is(":hidden")) {
                dropdownNav.slideDown(300);
                $(this).addClass("active");
            } else {
                dropdownNav.slideUp(300);
                $(this).removeClass("active");
            }
        }
    });

    // -----------------------

    // if($(".file_name").length > 0 ) {
        // parentBlock = $(this).closest(".file_input_wrapp");
        $('input').on('change', function() {
          var splittedFakePath = this.value.split('\\');
          parentBlock = $(this).closest(".file_input_wrapp");
          parentBlock.find(".file_name").text(splittedFakePath[splittedFakePath.length - 1]);
        });
    // }

});