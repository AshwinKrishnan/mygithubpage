$(document).ready(function(){
	$("body").hide().fadeIn(1000);
	$(".Proj-buttons").hide().fadeIn(2000);
	$("#notes_personal").hide();
	$("#notes_skills").hide();
	$("#notes_bio").hide();
	$(".index").hide().fadeIn(4000);
	  

	$("#personal").click(function(){
		$("#notes_personal").slideToggle();
	});

	$("#skills").click(function(){
		$("#notes_skills").slideToggle();
	
	});

	$("#bio").click(function(){
		$("#notes_bio").slideToggle();
	
	});
});


