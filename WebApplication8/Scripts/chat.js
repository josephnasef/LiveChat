$(function () {
	////connection to class called chathub
	var chat = $.connection.ChatHub;

	////recive message from users 
	chat.client.PushMessage = function (name, message) {
		$("#discussion").append("<li> <strong> " + name + " </strong> says :   <p>" + message + "</p></li>");
	};

	////get username and save it in hidden text
	$("#displayname").val(prompt(" please enter your name ", ''));

	////get focus on textboxt of message 
	$("#textmessage").focus();

	////connectoin to hub is successfully :)
	$.connection.hub.start().done(function () {
		$("#sendmessage").click(function () {
				
				var name = $("#displayname").val();
				var message = $("#textmessage").val();

				chat.server.sendmessage(name, message);
				$("#textmessage").val(' ').focus();
			});
		});

});