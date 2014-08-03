(function($) {

	$.fn.tabMenu = function() {
		
		this.each(function(index, element) {
			
			$(element).find('.tabs a').click(function(event) {
				
				event.preventDefault();
				
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
				
				var index = $(element).find('.tabs li').index( $(this).parent() );
				
				$(element).find('.tab-content div').hide();
				$(element).find('.tab-content div:eq(' + index +')').show();

			});

		});
	};

}(jQuery));
