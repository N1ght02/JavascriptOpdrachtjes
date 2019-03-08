$(document).ready(function(){

      $("#area").click(function(){
   var a = $("#width").val();
   var b = $("#height").val();
    $("#resultA").val ((+a) * (+b));
 });


  $("#perimeter").click(function(){
  var a = $("#width").val();
  var b  = $("#height").val();
  $("#resultP").val (2 *(+a) + 2 * (+b));
  });
});
