$(function () {

    $('.popup_on').click(function () {
        $('.popup').show();
    })

    $('.popup_off').click(function () {
        $('.popup').hide();
    })


    // 헤더
    $('nav ul li').mouseenter(function () {
        $('.sub').stop().slideDown();
        $('.nav_back').stop().slideDown();
    })

    $('nav ul li').mouseleave(function () {
        $('.sub').stop().slideUp();
        $('.nav_back').stop().slideUp();
    })


    // 헤더 포커스인
    $('nav ul li').focusin(function () {
        $('.sub').stop().slideDown();
        $('.nav_back').stop().slideDown();

    })
    $('nav ul li:last-child ul li:last-child').focusout(function () {
        $('.sub').stop().slideUp();
        $('.nav_back').stop().slideUp();
    })

    $('nav ul li a').focusin(function () {
        $(this).addClass('on');
    })

    $('nav ul li a').focusout(function () {
        $(this).removeClass('on');

    })


    //슬라이드
    function slide() {
        $('.slide>ul').animate({ top: '-300px' }, 1000, function () {
            $('.slide>ul').append($('.slide>ul li').first());
            $('.slide>ul').css({ top: '0' });
        })
    }
    setInterval(slide, 3000)

})
