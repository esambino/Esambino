$(function () {

    $(window).load(function () {
        setTimeout(function () {
            $('.loadingPixel').fadeIn(1500);
        }, 500);
        setTimeout(function () {
            $('#center > h1').fadeIn(1500);
        }, 1500);
    });

    $('#center').hover(function () {
        $('.loadingPixel').children().addClass('slowmo');
    });

});