$('.button').click(function() {
	$('#modal').show();
});

$('#modal i, .background').click(function() {
	$('#modal').hide();
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
		alert('Please enter a value.');
	} else if (username === 'heather' && password === 'rocks') {
		alert('You have been successfully logged in.');
		$('#modal').hide();
		username = $('#username').val('');
		password = $('#password').val('');
	} else {
		alert('Invalid username/password.');
	}
});

