// process - глобальный объект node.js. Для его использования не обязательно вызывать require. 

// Свойство process.argv возвращает массив, содержащий аргументы командной строки, переданные при запуске процесса node.js
// Первый элемент - process.ecexPath - абсолютный путь исполняемого файла, запустившего node.js 
// Второй элемент - путь JS-файла, который исполняется 
// Оставшиеся элементы - аргументы командной строки
console.log(`all cmd variables:  ${process.argv}`); 

console.log(`user variable: ${process.argv[2]}`); 

//process.env.var_name - доступ к переменным окружения nodeJS 
console.log(`environment variable: ${process.env.test}`); 