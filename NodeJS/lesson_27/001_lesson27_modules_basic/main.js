// импорт значений из модуля sample_module
var module = require('./sample_module.js');

// импортируемые значения доступны в качестве свойств загруженного модуля 
module.printMsg(module.msg);
