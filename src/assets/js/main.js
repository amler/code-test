
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
			var totalString = '<tr><td>'+ bank.name + '</td>';
			totalString += '<td>' + bank.apy + '%</td>';
			totalString += '<td>' + bank.earnings + '</td></tr>';
			$('tbody').append(totalString);
		});
	}
};


$.ajax({
	type: 'GET',
	url: url,
	contentType: 'application/json; charset=utf-8',
	dataType: 'jsonp',
	success: function (data, textStatus, jqXHR) {
		tableMaker.init(data.records);
	},
	error: function (errorMessage) {
		console.log(errorMessage);
	}
});



$('.tab-menu').tabMenu();

