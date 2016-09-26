var express = require('express'); 
var app = express(); 
var http = require('http'); 

var port = process.env.port || 1337; 

app.use(function(req, res) { 

	// req.app - свойство, содержащее ссылку на экземпляр express приложения, 
	// использующий данную midddleware функцию
	console.log(req.app); 

	console.log(req.method); // http метод => GET 
	console.log(req.query); // параметры адресной строки в виде объекта 

	console.log(req.protocol); // протокол (http или https) 
	console.log(req.secure); // true или false(true если req.protocol == 'https') 

	// req.accepts - метод, который проверяет типы данных, которые допустимы  
	// для данного запроса. Если тип данных недопустим, возвращает false 
	console.log(req.accepts(['text/html', 'json'])); 
	console.log(req.acceptsCharsets('utf-8')); 

	console.log(req.get('Accept')); // возвращает указанный заголовок запроса 

	res.end('See console for info'); 

}); 

var options = {
	port: port, 
	host: 'localhost', 
	method: 'GET', 
	path: '/?a=1',  
	headers: {'Content-Type':'text/html'}

}
http.get(options);  


app.listen(port, function() {
	console.log('app running on port ' + port); 
}); 