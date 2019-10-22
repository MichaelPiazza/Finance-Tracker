var card = "<i class='fa fa-credit-card'></i>";
var cash = "<i class='fa fa-money'></i>";
var trash = "<i class='fa fa-trash'></i>"
var sum = 0;
var amt = 0;
var boolean = false;
$("button").click(function() {
	var type_of = $("#type_of option:selected").text();
	var desc = $("#desc").val();
	amt = Number($("#amt").val());
	if(type_of === "Card") {
		$("table").append("<tr><td><span><i class='fa fa-trash'></i></span>" + card + "</td><td>" + desc + "</td><td>$" + amt + "</td></tr>")
	} else {
		$("table").append("<tr><td><span><i class='fa fa-trash'></i></span>" + cash + "</td><td>" + desc + "</td><td>$" + amt + "</td></tr>")
	}
	sum = sum + amt;
	$("label").text(sum);

	$("span").addClass("style")
	
	$(".style").click(function() {
		deleteRow();
	})

});
function deleteRow() {
	$("table").on("click", ".style", function() {
		$(this).closest("tr").fadeOut(500, function() {
			$(this).closest("tr").remove();
			sum = sum - amt;
			$("label").text(sum);
		})
	})
}