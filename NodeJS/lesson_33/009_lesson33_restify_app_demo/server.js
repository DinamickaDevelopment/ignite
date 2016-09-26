var restify = require('restify'); 

var http = require("http"),
    url = require("url"),
    path = require("path"), 
    fs = require('fs'); 

var port = process.env.port || 1337; 

// модуль для обработки запросов 
var apiHandler = require('./api_handler'); 

// создание сервера 
var server = restify.createServer({
    name: 'myApp'
});

// middleware для обработки тела запроса 
server.use(restify.bodyParser({ mapParams: true }));

server.use(function(req, res, next) {

    console.log(req.method + ' ' + req.url); 
    next(); 
})

server.get('/', function (req, res) {
    fs.readFile(path.join(__dirname,'index.html'),"utf8", function(err, file) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.write(err + "\n");
            res.end();
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(file);
        res.end();
  })
})

// выбрать все элементы 
server.get('/api', apiHandler.loadItems);

// создать новый элемент 
server.post('/api', apiHandler.createItem);

// просмотреть элемент с указанным ID
server.get('/api/:id', apiHandler.getItemById);

// обновить элемент по ID 
server.put('/api/:id', apiHandler.updateItem);

// удалить элемент по ID 
server.del('/api/:id', apiHandler.removeItem);  
 
// обработчик ошибок 
server.on('InternalServer', function(err) {
    err.body = 'oops...error'; 
    res.send(err); 
})

server.listen(port, function () {
    console.log('server running on port ' + port); 
});