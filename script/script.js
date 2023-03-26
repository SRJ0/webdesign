$(function() {
  //popup
  $('.notice > li:nth-child(1)').click(function() {
    $('.popup-box').show()
    $('.popup-bg').show()
  })

  $('.popup-box button').click(function() {
    $('.popup-box').hide()
    $('.popup-bg').hide()
  })

  //menu A
  $('header nav > ul').mouseenter(function(){
    $('ul.sub-menu').stop().slideDown(800)
  });  

  $('header nav > ul').mouseleave(function(){
    $('ul.sub-menu').stop().slideUp(500)
  })

  //slide
  setInterval(function() { // 가로는 margin-left
    $('.slide-wrap').animate({'margin-top':'-300px'}, function() { 
      $('.slide:first').appendTo('.slide-wrap')
      $('.slide-wrap').css({'margin-top':'0px'})
    })

  // 페이드
  // $('.slide:gt(0)').hide()
  // setInterval(function() {
  //   $('.slide:first').fadeOut(1500).next().fadeIn(1500)
  //   $('.slide:first').appendTo('.slide-wrap')
  }, 3000)

  //tab
  $('.tab-menu li').click(function() {
    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()
    $('.tab-item > *').hide().removeClass('on')
    $('.tab-item > *').eq(idx).show().addClass('on')
  })


})

