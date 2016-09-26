var express  = require('express'); 
var app = express();

var port = process.env.port || 1337; 

var path = require('path');
var bodyParser = require('body-parser'); 

// подключение модуля для обработки запросов 
var displayHandler = require('./js/displayhandler'); 

// установка генератора шаблонов 
app.set('views', './pages'); 
app.set('view engine', 'ejs');

// подгрузка статических файлов из папки pages 
app.use(express.static(path.join(__dirname, 'pages')));

// middleware для обработки данных в формате JSON 
var jsonParser = bodyParser.json();
var textParser = bodyParser.text(); 

app.use(jsonParser); 
app.use(textParser); 

// загрузить таблицу с элементами 
app.get('/', displayHandler.displayItems);

// обработка ошибок 
app.use(function(err, req, res, next) {
	if (err) console.log(err.stack); 

	res.status(500).send('oops...something went wrong'); 
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

});  
