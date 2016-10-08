## Загрузка изображений на сервер 

### Установка необходимых пакетов 
* [express](http://expressjs.com/)
```
$ npm install express 
``` 

* [multer](https://github.com/expressjs/multer) - модуль для обработки данных формы в кодировке multipart/form-data. 
```
$ npm install multer
```

### Клиент 
* Создайте файл index.html. 

* Создайте форму, содержащую элемент input с типом file. 
* Присвойте этому элементу атрибут name с произвольным значением. 

```
<form action="/upload" method="POST" enctype="multipart/form-data">
	<input type="file" name="sample_file"/>
</form>
```

* Значение атрибута action - путь, по которому будет отправлен HTTP запрос при отправке формы. 
* Значение атрибута method - HTTP метод для отправки данных формы. Укажите в значении атрибута POST. 
* Атрибут enctype - кодировка, в которой будет отправлена форма. Следует указать тип кодировки multipart/form-data. 

### Сервер 
* Создайте файл server.js. 

* Укажите в файле неободимые для работы зависимости: 
```
var express = require('express'); 
var multer = require('multer'); 
```

* Настройте конфигурацию загрузчика файлов: 
```
var upload = multer({dest: 'uploads'}); // dest - директория для сохранения загружаемых файлов 

```

* Укажите тип загружаемого файла. 
* Важная деталь: имя файла, передаваемого в качестве аргумента методу single, должно совпадать со значением атрибута элемента формы с типом file (```<input type="file">```). 
```
var type = upload.single('sample_file'); 
```

* Запуск приложения: 
```
var app = express(); 
app.listen(3000); // укажите любой порт
``` 


* Загрузка файла index.html при открытии страницы приложения. 

```
app.get('/', function(req,res, next) {
	 res.sendFile(__dirname + '/index.html'); 

})

``` 

* Обработка POST-запроса по пути '/upload' (т.е. запроса при отправке формы из файла index.html): 
```
// указать файл при обработке POST запроса (второй аргумент метода app.post)
 app.post('/upload', type, function(req, res) { 
 
	 // загруженный файл доступен через свойство req.file
	 console.log(req.file); 
	 
	 // файл временного хранения данных
	 var tmp_path = req.file.path;
	 
	 // место, куда файл будет загружен 
	 var target_path = path.join(req.file.destination, req.file.originalname); 
	
	  // загрузка файла 
	  var src = fs.createReadStream(tmp_path); 
	  var dest = fs.createWriteStream(target_path);
	  
	  src.pipe(dest); 
	  
	  // обработка результатов загрузки 
	  src.on('end', function() { 
	  
		// удалить файл временного хранения данных
		fs.unlink(tmp_path); 
		res.send('complete'); 
	  });
	  src.on('error', function(err) { 
	  
	  	// удалить файл временного хранения данных
	    fs.unlink(tmp_path);  
		res.send('error'); 
	  });

 }) 
```


* В результате выполнения данного кода файл будет загружен из формы на странице index.html в папку uploads. 
* Полный код примера находится в папке example рядом с данным файлом с инструкцией. 
