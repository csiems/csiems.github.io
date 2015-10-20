$(document).ready(function() {

	$("#pingPongForm").submit(function(event) {

		var pingPongNumber = parseInt($("#pingPongInput").val());

		$("#bucket").empty();

		for(var i = 1; i <= pingPongNumber; i++) {

            if (i % 3 === 0 && i % 5 === 0) {
                $("#bucket").append("ping-pong<br>");
            } else if (i % 3 === 0) {
                $("#bucket").append("ping<br>");
            } else if (i % 5 === 0) {
                $("#bucket").append("pong<br>");
            } else {
                $("#bucket").append(i + "<br>");
            }

        }
			
        event.preventDefault();

	});

});