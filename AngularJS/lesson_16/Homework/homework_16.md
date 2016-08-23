#Homework 

###Задача 1 
Создайте страницу с панелью навигации со следуюшими пунктами: home, contact. 
Используйте маршрутизацию для переключения меду пунктами меню. Файлы для задачи находятся в папке Task. 

###Задача 2 Добавьте в шаблон страницы home список со свойством name из следующего массива: 
``` 
   var people = [{name: 'Vasya', age: 20, email: 'vasya@mail.ru', employed: false}, 
    {name: 'Masha', age: 25, email: 'm@m', employed: true}, 
    {name: 'Petya', age: 27, email: 'petya@stuff', employed: true}, 
    {name: 'John', age: 36, email: 'johnDoe@mail', employed: true},
    {name: 'Jane', age: 28, email: 'janeDoe@mail', employed: false}]
```
Добавьте на страницу поддержку htm5Mode. 

###Задача 3
Добавьте на страницу следующий функционал: 
* При клике по элементу списка на странице home, пользователь перенаправляется на страницу contact по адресу ‘/contact + routeParams’, где routeParams – параметры маршрутизации, созданные с помощью сервиса $routeParams, представляющие собой значения свойств массива people для элемента, по которому кликнул пользователь. 
* Используйте данные, переданные через $routeParams, для автозаполнения формы на странице contact 
