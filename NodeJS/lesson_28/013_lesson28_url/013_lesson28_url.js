var url = require('url'); 


// Строка URL - структурированная строка, состоящая из многочисленных значимых компонентов. 
// При применении к ней метода parse возвращается объект URL, содержащий все эти компоненты в качестве свойств 
var mockUrl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'; 

// при вызове url.parse со вторым параметром true 
// функция будет парсить параметры запроса(queryString)
var mockUrlObj = url.parse(mockUrl, true); 
console.log(mockUrlObj); 

// метод url.format преобразует объект URL в строку URL 
var formattedUrl = url.format(mockUrlObj); 
console.log(formattedUrl); 

// метод url.resolve(from, to) преобразует второй аргумент(целевой URL) по образцу первого аргумента(базовый URL)
var resolvedUrl = url.resolve('http://example.com/one/two', '/two/three'); 
console.log(resolvedUrl); // 'http://example.com/two/three'