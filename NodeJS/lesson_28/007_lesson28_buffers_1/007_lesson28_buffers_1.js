// Буфер(buffer) - глобальный объект nodeJS. Для его использования не нужно вызывать require. 
// Буфер используется для обработки двоичного кода(binary data). 

// Метод Buffer.alloc - создает неинициализированный буфер на указанное количество байт
const buf = Buffer.alloc(10);
console.log('empty buffer: ' + buf);  

// Метод Buffer.from(array) - создает буфер на основе массива байтов. 
const buf1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]); // создает новый буфер, содержащий ASCII байты
console.log('buffer converted to string: ' + buf1.toString()) // buffer  //hex

// Метод Buffer.from(arrayBuffer[, byteOffset[, length]]) - создает буфер на основе буфера типированного массива JS 
// При использовании такого метода буфер и типированный массив ссылаются на один и тот же сегмент памяти 
var arr = new Uint16Array(10);
const buf2 = Buffer.from(arr.buffer, 3, 2);
console.log('buffer from array: ' + buf2.length);

// Метод Buffer.from(str[, encoding]) - создает новый буфер, который содержит строку str в указанной кодировке(по умолчанию - utf-8) 
var buf3 = Buffer.from('Test buffer!');
console.log(buf3);
console.log('buffer from string: ' + buf3.toString());

