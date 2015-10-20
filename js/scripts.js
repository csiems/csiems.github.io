$(document).ready(function() {

	$("#pingPongForm").submit(function(event) {

		var pingPongNumber = parseInt($("#pingPongInput").val());

		$("#bucket").empty();

		for(var i = 1; i <= pingPongNumber; i++) {

            if (i % 3 === 0 && i % 5 === 0) {
                $("#bucket").append("<li>ping-pong</li>");
            } else if (i % 3 === 0) {
                $("#bucket").append("<li>ping</li>");
            } else if (i % 5 === 0) {
                $("#bucket").append("<li>pong</li>");
            } else {
                $("#bucket").append("<li>" + i + "</li>");
            }

        }
			
        event.preventDefault();

	});

});