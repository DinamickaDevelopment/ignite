var express  = require('express'); 
var app = express(); 

var mysql = require('mysql'); 

var port = process.env.port || 1337; 


// параметры соединеня с бд
var pool = mysql.createPool({ 
	connectionLimit: 50, 
	host: 'localhost', 
	user: 'root', 
	password: '',  
	database: 'demo', 
	port: 3306
}); 

app.use(function(req, res) {
	pool.getConnection(function(err, conn) {
		if (err) throw err; 

		// метод query может также принимать в качестве аргумента объект, 
		// содержащий параметры запроса 
		conn.query({
			sql: 'SELECT * FROM `items` WHERE `NAME`=?',  
			timeout: 10000, 
			values: ['Hello there again!']
		}, function(err, rows, fields) {

			res.status(200).send(rows[0].NAME); 
		}); 

	})
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 

