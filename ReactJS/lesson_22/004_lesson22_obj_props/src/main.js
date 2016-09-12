let x = 1, y = 2, z = 3;
function Go() {
    return "Go"
}

//ES5
// var obj = {x: x, y: y: z: z}; 

//ES6: сокращенное присвоение значений свойствам объекта 
let obj = { x, y, z };
obj.x = 10;
alert(obj.x) // 10 
alert(x) // 1


// ES6 поддерживает вычисляемые имена свойств объекта 
let obj1 = {
    prop1: 1,
    ['prop' + y]: 2
};

alert(obj1.prop2); // 2 

// ES6 поддерживает вычисляемые имена свойств объекта 
let obj2 = {
    prop1: 1,
    [Go()]: "Go"
};

alert(obj2.Go); // Go 


//ES6: сокращенная запись метода объекта 
let obj3 = {
    prop1: 1,
    prop2: 2,
    showProps() {
        alert(`prop1: ${this.prop1}, prop2: ${this.prop2}`);
    }
}

obj3.showProps();