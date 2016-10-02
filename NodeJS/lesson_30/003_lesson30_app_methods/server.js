var express = require('express'); 
var bodyParser = require('body-parser'); 
var port = process.env.port || 1337; 

var url = require('url'); 

var app = express(); 

// static - middleware функция для работы с файлами
app.use(express.static('public1'));
app.use("/p2" ,express.static('public2')); 
// middleware для обработки тела запроса в кодировке urlencoded 
app.use(bodyParser.urlencoded({ extended: true })); 

// метод app.all позоляет обработать запросы с использованием любого http метода
app.all('/', function(req, res, next) {
    console.log('request to main page!'); 
    res.end(req.method); 
 }); 

// обработка GET запросов по пути '/test'
app.get('/test', function(req, res) { 
	// чтение параметров GET запроса
	var data = url.parse(req.url, true).query; 
	res.writeHead(200, {'Content-Type':'text/html'}); 
	res.end(data.text); 
}); 

// обработка POST запросов по пути '/test'
app.post('/test', function(req, res) { 
	// чтение данных POST запроса 
	var data = req.body.text; 
	res.writeHead(200, {'Content-Type':'text/html'}); 
	res.end(data); 
});  

app.listen(port, function() {
	console.log('app running on port ' + port); 
}); 