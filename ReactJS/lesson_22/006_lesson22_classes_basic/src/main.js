'use strict';

// ES6 конструкция class – удобный «синтаксический сахар» для задания конструктора вместе с прототипом. 

class User {

    // Функция constructor запускается при создании new User, 
    // остальные методы записываются в User.prototype. 

    // конструктор
    constructor(name) {
        this.name = name;
    }

    // метод
    sayHi() {
        alert(this.name);
    }
}

let user1 = new User("Вася");
let user2 = new User("Петя") ;
user1.sayHi(); // Вася
user2.sayHi(); // Петя 