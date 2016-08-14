#Class Work 

###Задача1 
Создайте страницу с элементом div и кнопкой. Реализуйте следующее:
При нажатии на кнопку элементу div присваиваются 2 CSS-класса 

###Задача2 
Дано массив items: 
```
     $scope.items = [
             { name: "B Item", price: 10.9, category: "Category 1", count: 10, tax: 1.12, expiration: 10 },
             { name: "A Item", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12 },
             { name: "D Item", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5 },
             { name: "C Item", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10 }];
``` 
С помощью директивы ng-repeat создайте таблицу , отображающую данные массива. 

Отфильтруйте данные массива таким образом, чтобы: 
* Элементы отображались в алфавитном порядке (по свойству name)
* Свойство tax отображалось в формате currency  

###Задача3  
Используйте таблицу с данными массива items из второй задачи. Напишите свой фильтр, который выведет на экран только те элементы масства items, у которых значение свойства expiration больше 10. 

