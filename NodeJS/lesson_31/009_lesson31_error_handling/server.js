var express  = require('express'); 
var app = express(); 

var mysql = require('mysql'); 

var port = process.env.port || 1337; 


var connection = mysql.createConnection({
  port: 843 // WRONG PORT
});

// err.code - код ошибки (ошибка mySQL Server или NodeJS)
// err.fatal - boolean, true если ошибка не совместима с функционированием connection 
connection.connect(function(err) { 
  console.log(err.code); // 'ECONNREFUSED'
  console.log(err.fatal); // true
});

connection.query('SELECT 1', function(err) {
  console.log(err.code); // 'ECONNREFUSED'
  console.log(err.fatal); // true
});

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 

