
var url = 'http://community.ally.com/svc/api/';

var tableMaker = {
	init: function(array) {
		this.dataArray = array;
		this.sortApy();
	},
	dataArray: [],
	sortApy: function() {
		this.dataArray.sort(function(a, b){
			if (a.apy < b.apy) {
				return 1;
			} else if (a.apy > b.apy) {
				return -1;
			}
			return 0;
		});
		this.renderTableRow();
	},
	renderTableRow: function() {
		this.dataArray.forEach(function(bank){
			var totalString = '<tr><td class="bank">'+ bank.name + '</td>';
			totalString += '<td class="ap">' + bank.apy + '%</td>';
			totalString += '<td>' + bank.earnings + '</td></tr>';
			$('tbody').append(totalString);
		});
	}
};


$.ajax({
	type: "GET",
	url: url,
	contentType: "application/json; charset=utf-8",
	dataType: "jsonp",
	success: function (data, textStatus, jqXHR) {
		tableMaker.init(data.records);
	},
	error: function (errorMessage) {
		console.log(errorMessage);
	}
});


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