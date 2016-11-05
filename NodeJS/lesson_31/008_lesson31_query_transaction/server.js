var express  = require('express'); 
var app = express(); 

var mysql = require('mysql'); 

var port = process.env.port || 1337; 


var connection = mysql.createConnection({ 
	host: 'localhost', 
	user: 'root', 
    password: 'dinamicka123',  
	database: 'demo', 
	port: 3306
});  

app.get('/', function(req, res) {

        
		// использование метода beginTransaction предоставляет возможность безопасной работы с бд, 
		// а именно - возможность отката изменений в бд в случае ошибки 
		connection.beginTransaction(function(err) { 

			if (err) { console.log(err.stack) }; 

			connection.query('SELECT * FROM `items` WHERE ID=1', function(err, rows) {
			  
			  	// откат изменений в случае ошибки 
				if (err) {
			        	return connection.rollback(function() {
                          console.log(err.message);
			       	 });
			    } 

			// применить изменения к базе данных
			connection.commit(function(err) { 

				// откат изменений в случае ошибки  
		        if (err) {
		          return connection.rollback(function() {
                      console.log(err.message);
		          });
		        } 

		        res.send(rows[0].NAME); 
	        	console.log('success!');

			}); 
		})
	}); 
});

app.get('/error', function () {
    connection.beginTransaction(function (err) {

        if (err) { console.log(err.stack) };

        // запрос с ошибкой! 
        connection.query('SELECT * FROM `items` WHERE ID=some_id', function (err, rows) {

            // откат изменений в случае ошибки 
            if (err) {
                return connection.rollback(function () {
                    console.log(err.message);
                });
            }

            // применить изменения к базе данных
            connection.commit(function (err) {

                // откат изменений в случае ошибки  
                if (err) {
                    return connection.rollback(function () {
                        console.log(err.message); 
                    });
                }

                res.send(rows[0].NAME);
                console.log('success!');

            });
        })
    });
})

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

}); 

