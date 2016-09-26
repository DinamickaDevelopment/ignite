var restify = require('restify'),
fs = require('fs');

var port = process.env.port || 1337; 

// создание сервера 
var server = restify.createServer({
    name: 'myApp'
});

server.use(function (req, res, next) {

    console.log('method: ' + req.method + '\n\r' + 'url: ' + req.url);
    next();
});

server.get('/', function (req, res, next) {
    res.send('This is a get request!');

});

server.get('/error', function (req, res, next) {
    // В restify имеется встроенный конструктор ошибок, с помощью которого можно 
    // создать большинство ошибок, соответствующих http статус-кодам. Например: 
        // BadRequestError (400 Bad Request) 
        // UnauthorizedError (401 Unauthorized)
        // InvalidHeaderError (400 Bad Request)
        // ForbiddenError (403 Forbidden)
    var err = new restify.errors.InternalError('Error Demo!');
    next(err); 

});

// событие InternalServer генерируется, когда функция next() в составе любой middleware 
// функции получает ошибку в качетсве аргумента
server.on('InternalServer', function (req, res, err) {
    err.body = 'something is wrong!';
    res.send(err); 
});

server.listen(port, function () {
    console.log('server running on port ' + port);
});