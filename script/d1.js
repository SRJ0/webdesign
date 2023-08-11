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

    $('.tab-menu li').click(function() {
        $('.tab-menu li').removeClass('on'); 
        $(this).addClass('on');

        const idx = $(this).index()
        $('.tab-item > *').hide().removeClass('on')
        $('.tab-item > *').eq(idx).show().addClass('on')

    });

    setInterval(function() {
        $('.slide-wrap').animate({'margin-top':'-400px'}, function() {
            $('.slide:first').appendTo('.slide-wrap')
            $('.slide-wrap').css({'margin-top':'0px'})
        })
    }, 3000);
    


});