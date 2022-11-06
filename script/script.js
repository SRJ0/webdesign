
$(function() {

// $('.slide:gt(0)').hide();

setInterval(function() {
    $('.slideWrap').animate({'margin-top':'-300px'}, function(){
        $('.slide:first').appendTo('.slideWrap');
        $('.slideWrap').css({'margin-top':'0px'})
    });

    // $('.slideWrap').animate({'margin-top':'-300px'}, function(){
    //     $('.slide').first().appendTo('.slideWrap');
    //     $('.slideWrap').css({'margin-top':'0px'})
    // })

//     $('.slide:first').fadeOut(1500).next().fadeIn(1500);
//     $('.slide:first').appendTo('.slideWrap');
}, 3000);

$('.tabMenu li').click(function(){
    var idx=$(this).index();
    $('.tabItem > *').hide().removeClass('on');
    $('.tabItem > *').eq(idx).show().addClass('on');
});


    $('header nav > ul').mouseenter(function() {
        $('ul.menuItem, .headerBg').stop().slideDown(800);
    });

    // $('li.menu').mouseenter(function() {
    //     $(this).find('ul.menuItem').stop().slideDown();
    // });

    $('header nav > ul').mouseleave(function() {
        $('ul.menuItem, .headerBg').stop().slideUp();
    });
});