var express = require('express');
var app = express();
var port = process.env.port || 1337;  

var session = require('express-session');

// middleware для работы с сессиями 
app.use(session({
    // ключ для подписи cookie текущей сессии 
    secret: 'secret',
    // опция, которая позволяет сохранять сессионный cookie до изменений в сессии(если значение - true)
    saveUninitialized: true,
    // если true, объект сессии перезаписывается в хранилище, даже если в сессии не произошло изменений 
    resave: false
}));

app.get('/', function (req, res) {

    // доступ к объекту сессии хранится в свостве req.session 
    console.log(req.session);

    // объекту req.session можно задавать свойства, которые будут доступны в текущей сессии 
    req.session.numberOfRequests = req.session.numberOfRequests + 1;

    var requestCount = () => {
        return isNaN(req.session.numberOfRequests) ? 0 : req.session.numberOfRequests; 
    }

    res.end('Number of reguests: ' + requestCount() + 
        ' \n\r Refresh the page to increase count');
})

app.listen(port, function () {
    console.log('app running on port ' + port); 
})