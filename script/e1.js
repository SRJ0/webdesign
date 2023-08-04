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

  setInterval(function() { 
    // fade $('.slide:gt(0)').hide()
    $('.slide-wrap').animate({'margin-left':'-300px'}, function() { 
      // fade $('.slide:first').fadeOut(1500).next().fadeIn(1500)
      $('.slide:first').appendTo('.slide-wrap')
      $('.slide-wrap').css({'margin-left':'0px'})
    })
  }, 3000)


});