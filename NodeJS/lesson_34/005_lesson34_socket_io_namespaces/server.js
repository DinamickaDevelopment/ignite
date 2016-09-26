// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

var port = process.env.port || 1337; 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// пространства имен в socket.io создаются с помощью функции io.of('namespace_name') 
var namespace = io.of('/namespace'); 

// подключение к именному пространству socket.io 
namespace.on('connection', function (socket) {
    console.log('connected to namespace');

    // генерация события greet 
    namespace.emit('greet', { message: 'Hello from namespace!' });

}) 



server.listen(port, function () {
    console.log('app running on port ' + port);
})