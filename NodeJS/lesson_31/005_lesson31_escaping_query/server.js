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

// Для предотвращения взлома базы данных(с помощью SQL Injection) 
// следует всегда кодировать пользовательские данные, которые используются в теле SQL запроса 
// Для этого используются методы mysql.escape(), connection.escape() или pool.escape() 

app.use(function(req, res) {

	if (req.url == '/') {

		pool.getConnection(function(err, connection) { 

				// объект, который будет вставлен в базу данных
			var newItem = {
				name: 'Another item!', 
				description: 'some data to be stored'
			}; 

			// кодирование данных с помощью функции pool.escape(); 
			var sql = 'INSERT INTO `items` (NAME, DESCRIPTION) VALUES (' + pool.escape(newItem.name) + 
			// альтернатива функции escape-использование '?' как placeholder и передача данных, которые должны быть 
			// использованы в запросе, в массиве в качестве аргумента функции query, следующего за строкой sql запроса 
			', ?)'; 
			
			connection.query(sql, [newItem.description], function(err) {

				if (err) { 
					console.log(err); 
					return;  
				};

				console.log('data inserted!'); 

				// placeholder '??' используется для кодирования SQL идентификаторов 
				connection.query('SELECT * FROM ??', [`items`], function(err, rows) {

					res.writeHead(200, {'Content-Type': 'text/html'}); 
					res.write('<h1>Items in database: </h1>'); 

					var responseData = rows.map((row) => {
						return `<h3>${row.ID} - ${row.NAME} - ${row.DESCRIPTION}</h3>`
					}); 

					for (var i = 0; i < responseData.length; i++ ) {
						res.write(responseData[i]); 
					} 

					res.end(); 
					connection.release(); 
				}); 
			}); 
		});  
	}; 
}); 


app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 

