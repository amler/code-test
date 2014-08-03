$('.tabs a').click(function(event) {
	event.preventDefault();
	$(this).parent().addClass('active');
	$(this).parent().siblings().removeClass('active');
	var index = $('.tabs li').index( $(this).parent() );
	$('.tab-content' ).children().hide();
	$('div.tab-content div:eq(' + index +')').show();
});