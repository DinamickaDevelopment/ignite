var express = require('express'); 

var port = process.env.port || 1337; 

var path = require('path'); 
var fs = require('fs'); 

// multer - middleware для обработки данных формы в кодировке multipart/form-data 
var multer = require('multer'); 
// dest - директория для сохранения файлов, загружаемых на сервер 
var upload = multer({dest: 'uploads'}); 

// указать, что будет загружен один файл с именем recfile. 
// имя файла может быть любым, но оно должно совпадать со значением атрибута name элемента формы input с типом file
// например, <input type="file" name="recfile" />
var type = upload.single('recfile'); 

var app = express(); 

app.get('/', function(req,res, next) {
	 res.sendFile(__dirname + '/index.html'); 

})

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
 
 app.listen(port, function() {
	    console.log('App listening on port ' + port);
 }); 