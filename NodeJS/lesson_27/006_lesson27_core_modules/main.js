// встроенные модули nodejs импортируются без символов './' или '../'
var fs = require('fs');

fs.writeFileSync('test.txt', 'Built-in module example!');

fs.readFile('test.txt', function (err, rez) {
    console.log(rez.toString()); 
}); 