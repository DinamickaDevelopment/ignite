var express = require('express');
var app = express(); 
var router = express.Router(); 

var port = process.env.port || 1337; 


// middleware для использования CORS  
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/:id', function (req, res) {
    res.status(200).send('get item by ID ' + req.params.id + '!'); 
    });

router.post('/', function (req, res) {
    res.status(201).send('create item!');
});

router.put('/:id', function (req, res) {
    res.status(200).send('update item by ID ' + req.params.id + '!');
});

router.delete('/:id', function (req, res) {
    res.status(200).send('remove item by ID ' + req.params.id + '!');
});

// использовать роутер на пути /api
app.use('/api', router); 

app.listen(port, function () {
    console.log('app running on port ' + port);
});