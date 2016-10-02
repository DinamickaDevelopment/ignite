var express  = require('express'); 
var app = express(); 

var mysql = require('mysql');  

var port = process.env.port || 1337; 


// параметры соединеня с бд
var connection = mysql.createConnection({ 
	host: 'localhost', 
	user: 'root', 
	password: 'dinamicka123',  
	database: 'demo', 
	port: 3306
}); 

app.use(function(req, res) { 

	if (req.url == '/') { 

		var sql = 'SELECT * FROM ?? WHERE ?? = ?'; 
		var inserts = [`items`,`ID`, 1]; 
		// метод format используетсся для форматирования запроса и более удобного кодирования его параметров 
		sql = mysql.format(sql, inserts); 

		// отправка отформатированного запроса 
		connection.query(sql, function(err, rows) {

			res.writeHead(200, {'Content-Type':'text/plain'}); 
			res.end(rows[0].NAME); 

		}); 
	}
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 