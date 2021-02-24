$(document).ready(function() {

    $('.arrow_a').click(function(e) {
        e.preventDefault();
        var attrAr = $(this).attr('href');
        var heightAr = $(attrAr).offset().top;
        $('html').animate({
            scrollTop: heightAr
        }, 1000);
    })





    $(window).scroll(function() {
        if ($(window).scrollTop() >= 500) {
            $(".circle-up").css("opacity", 0.6);
        } else {
            $(".circle-up").css("opacity", 0);
        }
    });



    $('.circle-up').click(function() {
        $("html, body").animate({
            scrollTop: $(".header").height() + -1000
        }, 1000);
    });












    $('.header__bars').click(function() {
        if ($('.header-menu').css('opacity') == '0') {
            $('.header-menu').animate({
                opacity: "1"
            }, 1000);;
            $('.fa-bars').removeClass('fa-bars');
            $('.header__bars .fa').addClass('fa-times');
        } else {
            $('.header-menu').animate({
                opacity: "0"
            }, 1000);;
            $('.fa-times').removeClass('fa-times');
            $('.header__bars .fa').addClass('fa-bars');
        }

    });






    $('.area__name-tap').click(function(t) {
        t.preventDefault();
        let attrSud = $(this).attr('href');
        $(attrSud).show('area__sud');
        $('.area__close').click(function() {
            $('.area__sud').hide();
        });
    })







});