var pingPongIt = function(number) {
    if (number < 1) {
        return;
    } else if (number % 15 === 0) {
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

    $("#pingPongForm").submit(function(event) {

        var pingPongNumber = parseInt($("#pingPongInput").val());

        $("#bucket").empty();

        for(var i = 1; i <= pingPongNumber; i++) {
            $("#bucket").append("<li>" + pingPongIt(i) + "</li>");
        }

        event.preventDefault();

    });

});