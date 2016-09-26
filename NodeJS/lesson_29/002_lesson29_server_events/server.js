const http = require('http');
const port = process.env.port || 1337;

const server = http.createServer().listen(port);

server.on('request', function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Hello World');
});

server.on('connection', function () {
    console.log('connected to server!')
});

