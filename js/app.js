$(window).resize(function(){
  if ($(window).width() < 1264) {
    $('.office').css('background-size', 'cover');
  } else {
    $('.office').css('background-size', 'contain')
  }
})
