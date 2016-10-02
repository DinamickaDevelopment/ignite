var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

var port = process.env.port || 1337;

app.get('/', function (req, res) {

    // метод res.append позволяет установить заголовки ответа 
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Warning', '199 Miscellaneous warning');
    // метод res.set делает то же самое 
    res.set('Cache-Control', 'no-cache');

    //Устанавливает заголовок ответа Content- Disposition в "attachment".Опционально может быть передано имя файла. 
    res.attachment('img/logo.png');
    console.log(__dirname + "/img/logo.png");
    res.sendFile(__dirname + "/img/logo.png");	

    //res.download(__dirname + "/img/logo.png");
});

app.listen(port, function () {
    console.log('app running on port ' + port);
}); 