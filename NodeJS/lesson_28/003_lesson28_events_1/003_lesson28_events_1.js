// Когда экземпляр EventEmitter встречает любую ошибку, он генерирует событие 'error' 
// Когда добавлен новый обработчик события, EventEmitter генерирует событие 'newListener'
// Когда удален обработчик события, генерируется событие 'removeListener'

'use strict'; 
 
// импорт модуля events
const events = require('events');

// создание экземпляра EventEmitter
const emitter = new events.EventEmitter;

emitter.on('newListener', () => {
    console.log('event listener added!')
});

emitter.on('removeListener', () => {
    console.log('event listener removed!')
});

// в nodejs принято устанавливать обработчик на событие error, 
// так как необработанные ошибки рпрекращают выполнение node приложения 
emitter.on('error', (err) => {
    console.log(err.message) // вывод текста ошибки на экран
});

let counter = 0;
let count = () => {
    counter++;
    console.log(counter);
}; 

emitter.on('count', count); 


emitter.emit('count');
emitter.emit('count');

// генерация события ошибки
emitter.emit('error', new Error('Something went wrong!'));

emitter.removeListener('count', count); 
