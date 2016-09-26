'use strict';

var import_module = require('./sample_module');

var a = import_module.counter();
var b = import_module.counter(); 

import_module.printCount(a.count); // 0
import_module.printCount(b.count); // 0 

a.addCount();

// так как a и b были созданы с помощью функции-конструктора, 
// они ссылаются на разные объекты  

import_module.printCount(a.count); // 1
import_module.printCount(b.count); // 0