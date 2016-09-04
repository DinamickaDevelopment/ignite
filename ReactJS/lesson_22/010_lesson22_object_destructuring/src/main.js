'use strict';

//Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, 
//при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.

let options = {
    title: "Меню",
    width: 100,
    height: 200
};

let {title, width, height} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200
