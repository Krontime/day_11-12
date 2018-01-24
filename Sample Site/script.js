$(document).ready(function() {
 
 //$("p").click(function() {
 //	$("p").css("color", "red")
 	
 //});
 
 //$("h2").mouseover(function() {
 //	$("h2").css("background-color", "lightblue");
 //});
 
 //$("h2").mouseover(function() {
 //	$(this).css("font-size", "2em");
 //});
 
 //$(".bottom_button").mouseenter(function() {
 //	$("body").css("background-color", "black");
 //});
 
 //$(".bottom_button").mouseleave(function() {
 //	$("body").css("background-color", "white");
 //});
 
 //$("h2").mouseover(function() {
 //	$("p").fadeToggle(1000);
 //});
 
	$(".card").mouseleave(function() {
		$(this).slideUp(1000);
	});
	$(".card").mouseenter(function() {
		$(this).slideDown(1000);
	});

	$(".bottom_button").mouseenter(function(){
		$(".bottom_button").fadeTo(1000, 1)
	});
	$(".bottom_button").mouseleave(function(){
		$(".bottom_button").fadeTo(1000, 0.5)
	});
	$("img").click(function(){
		if($(this).attr("src") === "img/3.png"){
			$(this).attr("src", "img/1.png")
		} else if($(this).attr("src") === "img/1.png") {
			$(this).attr("src", "img/2.png")
		} else {
			$(this).attr("src", "img/3.png")
		}
	});

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
