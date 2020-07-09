let nav = $('.nav');
let burger = $('.burger');
let intro = $('.header__intro');
let menu = $('.burger__menu');

$(document).ready(function () {

    $("a.scrollTo").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 800);
    });

    burger.click(function (e) {
        e.preventDefault();
        nav.toggleClass('nav__active');
        intro.toggleClass('header__intro__active');
        menu.toggleClass('burger__active');
    });

    $('.photos__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        speed: 700,
        touchThreshold: 10,
        autoplay: true,
    });


});




















