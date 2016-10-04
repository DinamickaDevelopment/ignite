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
    // время устаревания сессии(миллисекунды)
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

    req.session.numberOfRequests = req.session.numberOfRequests + 1;

    var requestCount = () => {
        return isNaN(req.session.numberOfRequests) ? 0 : req.session.numberOfRequests;
    }

    res.set('Content-Type', 'text/html'); 
    res.end('<h2>Number of reguests: ' + requestCount() + '</h2>' + 
        ' <h5>Refresh the page to increase count</h5>') 

    // метод store.get(sessionID, cb) предоставляет доступ к сессии по ID 
    sessionStore.get(req.sessionID, function (err, data) {

        if (err) console.log(err);

        var sessionObj = data;
        console.log(sessionObj);

        if (sessionObj.numberOfRequests > 9) {

            // метод store.clear(cb) удаляет все сессии из хранилища 
            sessionStore.clear(function (err) {

                if (err) console.log(err);

                console.log('store is cleared');

            });
        }
    });

    // метод store.length(cb) возвращает количество сохраненных сессий 
    sessionStore.length(function (err, data) {
        if (err) console.log(err);

        console.log(data)
    });
    
});

app.listen(port, function () {
    console.log('app running on port ' + port);
})