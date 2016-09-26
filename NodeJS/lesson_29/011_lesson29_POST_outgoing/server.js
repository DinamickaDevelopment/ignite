const http = require('http'); 
const fs = require('fs'); 
const url = require('url'); 
const port = process.env.port || 1337; 

const server = http.createServer(function(req, res) {

	 var body = ''; 

 	 // обработка ошибок запросв
 	 req.on('error', function(err) {
 	 	console.log(err); 
 	 }); 
 	 // получение данных POST запроса 
 	 req.on('data', function(data) {

 	 	body = data.toString(); 

 	 	// создание тела ответа 
 	 	res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write(body); 
		res.end(); 

		console.log(`data from request: ${body}`); 
 	 });  



}).listen(port, function () { 

    // Создание POST запроса 
    // данные для передачи с POST запросом
    var postData = 'This is sample POST data!'; 

    // Параметры создаваемого запроса 
    var options = {
        host: 'localhost',
        port: port,
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' }

    }; 


    // сделать запрос на сервер 
    var req = http.request(options, (res) => {

        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

        res.setEncoding('utf8');

        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });

        res.on('end', () => {
            console.log('No more data in response.');
        });

    });

    req.write(postData); // запись данных в тело запроса 
    req.end(); 

    console.log('server running on port ' + port); 
}); 


