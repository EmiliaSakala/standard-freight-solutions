$(document).on('ready', function() {
     
  $(".sliderr").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    
  });
 
});


$(function() {
	$('.toggler').on('click', function() {
		$('nav').slideToggle(500);
  });
});