$(document).ready(function(){
  $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true
      });

  $(window).resize(function(){
  	var ScreenHeight = screen.height;
    if( ScreenHeight > 760)$("#item").addClass("item-set");
    else $("#item").removeClass("item-set");
  });
});