$(document).ready(function(){
 $('.contents a:gt(0)').hide();
 setInterval(function(){
  $('.contents a:first-child').fadeOut(2000)
                              .next('a')
                              .fadeIn(2000)
                              .end()
                              .appendTo('.contents');
 }, 3000);
});