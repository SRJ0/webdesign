
$(function() {

// $('.slide:gt(0)').hide();

    // 가로형 2
    // $('header nav > ul').mouseenter(function() {
    //     $('ul.menuItem, .headerBg').stop().slideDown();
    // })

    // $('header nav > ul').mouseleave(function() {
    //     $('ul.menuItem, .headerBg').stop().slideUp();
    // })

    //세로형
    $('li.menu').mouseenter(function(){
        $(this).find('ul.menuItem').stop().slideDown()
    })
    $('li.menu').mouseleave(function(){
        $('ul.menuItem').stop().slideUp()
    })


    setInterval(function() {
        // 수직
        // $('.slideWrap').animate({'margin-top':'-300px'}, function(){
        //     $('.slide:first').appendTo('.slideWrap');
        //     $('.slideWrap').css({'margin-top':'0px'})
        // });

        // 수평
        $('.slideWrap').animate({'margin-left':'-300px'}, function(){
            $('.slide').first().appendTo('.slideWrap');
            $('.slideWrap').css({'margin-left':'0px'})
        })

        // 페이드
    //     $('.slide:first').fadeOut(1500).next().fadeIn(1500);
    //     $('.slide:first').appendTo('.slideWrap');
    }, 3000)


    $('.tabMenu li').click(function(){
        var idx=$(this).index();
        $('.tabItem > *').hide().removeClass('on')
        $('.tabItem > *').eq(idx).show().addClass('on')

        $('.tabMenu li').removeClass('on')
        $(this).addClass('on')
    });

    $('.notice li:nth-child(1)').click(function(){
        $('.popUpBox').show()
    })

    $('.popUpBox button').click(function() {
        $('.popUpBox').hide()
    })

})