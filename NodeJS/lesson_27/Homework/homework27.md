#Homework 

###Задача 1 
Дано 2 модуля: A и B.  

Код модуля A: 
```
var a = 10;
var b = function (x) {
    console.log(x); 
}


exports = {
    a: a, 
    b: b
}
``` 


Код модуля B: 
```
var loaded_module = require('./A');
console.log(loaded_module.a);
console.log(loaded_module.b(loaded_module.a)); 

```

Исправьте ошибку в коде модуля A, чтобы код модуля B заработал.  

###Задача 2 
Дано 2 модуля: A и B. 

Код модуля A: 
```
function Counter(count) {
    this.count = count;
    
}
``` 

Код модуля B: 
```
var counter1 = require('./A')(1);
var counter2 = require('./A')(2);

console.log(counter1.count);
console.log(counter2.count); 
``` 

Дополните код модуля A таким образом, чтобы в результате запуска модуля B в консоль было выведено 

```
1
2
``` 


