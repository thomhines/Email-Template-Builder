jQuery(function($) {

	$('.message').hide();
	$('.message').click(function() {
		$(this).stop().fadeOut(300);
	})


});



clipboard = new Clipboard('.copy_email', {
	target: function(trigger) {
		$content = $('.email_content')[0];
		console.log($content);
				$('.components').append($content);
		return $('.email_content')[0];

	}
});



clipboard.on('success', function(e) {
	$('.message').fadeIn(300).delay(4000).fadeOut();

    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});
