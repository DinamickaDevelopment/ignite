#Homework

###Задача 1 
Дано массив todos: 
```
todos = [
{ id: 1, name: 'Work', description: 'Stuff to do' }, { id: 2, name: 'Walk the dog', description: 'Need to get up early' },
{ id: 3, name: 'Finish project', description: 'An important task' }, { id: 4, name: 'Earn a lot of money', description: 'As soon as possible' },
{ id: 5, name: 'Go to sleep', description: 'late at night'}
]
``` 
Создайте приложение todoApp. 

Используя Restify, создайте REST API приложения с такой структурой: 
* /addItem - POST-запрос, создание нового элемента массива todos
* / - GET-запрос, показать все элементы массива todos в виде таблицы 
* /update/itemID - PUT-запрос, обновить элемент массива todos с указанным id. Тело запроса - в формате JSON. 
* /delete/itemID -DELETE-запрос, удалить элемент массива todos с указанным id 

На странице приложения должны находиться следующие элементы: 
* Таблица, в которой отображены элементы массива todos 
* 3 поля ввода с соответствующими названиями: id, name, description. 
* 3 кнопки с названиями: Add Item(Создать элемент), Delete Item(Удалить элемент), Update Item(Обновить элемент), при нажатии на которые на сервер делаются AJAX-запросы к REST API для выполнения соответствующих операций.  


###Задача 2 
Модифицируйте код предыдущей задачи. Вместо массива todos для хранения данных используйте базу данных. 
