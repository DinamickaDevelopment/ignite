var express  = require('express'); 
var app = express(); 

var mysql = require('mysql'); 

var port = process.env.port || 1337; 

// параметры соединеня с бд
var connection = mysql.createConnection({ 
	connectionLimit: 50, 
	host: 'localhost', 
	user: 'root', 
	password: 'dinamicka123',  
	database: 'demo', 
	port: 3306
}); 

app.use(function(req, res) {

	// подключение к базе данных
	connection.connect(function(err) { 

		if (err) console.log(err.stack); 

		console.log('connected as id ' + connection.threadId);
	}); 

	// метод query - отправка запроса к базе данных. Синтаксис: 
	// connection.query(sqlString, callback); Параметры: 
	// sqlString - команда SQL в виде строки 
	// callback - функция с аргументами: 
	//		err - ошибка (в случае, если она произошла)
	//		results - результат запроса 
	//		fields - информация про поля, полученные в результате запроса 
	connection.query('SELECT * FROM `items`', function(err, rows, fields) {
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write('<table>'); 

		for (var i = 0; i < rows.length; i++) {
			res.write(`
				<tr>
					<td>${rows[i].ID}</td>
					<td>${rows[i].NAME}</td>
				</tr>
			`)
		}; 

		res.write('</table>'); 
		res.end(); 
	})
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 

