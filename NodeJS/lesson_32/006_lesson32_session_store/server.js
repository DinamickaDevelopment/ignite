var express = require('express');
var app = express();

var port = process.env.port || 1337; 

var session = require('express-session');

// подключение модуля express-mysql-session 
var MySQLStore = require('express-mysql-session')(session);


var options = {
    // параметры соединения с бд 
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dinamicka123',
    database: 'session_test',

    // как часто будет проводиться удаление устаревших сессий(миллисекунды)
    checkExpirationInterval: 900000,
    // время жизни сессии(миллисекунды)
    expiration: 86400000
};

// создание хранилища для сессии 
var sessionStore = new MySQLStore(options);

app.use(session({
 
    secret: 'secret',
    saveUninitialized: true,
    resave: true, 
    store: sessionStore
}));

app.get('/', function (req, res) {

    console.log(req.session);

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