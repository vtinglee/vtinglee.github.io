$(document).ready(function() {

	$('#logo').click(function() {
		$('#welcome').show();
	});

	$('.button-overlay').click(function() {
		$('#welcome').hide();
	});

	$('.menu-bread').click(function(){
		$('.menu-overlay').css("background", "#fff");
	});

	
});