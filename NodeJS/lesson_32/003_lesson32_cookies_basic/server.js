var express = require('express');
var http = require('http'); 
var app = express();

var port = process.env.port || 1337; 

// подключение модуля cookie-parser
var cookieParser = require('cookie-parser');

// cookieParser middleware 
app.use(cookieParser())

app.get('/', function (req, res) {
    //метод res.cookie позволяет созранять cookies с установленными параметрами
    res.cookie('cookie1', 'Hello', {
        // срок жизни cookie
        expires: new Date(Date.now() + 900000),
        // делает cookie доступным только для сервера 
        httpOnly: true
    })

    // доступ к cookie через свойство req.cookies 
    res.end(req.cookies.cookie1);

    //res.on('end', function () {
    //    http.get('http://localhost:1337'); 
    //})

    console.log('Cookies: ', req.cookies)
})

    app.listen(port, function () {
        console.log('app running on port ' + port);
 })