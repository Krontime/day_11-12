$(document).ready(function() {
    
    $("#switch1").click(function(){
	    if ($("#switch1").attr("src") === "img/switch_off.png"){
	        $("#switch1").attr("src", "img/switch_on.png");
	        $("#bulb1").attr("src", "img/bulbon.gif");
	    } else {
	        $("#switch1").attr("src", "img/switch_off.png");
	        $("#bulb1").attr("src", "img/bulboff.gif");
	    }      
	});
	
	$("#switch2").click(function(){
	    if ($("#switch2").attr("src") === "img/switch_off.png"){
	        $("#switch2").attr("src", "img/switch_on.png");
	        $("#bulb2").attr("src", "img/bulbon.gif");
	    } else {
	        $("#switch2").attr("src", "img/switch_off.png");
	        $("#bulb2").attr("src", "img/bulboff.gif");
	    }      
	});
	
	$("#switch3").click(function(){
	    if ($("#switch3").attr("src") === "img/switch_off.png"){
	        $("#switch3").attr("src", "img/switch_on.png");
	        $("#bulb3").attr("src", "img/bulbon.gif");
	    } else {
	        $("#switch3").attr("src", "img/switch_off.png");
	        $("#bulb3").attr("src", "img/bulboff.gif");
	    }      
	});
})

//FUNCTIONS