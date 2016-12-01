
$(document).ready(inicio);


function inicio(){
	$("#login").click(enviaURL);
	$("#richmond").click(enviaURL);
	$("#myon").click(enviaURL);
}

function enviaURL(){
	var endpoint = $(this).attr("data-info");
	window.open(endpoint);
}
