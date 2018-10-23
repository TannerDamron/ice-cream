$(document).ready(function(){
  var flavors =["chocolate","vanilla","strawberry","rocky-road"]
  alert(flavors);
  alert(flavors[2]);
  for (var counter = 0; counter < flavors.length; counter += 1) {
    $("#list").append("<li>" + flavors[counter] + "</li>");
  }
});
