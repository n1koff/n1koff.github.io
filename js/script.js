$(document).ready(function(){
  $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});

$(document).ready(function() {
 
  $(window).resize(function(){
  	var ScreenHeight = screen.height;
    var windowWidth = $(window).width();
    if( ScreenHeight > 760)$("#item").addClass("item-set");
    else $("#item").removeClass("item-set");
  });
});