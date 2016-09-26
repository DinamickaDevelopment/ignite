var express = require('express'); 
var app = express(); 
var path = require('path'); 

var port = process.env.port || 1337; 

app.get('/', function (req, res, next) {
    res.redirect('/default'); 
    next(); 
})

app.use('/:id', function (req, res, next) { 
	next(); 
})

// метод app.param позволяет вынести работу с параметрами маршрутизации в отдельный модуль 
app.param('id', function(req, res){ 
	var text = 'param: ' + req.params.id; 
	console.log(text); 
	res.send(text); 
})

app.listen(port, function() {
	console.log('app listening on port ' + port); 
}); 