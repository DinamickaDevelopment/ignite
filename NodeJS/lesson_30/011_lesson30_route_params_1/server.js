var express = require('express'); 
var app = express(); 
var path = require('path')

var port = process.env.port || 1337; 

// express.Router - middleware функция, позволяющая вынести маршрутизауию в отдельный модуль
var router = express.Router(); 

router.use(function (req, res) {

	switch (req.url) {
        case '/': {
            console.log('request to main page!'); 
            // res.redirect - перенаправление запроса 
    
            res.redirect('/view1'); 
            break;
        }
		case '/view1': {
			console.log('view1'); 
			res.sendFile(path.join(__dirname,'/public/view.html')); 
			break; 
		}
	
		default: { 
			res.writeHead(404, {'Content-Type':'text/plain'}); 
			res.end('Page not found!'); 
		}
	}
}); 

app.get('/view1/:test', function(req, res) {
		console.log('view1 with param!'); 
		// доступ к параметрам маршрутизации осуществляется через объект req.params 
		console.log(req.params.test);
		res.end(req.params.test); 
}); 

app.use(router); 

app.listen(port, function() {
	console.log('app listening on port ' + port); 
}); 