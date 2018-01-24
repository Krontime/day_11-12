$(document).ready(function(){
    // //1:
    // $(".theButton").click(function(){
    //     $(".theButton").hide()
    // })
    
    
    // //2:
    // $(".theButton").click(function(){
    //     $(this).hide()
    // })
    
    
    // 3:
    $(".container").click(function(){
        $(this).siblings().fadeTo(1000, 0.1)
    });
    
    // //4:
    $(".superButton").click(function(){
        $(".container").children().fadeTo(500, 1)
    });
    
    //5:
    $(".theButton").mouseenter(function(){
        $(this).css("background-color", "black")
    });
    $(".theButton").mouseleave(function(){
        $(this).css("background-color", "")
    });
 
});