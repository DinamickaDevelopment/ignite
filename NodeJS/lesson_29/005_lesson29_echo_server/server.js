// В данном примере будет создан эхо-сервер, который выводит на экран 
// значение query-параметра message пути '/echo' 
// Чтобы увидеть работу сервера, перейдите по адресу 'localhost:1337/echo?message=Hello from server'

const http = require('http'); 
const url = require('url'); 
const port = process.env.port || 1337;

const server = http.createServer(); 

server.on('request', function(req, res) { 

	// request.method - возвращает http метод запроса(GET, PUT, etc.)
	// request.url - путь запроса 
	console.log(` ${req.method} \n\r ${req.url} `); 

	var urlParsed = url.parse(req.url, true); 

	if (urlParsed.pathname == '/echo' && urlParsed.query.message) { 
		res.statusCode = 200; // OK
		res.end(urlParsed.query.message); 
	} 
	else {
		res.statusCode = 404; // Not Found
		res.end('Page not found on this server!'); 
	}
}); 

server.listen(port); 
server.on('listening', function() {
	console.log('Server running on port ' + port); 
}); 