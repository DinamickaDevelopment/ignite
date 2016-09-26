var app = require('http').createServer(handler)
var io = require('socket.io')(app);

var fs = require('fs');
var path = require('path'); 

var port = process.env.port || 1337; 

function handler(req, res) {
    // чтение файла index.html 
    fs.readFile(path.join(__dirname, 'index.html'),
    function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    });
}

io.on('connection', function (socket) {
    // генерация событий, которые будут переданы клиенту 
    socket.emit('news', { greeting: 'Hello World!' });
    socket.on('greeting', function (data) {
        console.log(data);
    });
})


app.listen(port, function () {
    console.log('app running on port ' + port); 
});
