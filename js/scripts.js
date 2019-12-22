var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock,
    item,
    dropdownList,
    slideBtn,
    dotVal;

$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

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
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendArrows: ".promo_slider_controls",
            appendDots: ".promo_slider_controls",
        });
    }

});