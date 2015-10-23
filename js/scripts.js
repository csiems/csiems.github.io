//function to return  ping, pong, pingpong, or number
var pingPongIt = function(number) {
    if (number % 15 === 0) {
        return "pingpong";
    } else if (number % 5 === 0) {
        return "pong";
    } else if (number % 3 === 0) {
        return "ping";
    } else {
        return number;
    }
}

$(document).ready(function() {
    //listener for button press
    $("#pingPongForm").submit(function(event) {
        //turn input into usable data
        var pingPongNumber = parseInt($("#pingPongInput").val());
        //empty the bucket div (so that previous use of app is removed)
        $("#bucket").empty();
        //call function for each case 1 to the number entered; append it to bucket div as a list item
        for(var i = 1; i <= pingPongNumber; i++) {
            $("#bucket").append("<li>" + pingPongIt(i) + "</li>");
        }
        //prevent information from submitting   
        event.preventDefault();

    });

});