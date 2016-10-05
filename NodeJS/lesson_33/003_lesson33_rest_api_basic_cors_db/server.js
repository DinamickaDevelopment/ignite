var express = require('express');
var app = express(); 
var router = express.Router();

var port = process.env.port || 1337; 

var mysql = require('mysql');  

// пул соединений 
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dinamicka123',
    database: 'todos' 
})

// middleware для использования CORS  
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function (req, res) {

    // подключение к бд 
    pool.getConnection(function (err, connection) {
        if (err) console.log(err)
      
        connection.query('SELECT * FROM `items`', function (err, rows) { 
				
            console.log('GET ' + req.url); 
            res.status(200).send('selected items: ' + JSON.stringify(rows)); 
            connection.release(); 
        });
    });
});

router.get('/:id', function (req, res) {

    // подключение к бд 
    pool.getConnection(function (err, connection) {
        if (err) console.log(err)

        connection.query('SELECT * FROM `items` WHERE id=' + req.params.id, function (err, rows) {

            console.log('GET ' + req.url);
            res.status(200).send('selected item: ' + JSON.stringify(rows));
            connection.release();
        });
    });
});

router.post('/', function (req, res) {

    // подключение к бд 
    pool.getConnection(function (err, connection) {
        if (err) console.log(err)

        connection.query('INSERT INTO `items`(name, description, completed) VALUES ("Test", "Some text", 1)', function (err) {

            console.log('POST ' + req.url);
            res.status(200).send('sample item added to database');
            connection.release();
        });
    });
});

router.put('/:id', function (req, res) {
    // подключение к бд 
    pool.getConnection(function (err, connection) {
        if (err) console.log(err)

        connection.query('UPDATE `items` SET name="new Name", description="Some other text", completed=0 WHERE id=' + pool.escape(req.params.id), function (err) {

            if (err) {
                console.log(err)
                return; 
            }

            console.log('PUT ' + req.url);
            res.status(200).send('item by id ' + req.params.id + ' changed');
            connection.release();
        });
    });
});

router.delete('/:id', function (req, res) {
    // подключение к бд 
    pool.getConnection(function (err, connection) {
        if (err) console.log(err)

        connection.query('DELETE FROM `items` WHERE id=' + pool.escape(req.params.id), function (err) {

            if (err) {
                console.log(err) 
                return;
            }

            console.log('DELETE ' + req.url);
            res.status(200).send('item deleted from database');
            connection.release();
        });
    });
});

// использовать роутер на пути /api 
app.use('/api', router); 

app.listen(port, function () {
    console.log('app running on port ' + port);
});