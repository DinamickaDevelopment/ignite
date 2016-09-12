'use strict';

//Также, как и Function Expression, классы можно задавать «инлайн», в любом выражении и внутри вызова функции.
//Это называется Class Expression.
//В классах, как и в обычных объектах, можно объявлять геттеры и сеттеры через get/set, а также использовать […] для свойств с вычисляемыми именами

//В примере ниже имя User будет доступно только внутри класса и может быть использовано, 
//например, для создания новых объектов данного типа. 

let Person = class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //value: "Hello" // нет возможности задать в прототипе обычное значение (не функцию)

    // геттер
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // сеттер
    set fullName(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
    }

    // вычисляемое название метода
     ["test".toUpperCase()]() {
         alert("PASSED");
     }

    

    // Класс, как и функция, является объектом. Статические свойства класса User – 
    // это свойства непосредственно User, то есть доступные из него «через точку».
    // Для их объявления используется ключевое слово static. 

    static createGuest() {
        return new Person("Гость", "Сайта");
    }

};

var user_1 = new Person('Василий', 'Иванов');
alert(user_1.fullName); // Василий Иванов
user_1.TEST(); // PASSED 

let user_2 = Person.createGuest();
alert(user_2.fullName); // Гость Сайта 
