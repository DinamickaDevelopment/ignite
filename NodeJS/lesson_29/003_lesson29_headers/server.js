const http = require('http'); 
const port = process.env.port || 1337; 

const server = http.createServer((req, res) => {

    var headers = req.headers;

    var body = '';
    for (var prop in headers) {
        body += `${prop}: ${headers[prop]} <br />`
    }

    console.log('----------Raw Request Headers------------');

    var rawHeaders = req.rawHeaders;
    // выведет заголовки запроса в виде, в котором они были получены  
    console.log(rawHeaders);
    console.log('----------------------'); 

    // метод response.setHeader устанавливает заголовки ответа 
    res.setHeader('Content-Type', 'text/html'); 
    // getHeader возвращает заголовок ответа 
    console.log(res.getHeader('Content-Type')); 

    // если значение true, ответ по умолчанию отправляется с заголовком даты. По умолчанию true
    res.sendDate = false;

    console.log(res.headersSent) // boolean - true если заголовки уже отправлены 

    res.write('<h2> Request Headers</h2>');
    res.write(body); // метод write позволяет создавать тело ответа в режиме потока для записи данных(writable Stream)

    res.end(); // метод end сигнализирует о завершении создания ответа 
    	
});

server.listen(port); 

console.log('server running on port ' + port); 