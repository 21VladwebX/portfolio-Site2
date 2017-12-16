
$(document).ready(function(){
  if($(window).width()<= 768){

    $('#hamburger').on('click',function(){
      $('.header__nav').css({
        "left": "0px",
        "z-index" : "10",
        "opacity": "1",
        "position" : "fixed",
        "background-color" : "rgba(80, 156, 79, 0.86)",
        "padding": "0 10px 0 10px"
      });
    });

    $('#close').on('click',function(){
      $('.header__nav').css({
        "left": "-100%",
        "opacity": "0"
      });
    });

  }
});
