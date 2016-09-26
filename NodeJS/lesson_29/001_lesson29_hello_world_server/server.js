const http = require('http'); 
const port = process.env.port || 1337; //  порт, указанный при запуске сервера или порт 1337(по умолчанию)

// функция createServer возвращает новый экземпляр http.Server. 
// в качестве аргумента принимает функцию-обработчик запроса 
const server = http.createServer(function (request, response) {

    // указание заголовков ответа
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // завершить конфигурацию ответа 
    response.end('<h1>Hello World</h1>');

});

server.listen(port); 

console.log('Server running on port ' + port); 
