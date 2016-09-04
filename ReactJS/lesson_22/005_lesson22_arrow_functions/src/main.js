// В ES6 появился новый синтаксис для задания функций через «стрелку» =>. 
// Слева от => находится аргумент, а справа – выражение, которое нужно вернуть. 
// Внутри функций-стрелок – тот же this, что и снаружи. 
// В качестве arguments используются аргументы внешней «обычной» функции.

//функция-стрелка
let a = 1, b = 2;
let count = count => alert(a + b);
count(); // 3 

//Слева от => находится аргумент, а справа – выражение, которое нужно вернуть. 
var arr = [1, 2, 3, 4, 5];
var printNum = arr.forEach((num) => console.log(num));

// Внутри функций-стрелок – тот же this, что и снаружи. 
var bob = {
    name: "Bob",
    friends: ['John', 'Vasya'],
    printFriends() {
        this.friends.forEach(f =>
            // this внутри функции f относится к объекту bob
            console.log(this.name + " knows " + f));
    }
};
bob.printFriends();

// Когда тело функции достаточно большое, то можно его обернуть в фигурные скобки {…}.  
// Как только тело функции оборачивается в {…}, то её результат уже не возвращается автоматически. 

let getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return hours + ':' + minutes;
};
alert(getTime()); // текущее время
