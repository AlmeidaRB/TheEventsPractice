$(document).ready(function() {
//all code that is dom dependent lives here

//events


//shorthand methods
$(".box").eq(0).click(function (event) {
event.preventDefault();
$(this).css("border-radius", "25px").css("background-color", "purple");
});

$(".box").eq(1).hover(function (event) {
  event.preventDefault();
  $(this).css("background-color", "green");
});

$(".box").eq(2).mouseleave(function (event) {
  event.preventDefault();
  $(this).css("border-radius", "0%");
});

$(".box").eq(3).mousemove(function (event) {
  event.preventDefault();
  $(this).css("background-color", "yellow");
});

$(".box").eq(4).dblclick(function (event) {
  event.preventDefault();
  $(this).css("background-color", "orange");
});

$(".box").eq(5).mouseenter(function (event) {
  event.preventDefault();
  $(this).css("background-color", "black");
});

$(".box").eq(6).click(function (event) {
  event.preventDefault();
  $(this).css("border", "20px solid dimgray");
});

$(".box").eq(7).click(function (event) {
  event.preventDefault();
  $(this).css("background-color", "blue");
});

$(".box2").eq(0).click(function (event) {
  event.preventDefault();
  $(this).css("background-color", "orange").css("border-radius", "0%");
});

$(".box2").eq(1).click(function (event) {
  event.preventDefault();
  $(this).css("background-color", "blue");
});



});
