// в данном примере показано создание базового сервера для чтения файлов 

const http = require('http'); 
const fs   = require('fs'); 
const url  = require('url'); 

const port = process.env.port || 1337; 

const server = http.createServer(function (req, res) { 
	// получение пути к файлу
	var path = url.parse(req.url).pathname; 

	console.log(`${path} - file requested!`); 

	// чтение файла по указанному пути 
	// метод substr удаляет первый символ пути('/')  
	fs.readFile(path.substr(1),  function(err, data) { 
		// обработчик ошибок
		if (err) {
			console.log(err); 
			res.writeHead(404, {'Content-Type': 'text/plain'}); 
			res.write('Not Found!'); 
		} else {
			res.writeHead(200, {'Content-Type': 'text/html'}); 
			// записать в овет содержимое читаемого файла 
            res.write(data.toString());
            console.log(data.toString());
		}

		// отправить тело ответа(response body)  
		res.end(); 
	})

}).listen(port); 

server.on('listening', function() {
	console.log('server running on port ' + port); 
}); 
