var express = require('express'); 
var bodyParser = require('body-parser'); 

var url = require('url'); 

var app = express(); 

var port = process.env.port || 1337; 

// static - middleware функция для работы с файлами
app.use(express.static('public')); 
// middleware для обработки тела запроса в кодировке urlencoded 
app.use(bodyParser.urlencoded({ extended: true })); 

//Метод app.route() позволяет создавать обработчики маршрутов

app.route('/')
	.all(function(req, res) {

		console.log('request to main page!'); 
		// перенаправление на страниу index.html
		res.writeHead(301, {'Location':'index.html'}); 
		res.end(); 

}); 

app.route('/test')
	.get(function(req, res) {
		// чтение параметров GET запроса
		var data = url.parse(req.url, true).query; 
		res.writeHead(200, {'Content-Type':'text/html'}); 
		res.end(data.text); 
	})
	.post(function(req, res) {
		// чтение данных POST запроса 
		var data = req.body.text; 
		res.writeHead(200, {'Content-Type':'text/html'}); 
		res.end(data); 
	})

app.listen(port, function() {
	console.log('app running on port ' + port); 
}); 