// подключение express и socket.io 
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path'); 

var port = process.env.port || 1337; 

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {
    
    // отправка данных клиенту 
    socket.emit('data', { message: 'data from server' }); 

    // подтверждение получения данных клиентом 
    socket.on('response', function (data) {
        console.log(data.message);
    });
}) 

server.listen(port, function () {
    console.log('app running on port ' + port); 
})