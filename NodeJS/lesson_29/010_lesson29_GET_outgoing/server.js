const http = require('http'); 
const port = process.env.port || 1337;

// сервер для обработки запроса 
const server = http.createServer(function (req, res) { 

    console.log('request')
    res.end('GET request path: ' + req.url);  

}).listen(port, function () {
    console.log('Server running on port ' + port); 

    // Создание запроса 
    // Параметры создаваемого запроса 
    var options = {
        host: 'localhost',
        port: port,
        path: '/request'
    }; 

    // callback используется для обработки ответа 
    var callback = function (response) {

        // Записывать данные в body по мере поступления 
        var body = '';
        response.on('data', function (data) {
            body += data;
        });

        response.on('end', function () {
            // Данные полностью получены 
            console.log(body);
        });
    } 

    // Для создания запроса используется метод http.request(), который принимает в качестве аргумента объект конфигурации запроса
        var req = http.request(options, callback);
        req.end(); 


}); 


