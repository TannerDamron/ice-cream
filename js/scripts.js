$(document).ready(function(){
  var flavors =["chocolate","vanilla","strawberry","rocky-road"]

  flavors.forEach(function(flavor) {
  $("#list").append("<li>" + flavor + "</li>");

    // var favorite = $("." + flavors)
    // $(flavors).text();
  });
});
