$(function() {
    $("li.gnb-menu > a").mouseover(function () { // mouseover out은 버블링 o preventDefault o
        $(this).addClass("over");
        $(this).next('ul.sub-menu').stop().slideDown();
    });
    $("li.gnb-menu").mouseleave(function () {
        $("li.gnb-menu > a").removeClass("over");
        $('ul.sub-menu').stop().slideUp();
    });

    setInterval(function() {
        $('.slide:gt(0)').hide()
        // $('.slide-box').animate({'margin-left': '-300px'}, function() {
            $('.slide:first').fadeOut(1500).next().fadeIn(1500)
            $('.slide:first').appendTo('.slide-box')
            // $('.slide-wrap').css({'margin-left':'0px'})
        // })
    }, 3000);

});