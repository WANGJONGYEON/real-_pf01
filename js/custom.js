$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        pagination: {
            el: ".main_visual .main_visual_slide .page",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
    const mms = new Swiper('.main_ment_slide', {
        loop: true,
        direction: "vertical",
        navigation: {
            nextEl: '.main_ment .arrows .next',
            prevEl: '.main_ment .arrows .prev',
        },

    });
})

$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideDown();

        }
    })

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on')
        $('.header .gnb>ul>li ul').removeAttr('style')
    })
})