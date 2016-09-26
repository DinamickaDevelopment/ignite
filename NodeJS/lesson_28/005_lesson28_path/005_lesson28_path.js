var path = require('path');

// __filename - глобальный объект nodeJS, который содержит имя файла, код которого выполняется 
console.log('filename: ' + __filename); 

// __dirname - глобальный объект nodeJS, который содержит имя директории, в которой находится файл, код которого выполняется  
// path.dirname(path) - возвращает директорию указанного пути 
console.log(path.dirname('dirname: ' + __dirname));


// path.parse(path) - представляет путь в виде JS объекта 
var pathObj = path.parse(__filename); 
console.log('parsed path: ' + pathObj); 

// path.format(pathObject) - метод, противоположный parse - преобразует объект пути в строку 
console.log('formatted path: ' + path.format(pathObj)); 

// path.isAbsolute(path) - возвращает true, если путь абсолютный, в противном случае - false 
console.log('path is absolute: ' + path.isAbsolute(__filename)); 

// path.join([path[, ...]]) - метод, который объединяет сегменты пути и нормализирует путь, полученный в результате
console.log('joined path 1: ' + path.join('/somefolder', __filename)); 
console.log('joined path 2: ' + path.join('../', __dirname)); 
