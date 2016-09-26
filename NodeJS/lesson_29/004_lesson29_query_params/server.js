var http = require('http');
var url = require('url');

var port = process.env.port || 1337; 

http.createServer(function (req, res) {

    // Для получения доступа к query параметрам используется метод url.parse 
	// синтаксис: url.parse(urlString[, parseQueryString]) 
	
	// urlString - строковое представление URL 
	// parseQueryString - boolean. Если значение true, query параметры будут представлены в виде JS объекта.
	
	// Таким образом, при парсинге строки 'some/url?param=1' query параметры будут представлены объектом { param: 1 } и доступны через свойство query
	
	// Если значение второго параметра url.parse - false, query параметры будут представлены в виде строки. 
    var query = url.parse(req.url, true).query;
    res.end('get params: ' + JSON.stringify(query));

}).listen(port, function () {
    console.log('Server running on port ' + port); 
});