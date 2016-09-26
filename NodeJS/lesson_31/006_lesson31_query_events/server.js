var express  = require('express'); 
var app = express(); 

var mysql = require('mysql'); 

var port = process.env.port || 1337; 


// параметры соединеня с бд
var connection = mysql.createConnection({ 
	connectionLimit: 50, 
	host: 'localhost', 
	user: 'root', 
	password: '',  
	database: 'demo', 
	port: 3306
}); 

app.get('/', function(req, res) { 

	res.writeHead(200, {'Content-Type': 'text/html'}); 

	connection.connect(); 

	var query = connection.query('SELECT * FROM `items`'); 

	// одним из способов обработки запросов к базе данных 
	// является навешивание обработчиков событий на объект запроса 
	query
		.on('error', function(err) {
			console.log(err.stack); 
		})
		.on('fields', function(fields) {
			console.log(fields); 
		})
		.on('result', function(row) {
			
		    res.write('ID: ' + row.ID + '; ');
		    res.write('NAME: ' + row.NAME + '<br />');  
		})
		.on('end', function() {
			res.end(); 
		}); 
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 

