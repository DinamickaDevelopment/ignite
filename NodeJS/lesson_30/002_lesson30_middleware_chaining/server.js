var express = require('express');
var app = express(); 
var port = process.env.port || 1337; 

app.use(function(req, res, next) { 

	if (req.url == '/') {
		res.end('Hello!'); 
	} else {
		next(); // передать управление следующей функции middleware 
	}

}); 

app.use(function(req, res, next){

	if (req.url ==  '/test') {
		res.end('Hello from test page!');  
	} else {
		next(); // передать управление следующей функции middleware 
	}
}); 

app.use(function(req, res) {
	res.writeHead(404, {'Content-Type': 'text/plain'}); 
	res.end('404 Page not found!');  
}); 

app.listen(port, function() {
	console.log('App listening on port ' + port); 
}); 