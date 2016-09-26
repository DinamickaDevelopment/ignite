// встроенный модуль fs - file system - предоставляет API для работы с файлами. 
// методы fs имеют синхронную и асинхронную формы 
var fs = require('fs');

// асинхронное создание файла 
fs.writeFile('file.txt', 'this is some data!', function(err) { 
    if(err) {
        console.log(err)
    } 

    // асинхронное чтение из файла 
    fs.readFile('file.txt', { encoding: 'utf-8' }, function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data.toString())
        }
    }); 
}); 


