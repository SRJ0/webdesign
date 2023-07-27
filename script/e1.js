$(function() {

    $('li.main-menu').mouseenter(function() {
        $(this).find('ul.sub-menu').stop().fadeIn() //세로2
    })
    $('li.main-menu').mouseleave(function() {
        $(this).find('ul.sub-menu').stop().fadeOut()//세로2 
    })

    $('.popup > button').click(function() { 
        $('.popup-box').hide();
    });

});