(function ($) {

    /*================================
                Header Scroll Spy
    ==================================*/

    jQuery(document).on('click', '.main-header li a[href^="#"]', function (event) {
        event.preventDefault();

        jQuery('html, body').animate({
            scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top - 80
        }, 800);
    });


    /*================================
                Sticky Header
    ==================================*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }
    });

}(jQuery));