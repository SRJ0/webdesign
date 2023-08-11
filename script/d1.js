$(function() {

    $('.main-menu').on('mouseenter', function() {
        $(this).find('.sub-menu').stop().slideDown();
    });
    $('.main-menu').on('mouseleave', function() {
        $(this) .find('.sub-menu').stop().slideUp();
    });


    $('.popup > .pop-btn').click(function() {
        $('.popup-box').hide();
    });


    $('.notice li > a:nth-child(1)').click(function() {
        $('.popup-box').fadeIn();
    });


    setInterval(function() {
        $('.slide-wrap').animate({'margin-top':'-400px'}, function() {
            $('')
        })
    }, 3000);
    


});