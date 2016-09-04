var path = require('path'); 

var express = require('express');
var app = express();

app.get('/', function (req, res) {
 
    res.sendFile(path.join(__dirname, '/index.html')); 
});

app.get('/build/bundle.css', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/bundle.css')); 
});

app.get('/build/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/bundle.js'));
});


app.get('/1.bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/1.bundle.js'));

})

app.get('/2.bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/2.bundle.js'));

})

app.listen(3000, function () {
    console.log('app running on port 3000'); 
})
 