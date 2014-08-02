
var url = 'http://community.ally.com/svc/api/';
var dataArray = [];
$.ajax({
	type: "GET",
	url: url,
	contentType: "application/json; charset=utf-8",
	dataType: "jsonp",
	success: function (data, textStatus, jqXHR) {
		dataArray = data.records;
		// console.log('ajax ', data.records);
		sortApy(dataArray);
	},
	error: function (errorMessage) {
		console.log(errorMessage);
	}
});

function renderInfo(record) {
	record.forEach(function(record){
		var totalString = '<tr><td class="bank">'+ record.name + '</td>';
		totalString += '<td class="ap">' + record.apy + '%</td>';
		totalString += '<td>' + record.earnings + '</td></tr>';
		$('tbody').append(totalString);
	});
}

function sortApy(array) {

	dataArray.sort(function(a, b){
		var apyA = a.apy,
			apyB = b.apy;
		if (apyA < apyB) {
			return 1;
		} else if (apyA > apyB) {
			return -1;
		}
		return 0;
	});
	console.log('sort ', dataArray);
	renderInfo(dataArray);

}
// this.sort(function(a, b) {
        
//     });
// fruits.sort();

