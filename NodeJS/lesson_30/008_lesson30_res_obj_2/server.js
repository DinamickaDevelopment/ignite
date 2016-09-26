var express = require('express'); 
var http = require('http'); 
var path = require('path'); 
var app = express(); 

var port = process.env.port || 1337; 

app.get('/', function(req, res) { 

	// метод cookie позволяет создавать cookies 
	res.cookie('someCookie', 'this is a cookie', {
		httpOnly: true
	}); 
	res.cookie('anotherCookie', 'this is another cookie!'); 

	// удалить cookie 
	res.clearCookie('anotherCookie'); 

	// метод sendFile позволяет указывать в ответе файл для чтения браузером 
	res.sendFile(path.join(__dirname,'/public/index.html')); 
}); 

app.listen(port, function() {
	console.log('app running on port ' + port); 
}); 