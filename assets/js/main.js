$(".grid-25 > .button").click(function(){$("#modal").show()}),$("#modal i, .background").click(function(){$("#modal").hide()}),$("#modal form").submit(function(a){a.preventDefault();var b=$("#username").val(),c=$("#password").val();$("#username").removeClass("error"),$("#password").removeClass("error"),b&&c?"heather"===b&&"rocks"===c?(alert("You have been successfully logged in."),$("#modal").hide(),b=$("#username").val(""),c=$("#password").val("")):alert("Invalid username/password."):(b?c||$("#password").addClass("error"):$("#username").addClass("error"),alert("Please enter a value."))}),function(a){a.fn.tabMenu=function(){this.each(function(b,c){a(c).find(".tabs a").click(function(b){b.preventDefault(),a(this).parent().addClass("active"),a(this).parent().siblings().removeClass("active");var d=a(c).find(".tabs li").index(a(this).parent());a(c).find(".tab-content div").hide(),a(c).find(".tab-content div:eq("+d+")").show()})})}}(jQuery);var url="assets/js/rates.json",tableMaker={init:function(a){this.dataArray=a,this.sortApy()},dataArray:[],sortApy:function(){this.dataArray.sort(function(a,b){return a.apy<b.apy?1:a.apy>b.apy?-1:0}),this.renderTableRow()},renderTableRow:function(){this.dataArray.forEach(function(a){var b="<tr><td>"+a.name+"</td>";b+="<td>"+a.apy+"%</td>",b+="<td>"+a.earnings+"</td></tr>",$("tbody").append(b)})}};$.ajax({type:"GET",url:url,contentType:"application/json; charset=utf-8",dataType:"jsonp",success:function(a){tableMaker.init(a.records)},error:function(a){console.log(a)}}),$(".tab-menu").tabMenu();
