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

});