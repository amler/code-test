$(".grid-25 > .button").click(function(){$("#modal").show()}),$("#modal i, .background").click(function(){$("#modal").hide()}),$("#modal form").submit(function(a){a.preventDefault();var b=$("#username").val(),c=$("#password").val();$("#username").removeClass("error"),$("#password").removeClass("error"),b&&c?"heather"===b&&"rocks"===c?(alert("You have been successfully logged in."),$("#modal").hide(),b=$("#username").val(""),c=$("#password").val("")):alert("Invalid username/password."):(b?c||$("#password").addClass("error"):$("#username").addClass("error"),alert("Please enter a value."))}),function(a){a.fn.tabMenu=function(){this.each(function(b,c){a(c).find(".tabs a").click(function(b){b.preventDefault(),a(this).parent().addClass("active"),a(this).parent().siblings().removeClass("active");var d=a(c).find(".tabs li").index(a(this).parent());a(c).find(".tab-content div").hide(),a(c).find(".tab-content div:eq("+d+")").show()})})}}(jQuery);
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
	url: 'assets/js/rates.json',
	contentType: 'application/json; charset=utf-8',
	dataType: 'jsonp',
	success: function (data, textStatus, jqXHR) {
		tableMaker.init(data.records);
		console.log('good', data);
	},
	error: function (errorMessage) {
		console.log(errorMessage);
	}
});



$('.tab-menu').tabMenu();
