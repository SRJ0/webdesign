$(function() {
  //popup
  $('.notice > li:nth-child(1)').click(function() {
    $('.popup-box', '.popup-bg').show()
  })

  $('.popup-box button').click(function() {
    $('.popup-box', '.popup-bg').hide()
  })

  //menu 가로1 2
  // $('header nav > ul').mouseenter(function() {
  //   $('ul.sub-menu, .header-bg').stop().slideDown()
    
  // });  

  // $('header nav > ul').mouseleave(function() {
  //   $('ul.sub-menu, .header-bg').stop().slideUp()
  // })

  //menu 가로3 세로1
  $('li.menu').mouseenter(function() {
    // $(this).find('ul.sub-menu').stop().slideDown()
    $(this).find('ul.sub-menu').stop().fadeIn() //세로2
  })
  $('li.menu').mouseleave(function() {
    // $(this).find('ul.sub-menu').stop().slideUp()
    $(this).find('ul.sub-menu').stop().fadeOut()//세로2 
  })

  
  

  //slide-세로 / 가로는 margin-left
  setInterval(function() { 
    $('.slide-wrap').animate({'margin-top':'-300px'}, function() { 
      $('.slide:first').appendTo('.slide-wrap')
      $('.slide-wrap').css({'margin-top':'0px'})
    })

  // fade
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

