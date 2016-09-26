var arr1 = new Uint16Array(10);
const buf1 = Buffer.from(arr1.buffer);
var arr2 = new Uint16Array(4);
const buf2 = Buffer.from(arr2.buffer); 

// Метод buf.write(string[, offset][, length][, encoding]) - запись данных в буфер, аргументы: 
    // string - данные в строковом виде 
    // offset - индекс буфера, с которого начнется запись 
    // length - количество байтов для записи  
    // encoding - кодировка; по умолчанию utf-8 
buf1.write('123', 2, 2);
buf2.write('1234', 2, 3); 

// buf.toString([encoding][, start][, end]) - чтение данных из буфера, аргументы: 
    // encoding - кодировка; по умолчанию utf-8 
    // start - индекс, с которого начать чтение данных буфера 
    // end - индекс, до которого читать данные буфера
var bufData = buf1.toString('utf-8', 2, 3);
console.log(bufData); // 1

// конкатенация буферов: Buffer.concat(list[, totalLength]), аргументы:  
    // list - список буферов для конкатенации 
    // totalLength - длина буфера, получаемого в результате конкатенации 
var buf3 = Buffer.concat([buf1, buf2], 15);
console.log(buf3.toString());

// сравнение буферов: buf1.compare(buf2);
// возвращает 0 если буфера равны, -1, если buf1 идет перед buf2 и 1, если наоборот 
var res = buf1.compare(buf2);
console.log(res); // -1


// копирование буферов: buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd]), аргументы:   
// targetBuffer - буфер, в который копировать данные
buf3.copy(buf2, 0, 2, 5);
console.log(buf2.toString()); 


