var express = require('express'); 
var http = require('http'); 
var app = express(); 

var port = process.env.port || 1337; 

app.get('/', function(req, res) {
    
    console.log(req.get('Accept')); 

	// метод res.format позволяет формировать разные ответы сервера на основе загловка запроса Accept 
    res.format({
        'text/plain': function () {
            res.send('text/plain');
        },

        'text/html': function () {
            res.send('<p>text/html</p>');
        },

        'application/json': function () {
            res.send({ message: 'application/json' });
        },

        'default': function () {
            res.status(406).send('Not Acceptable');
        }
    });

}); 

app.listen(port, function () {
    console.log('app running on port ' + port)
}); 
