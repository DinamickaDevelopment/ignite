// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

var port = process.env.port || 1337; 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

var counter = 0;

// событие connection генерируется, когда socket.io клиент подключается к серверу
io.on('connection', function (socket) {
    console.log('user connected to socket');
    // генерация события test 
    socket.emit('test', {
        counter: counter++
    });

    // событие disconnect генерируется, когда socket.io клиент отключается от сервера 
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

}) 

server.listen(port, function () {
    console.log('app running on port ' + port); 
})