var express  = require('express'); 
var app = express(); 

var port = process.env.port || 1337; 

var mysql = require('mysql'); 

// параметры соединеня с бд
var connection = mysql.createConnection({
	host: 'localhost', // имя хоста базы данных
	user: 'root', // MySQL пользователь, под именем которого авторизоваться
	password: '', // пароль пользователя MySQL 
	database: 'demo', // имя базы данных 
	port: 3306 // порт, на котором установлен MySQL сервер
}); 

app.use(function(req, res) { 

	if (req.url == '/') {

		// подключение к базе данных
		connection.connect(function(err) { 

			if (err) console.log(err.stack); 

			 console.log('connected as id ' + connection.threadId);
		}); 

		// запрос к базе данных 
		connection.query('SELECT NAME FROM `items` WHERE ID=1', function(err, rows) {

			if (err) console.log(err.stack); 

			var data = rows[0].NAME; 
			res.status(200).send(data); 

			console.log('query to database successful'); 
		}); 

		res.on('finish', function() {

			// отключение от базы данных 
			connection.end(function(err) {

				if (err) console.log(err.stack); 

				console.log('disconnected from database'); 
			}); 

		})

	}
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 