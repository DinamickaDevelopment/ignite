var express = require('express'); 
var http = require('http'); 
var app = express(); 

var port = process.env.port || 1337; 

app.get('/', function(req, res) {
    
    console.log(req.get('Accept')); 

	// метод res.format позволяет формировать разные ответы сервера на основе загловка запроса Accept 
	res.format({
		'application/json': function() {
			console.log('json response'); 
			res.send({message: 'this is a json response!'}); 
		}
	}); 

}); 

app.listen(port, function () {
    console.log('app running on port ' + port)
}); 
