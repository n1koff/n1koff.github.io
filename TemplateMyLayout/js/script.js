$(document).ready(function(){
  $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
      });

  $(window).resize(function(){
  	var ScreenHeight = screen.height;
    if( ScreenHeight > 760)$("#item").addClass("item-set");
    else $("#item").removeClass("item-set");
  });
});