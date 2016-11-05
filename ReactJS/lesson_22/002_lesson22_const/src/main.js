function constTest() {
    const x = 1;
    alert(x);

    //x = 2; ==> ошибка! 
    //alert(x); 
}
constTest();


const testObj = {
    a: 'Hello',
    b: 1
}; 

// Особенность const при работе с объектами и массивами следующая: 
// Переопределение свойств объекта / элементов массива разоешается 
// Непосредственное переопределение константы запрещается 

testObj.a = 'Hi';
alert(testObj.a); // 'Hi'

// testObj = 'Hi' // => ошибка! попытка переопределения константы 

const testArr = [1, 2, 3, 4, 5];

for (var i = 0; i < testArr.length; i++) {
    testArr[i] = ++testArr[i]; 
}

alert(testArr); // 2, 3, 4, 5, 6 

// testArr = 1 // => ошибка! попытка переопределения константы 

