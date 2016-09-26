// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

var port = process.env.port || 1337; 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// создать пронстранство имен
var namespace = io.of('/namespace'); 

// подключение к пространству имен 
namespace.on('connection', function (socket) {
    console.log('connected to namespace');

    var room = ''; 
    // в каждом пространстве имен может быть выделена отдельная комната(room) - канал связи с произвольным названием  
    socket.on('btn_click', function (data) {
        if (data.btn == 1) {

            room = 'demo room 1'; 
            // подключение к комнате 1
            socket.join(room);
            socket.emit('room_join', { roomname: 1 });

        } else if (data.btn == 2) {

            room = 'demo room 2'; 
            // подключение к комнате 2
            socket.join(room);
            socket.emit('room_join', { roomname: 2 });
        }

        socket.on('get_greeting', function () {
            // метод to позволяет генерировать события, которые будут отправлены указанной комнате
            namespace.to('demo room 1').emit('greet', { message: 'Hello from room 1!' });
            namespace.to('demo room 2').emit('greet', { message: 'Hello from room 2!' });

        })
    })



})


server.listen(port, function () {
    console.log('app running on port ' + port);
})