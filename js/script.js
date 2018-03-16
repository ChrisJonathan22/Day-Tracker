$(document).ready(function() {

    var date = new Date();
    var day = date.getDay();


    if (day == 0) {
        $("#0").css({"background-color" : "pink", "height" : 200, "color" : "white"});
    }

    if (day == 1) {
        $("#1").css({"background-color" : "green", "height" : 200, "color" : "white"});
    }

    if (day == 2) {
        $("#2").css({"background-color" : "red", "height" : 200, "color" : "white"});
    }

    if (day == 3) {
        $("#3").css({"background-color" : "dodgerblue", "height" : 200, "color" : "white"});
    }

    if (day == 4) {
        $("#4").css({"background-color" : "yellow", "height" : 200, "color" : "white"});
    }

    if(day == 5) {
        $("#5").css({
            "background-color" : "teal", "height" : 200, "color" : "white"
        });

         // Or you can use this syntax for single css properties.  $("#5").css("backgroundColor", "teal");
         
    }
     if (day == 6) {
         $("#6").css({"background-color" : "purple", "height" : 200, "color" : "white"});
     }
        
   
    





});
