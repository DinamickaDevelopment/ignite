'use strict';

//Наследование. Синтаксис:
//class Child extends Parent {
//    ...
//    }
        
class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        alert("I walk: " + this.name);
    }

    //value: "val"
}

class Rabbit extends Animal {
    walk() {
        //обращение к родителю т.е Animal 
        super.walk();
        //alert(super.value);

        //alert("I walk: " + this.name);
    }
    
    constructor() {
        let father = super("father"); //Вызвать конструктор родителя можно только изнутри конструктора потомка. 
        father.walk();
    }
}

new Rabbit("Rabbit").walk();
// I walk: Rabbit
// and jump!
//alert(Rabbit.prototype.__proto__ == Animal.prototype); // true
