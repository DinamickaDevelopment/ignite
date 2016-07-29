#Class Work 

###Задача 1 

Напишите функцию sumArgs, которая суммирует все свои аргументы. При решении задачи используйте метод call или apply. 

###Задача 2  

Перепишите с использованием встроенного метода bind: 
```
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
}; 

var f = bind(user.sayHi, user);  
f(); 
``` 

###Задача 3 

Напишите функцию joinArgs, которая выводит свои аргументы, разделенные символом  ‘*’ на экран в виде строки. 
Используйте прием “одалживания методов”.  У вас должно получиться: 
```
joinArgs(1,2,3) // 1*2*3 
joinArgs('hello', 'world', '!') // hello*world*!
```
