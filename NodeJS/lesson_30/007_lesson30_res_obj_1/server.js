var express = require('express'); 
var http = require('http'); 
var app = express(); 

var port = process.env.port || 1337; 

app.get('/', function(req, res) { 

	// res.app - свойство, содержащее ссылку на экземпляр express приложения, 
	// использующий данную midddleware функцию
	console.log(res.app); 

    // res.locals = свойство, хранящее локальные переменные данного цикла request/response
	res.locals.prop1 = 'this is a property!'; 
	console.log(res.locals.prop1); 

	console.log(res.headersSent); //res.headersSent - boolean, true, если заголовки ответа были отправлены 

	// метод res.append позволяет установить заголовки ответа 
	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	res.append('Warning', '199 Miscellaneous warning'); 
	// метод res.set делает то же самое 
	res.set('Cache-Control', 'no-cache'); 

	// метод attachment связывает тип данных ответа(заголовок Content-Type) с расширением указанного файла 
	// и устанавливает заголовок Content-Disposition: attachment 
	res.attachment('public/index.html'); 

	res.send('<h1>Sample Response</h1>'); 

	
}); 

var options = {
	port: port, 
	host: 'localhost', 
	method: 'GET', 
	path: '/?a=1',  
	headers: {'Accept':'application/json'}

}
http.get(options);  

app.listen(port, function() {
	console.log('app running on port ' + port); 
}); 