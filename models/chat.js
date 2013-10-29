 'use strict'

 var Chat = (function() {

 	var chat;

 	//constructor
 	function Chat() {
 		chat = [];
 	};

 	Chat.prototype.add = function(message) {

 		chat.push(message);
 		console.log("Message added to chat");
 	};

 	Chat.prototype.send = function() {

 		return chat;
 	};

 	return Chat;

 })();

 module.exports = Chat;