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
    var windowWidth = $(window).width();
    if(windowWidth > 760)$("#item").addClass("item-tho");
    else $("#item").removeClass("item-tho");
  });
});