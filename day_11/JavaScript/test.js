$(document).ready(function() {
 
 $("button").click(function () {
  $.ajax({
  url:"https://api.themoviedb.org/3/movie/206647?api_key=35e16679c616a21b9ddebb66272c5902", dataType: "json",
  complete: function (responce) {
    let returnedHTML = JSON.parse(responce.responceText);
    $("output").html(responce.responceText)
    },
    error: function() {
    $("output").html('There was an Error!');
    },
 });
 });
 
}); 