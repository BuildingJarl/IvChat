var Chat = require('../models/chat');


module.exports.controller = function(app){

	var chat = new Chat();
	

	app.get('/', function (request, response) {

		response.render("index");
	});

	//Used by angular to get partial views
	app.get('/partials/:name', function (request, response) {

		var name = request.params.name;
		response.render('partials/' + name);
	});

	app.post('/message' , function (request, response) {

		chat.add(request.body);
		response.send(true);
	});

	app.get('/getmessage', function (request,response) {
		response.send(chat.send);
	});

};