(function($) {
    "use strict"

    // NAVIGATION
    var responsiveNav = $('#responsive-nav'),
        catToggle = $('#responsive-nav .category-nav .category-header'),
        catList = $('#responsive-nav .category-nav .category-list'),
        menuToggle = $('#responsive-nav .menu-nav .menu-header'),
        menuList = $('#responsive-nav .menu-nav .menu-list');

    catToggle.on('click', function() {
        menuList.removeClass('open');
        catList.toggleClass('open');
    });

    menuToggle.on('click', function() {
        catList.removeClass('open');
        menuList.toggleClass('open');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest(responsiveNav).length) {
            if (responsiveNav.hasClass('open')) {
                responsiveNav.removeClass('open');
                $('#navigation').removeClass('shadow');
            } else {
                if ($(event.target).closest('.nav-toggle > button').length) {
                    if (!menuList.hasClass('open') && !catList.hasClass('open')) {
                        menuList.addClass('open');
                    }
                    $('#navigation').addClass('shadow');
                    responsiveNav.addClass('open');
                }
            }
        }
    });

    // HOME SLICK
    $('#home-slick').slick({
        autoplay: true,
        infinite: true,
        speed: 1000,
        arrows: true,
    });

    $('#banner-slick').slick({
        autoplay: true,
        infinite: true,
        speed: 1000,
        arrows: false
    });

    // PRODUCTS SLICK
    $('#product-slick-1').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        infinite: true,
        speed: 1000,
        // dots: true,
        arrows: true,
        appendDots: '.product-slick-dots-1',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });

    $('#product-slick-2,#product-slick-3').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        // autoplay: true,
        infinite: true,
        speed: 1000,
        // dots: true,
        arrows: true,
        // appendDots: '.product-slick-dots-2',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });

    // PRODUCT DETAILS SLICK
    $('#product-main-view').slick({
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        fade: true,
        asNavFor: '#product-view',
    });

    $('#product-view').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '#product-main-view',
    });

    // PRODUCT ZOOM
    $('#product-main-view .product-view').zoom();

    // PRICE SLIDER
    var slider = document.getElementById('price-slider');
    if (slider) {
        noUiSlider.create(slider, {
            start: [1, 999],
            connect: true,
            tooltips: [true, true],
            format: {
                to: function(value) {
                    return value.toFixed(2) + '$';
                },
                from: function(value) {
                    return value
                }
            },
            range: {
                'min': 1,
                'max': 999
            }
        });
    }

    $(function() {
        $('#gotop').click(function() {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 700) {
                $('#gotop').fadeIn('slow');
            } else {
                $('#gotop').fadeOut('fast');
            }
        });
    });

    $(".collection-btn").click(function() {
        $(".fa-heart").toggleClass("fa-heart-style");
    });

    $("#copy-code-1,#copy-code-2").click(function() {
        $("#prompting-box").fadeIn(3000);
        $("#prompting-box").fadeOut(4000);
    });

})(jQuery);