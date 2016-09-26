var events = require('events');
var emitter = new events.EventEmitter;

var listener1 = () => {
    console.log('listener 1 executed'); 
}
var listener2 = () => {
    console.log('listener 2 executed');
}

emitter.on('error', (err) => { 
    console.log(err); 
}) 

emitter.on('event', listener1); 
emitter.on('event', listener2);

// метод once позволяет вызвать обработчик события 1 раз, после чего он будет удален 
emitter.once('event', listener2); 

// функция listenerCount возвращает количество обработчиков события, 
// имя которого ей переданно в качестве аргумента 
var listenerCount = emitter.listenerCount('event');
console.log(listenerCount); // 3 

emitter.emit('event');


var listenerCount = emitter.listenerCount('event'); 
console.log(listenerCount); // 2, так как обработчик, назначенный с помощью once, был удален  

// removeAllListeners - функция, которая удаляет все обработчики события, 
// переданного ей в качестве аргумента. Если функция запущена без аргументов, 
// она удаляет все обработчики событий, чего делать не рекомендуется 
emitter.removeAllListeners('event');

var listenerCount = emitter.listenerCount('event');
console.log(listenerCount); // 0

