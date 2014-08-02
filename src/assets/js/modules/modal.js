$('.button').click(function() {
	$('.modal-wrap, #modal').show();
});

$('#modal i, .modal-wrap').click(function() {
	$('.modal-wrap, #modal').hide();
});

$('#modal form').submit(function(event) {
	event.preventDefault();
	var username = $('#username').val();
	var password = $('#password').val();
	
	$('#username').removeClass('error');
	$('#password').removeClass('error');

	if (!username || !password) {
		if (!username) {
			$('#username').addClass('error');
		} else if (!password) {
			$('#password').addClass('error');
		}
		alert('Please enter a valid value');
	} else if (username === 'heather' && password === 'rocks') {
		alert('You have been successfully logged in.');
		$('.modal-wrap, #modal').hide();
	} else {
		alert('Invalid username/password.');
	}
});

