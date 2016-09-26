// В данном примере показаны свойства объекта module 

// имя файла с модулем
console.log('module id: ' + module.id);
console.log('module filename: ' + module.filename);

// boolean - загружен модуль или нет
console.log('module is loaded: ' + module.loaded);
// модуль, загрузивший указанный модуль 
console.log(module.parent);

module.exports = {
    msg: 'Sample module loaded!'
};

