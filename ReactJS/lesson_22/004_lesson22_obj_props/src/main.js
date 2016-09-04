let x = 1, y = 2, z = 3;

//ES5
// var obj = {x: x, y: y: z: z}; 

//ES6: скоращенное присвоение значений свойствам объекта 
let obj = { x, y, z };
alert(obj.x) // 1 

// ES6 поддерживает вычисляемые имена свойств объекта 
let obj1 = {
    prop1: 1,
    ['prop' +y]: 2
};

alert(obj1.prop2); // 2 

//ES6: сокразенная запись метода объекта 
let obj2 = {
    prop1: 1,
    prop2: 2,
    showProps() {
        alert(`prop1: ${this.prop1}, prop2: ${this.prop2}`);
    }
}

obj2.showProps();