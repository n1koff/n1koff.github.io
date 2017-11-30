$('.portfolio-tab').on('click', function() {
	$('.portfolio-tab').removeClass('active');
	$(this).addClass('active');
	var tabNumber = $(this).attr('data-tab-number');
	$('.portfolio-screen').removeClass('active');
	$('.portfolio-screen[data-tab-number="' + tabNumber + '"]').addClass('active');
});