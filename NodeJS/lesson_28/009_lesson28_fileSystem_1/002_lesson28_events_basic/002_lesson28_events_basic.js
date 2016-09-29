'use strict'; 

// импорт модуля events
const events = require('events');

// создание экземпляра EventEmitter
const emitter = new events.EventEmitter; 

// назначение обработчика события 
emitter.on('event', () => {
    console.log('an event occured!'); 
}); 

// генерация события 'event'
emitter.emit('event');

