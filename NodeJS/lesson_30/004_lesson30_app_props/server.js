var express = require('express');
var qs = require('qs');
var app = express(); 

// locals - локальные переменные приложения
app.locals.title = 'myApp'; 
app.locals.created = Date.now();  

console.log(app.locals.title); 
console.log(app.locals.created); 

// app.set позволяет указывать настройки приложения
app.set('port', 1337); 

// свойство query parser устанавливает режим обработки параметров адресной строки 
// если установлено значение false, параметры адресной строки парситься не будут 

console.log(app.get('query parser')) // extended 
//app.set('query parser', false);

app.all('/', function (req, res, next) {
    console.log('request to main page!');
    res.end(req.method);
}); 

// app.get используется для доступа к настройкам приложения 
app.listen(app.get('port'), function(){
	console.log(`app listening on port ${app.get('port')}`); 
});  