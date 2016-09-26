'use strict';

// импорт значений из модуля sample_module
const imported_module = require('./sample_module');

// код ниже демонстрирует проблему работы со ссылочным типом данных - 
// а именно, с JS объектом. 

let a = imported_module.counter;
let b = imported_module.counter;

imported_module.printCount(a.count); // 0
imported_module.printCount(b.count); // 0

a.addCount();

// изменилось не только значение a, но и значение b, 
// так как a и b ссылаются на один и тот же объект 

imported_module.printCount(a.count); // 1
imported_module.printCount(b.count); // 1
