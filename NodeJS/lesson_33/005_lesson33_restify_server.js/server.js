var restify = require('restify'),
    fs = require('fs'); 

var port = process.env.port || 1337; 

// создание сервера 
var server = restify.createServer({
    name: 'myApp'
});

// middleware функции, используемые в restify, принимают те же параметры, что и в express 
server.use(function (req, res, next) {
    console.log('method: ' + req.method + '\n\r' + 'url: ' + req.url );  
    next(); 
})

// обработка get запроса 
server.get('/', function (req, res, next) {
    res.send('This is a server created with restify! GET');

});

// обработка post запроса 
server.post('/', function (req, res, next) {
    res.send('This is a server created with restify! POST');

});

server.use(function () {
    res.send(404); 
})

server.listen(port, function () {
    console.log('server running on port ' + port); 
});