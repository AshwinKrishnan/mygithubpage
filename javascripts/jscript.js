$(document).ready(function(){
	$("body").hide().fadeIn(1000);
	$(".Proj-buttons").hide().fadeIn(2000);
	$("#notes_personal").hide();
	$("#notes_skills").hide();
	$("#notes_bio").hide();
	$("#home_1").fadeIn(2000,function(){
       $(this).animate({"right" : "210px"}, 1000);
     });  

	$("#home_2").fadeIn(2000,function(){
       $(this).animate({"left" : "310px"}, 1000);
     });  

	$("#home_3").fadeIn(2000,function(){
       $(this).animate({"left" : "310px"}, 1000);
     });  

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