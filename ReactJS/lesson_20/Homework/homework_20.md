#Homework 

###Задача 1 
Создайте 2 React компонента – родительские компонент, содержащий поле ввода и дочерний компонент, содержащий список элементов массива users: 
```
var users = [{name:"Anne Montgomery",gender:"Female"},
{name:"Annie George",gender:"Female"},
{name:"Gary Butler",gender:"Male"},
{name:"Lisa Mendoza",gender:"Female"},
{name:"Marilyn Henry",gender:"Female"},
{name:"Johnny Tucker",gender:"Male"},
{name:"Chris Jacobs",gender:"Male"},
{name:"Benjamin James",gender:"Male"}] 
```
Реализуйте следующее: 
При вводе числа в поле ввода должно отображаться соответсвующее количество элементов списка. 

###Задача 2 
Модифицируйте код предыдущей задачи. Реализуйте следующее: 
* При каждом обновлении свойств компонента, содержащего список users,  его текст окрашивается в соучайный цвет. Используйте при решении задачи методы жизненного цикла React компонентов. 
Функция для получения случайного цвета: 
```
            function getRandomColor() {
                var h = Math.floor(Math.random() * (255 - 1) + 1); 
                var s = Math.floor(Math.random() * (100 - 1) + 1) + '%'; 
                var l = '50%'; 
                var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
                return randomColor;
            }
```
### Задача 3
Добавьте на страницу checkbox, клик по которому будет переключать режим отображения данных массива users между таблицей и списком
