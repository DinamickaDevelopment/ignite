var express  = require('express'); 
var app = express();

var port = process.env.port || 1337; 


var path = require('path');
var bodyParser = require('body-parser'); 

// подключение модулей для обработки запросов 
var displayHandler = require('./js/displayhandler'); 
var insertHandler = require('./js/inserthandler'); 

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

// загрузить таблица с элементами 
app.get('/', displayHandler.displayItems);

// загрузка страницы для создания нового элемента 
app.get('/add', insertHandler.loadAddPage); 
// добавить новый элемент 
app.post('/add/newItem', insertHandler.addRow); 

// обработка ошибок 
app.use(function(err, req, res, next) {
	if (err) console.log(err.stack); 

	res.status(500).send('oops...something went wrong'); 
}); 

app.listen(port, function() { 

	console.log('app listening on port ' + port); 

});  
