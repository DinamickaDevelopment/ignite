const msg = 'Hello World!';

// для экспорта значений из модуля следует передать
// экспортируемые значения в качестве свойств объекту exports 
exports.msg = msg;
exports.printMsg = (msg) => { console.log(msg) };