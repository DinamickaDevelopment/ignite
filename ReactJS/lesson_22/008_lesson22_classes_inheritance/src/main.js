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
}

class Rabbit extends Animal {
    walk() {
        //обращение к родителю т.е Animal 
        super.walk();
        alert("...and jump!");
    }
}

new Rabbit("Rabbit").walk();
// I walk: Rabbit
// and jump!
