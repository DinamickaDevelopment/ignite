var express  = require('express'); 
var app = express(); 

var mysql = require('mysql'); 

var port = process.env.port || 1337; 


// соединения могут быть объединены для облегчения их многократного использования 
// или использования больщого количесва соединений  
var pool = mysql.createPool({
	connectionLimit: 1, // максимальное количество соединений, которые могут быть созданы одновременно
	queueLimit: 10, // максимальное разрешенное количество соединений в очереди обработки 
	aquireTimeout: 5000, // максимальное время ожидания при установке соединения 
	host: 'localhost', 
	user: 'root', 
	password: 'dinamicka123', 
	database: 'demo'
});  


app.get('/', function(req, res) { 
	// создать соединение
	pool.getConnection(function(err, conn){ 

			if (err) {
				console.log(err.stack); 
				return; 
			}

            console.log('first connection');

			// использовать соединение 
			conn.query('SELECT NAME FROM `items` WHERE ID=1', function(err, rows) {
			if (err) console.log(err); 

			res.status(200).send(rows[0].NAME); 
                
			// закончить соединение, позволить ему быть использованным еще раз
			conn.release(); 
		}); 

	}); 

	pool.getConnection(function(err, conn) {

			console.log('second connection'); 

			conn.query('SELECT * FROM `items`', function(err, rows) {
				if (err) console.log(err); 

			// метод pool.end закрывает все соединения 
			pool.end(function(err) {
					console.log('pool closed'); 
				})
			}); 
			
	}); 
}); 

// событие connection генерируется при установлении подключения 
pool.on('connection', function() {
	console.log('connected');  
}); 

// событие enqueue генерируется, когда в очереди обработки есть соединения, ожидающие подключения
pool.on('enqueue', function() {
	console.log('waiting for connection'); 
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 


