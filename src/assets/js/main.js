
var url = 'http://community.ally.com/svc/api/';
 
$.ajax({
	type: "GET",
	url: url,
	contentType: "application/json; charset=utf-8",
	dataType: "jsonp",
	success: function (data, textStatus, jqXHR) {
		console.log(data.records);
	},
	error: function (errorMessage) {
		console.log(errorMessage);
	}
});

function renderInfo(data) {
	for (var i = 0; i < data.length; i ++) {
		
	}
}