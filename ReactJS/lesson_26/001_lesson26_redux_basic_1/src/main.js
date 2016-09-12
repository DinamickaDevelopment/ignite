import { createStore } from 'redux' 

//Редьюсеры отвечают за модификации состояний приложения. Они — чистые функции со следующим видом (previousState, action) => newState. 
//Очень важно понимать, что никогда нельзя изменять исходное состояние в редьюсере. 
//Вместо этого слеует создавать новые объекты на базе свойств previousState. 

const reducer = function(state, action) {
    if (action.type === 'INC') {
        return state + action.payload
    } 
    if (action.type === 'DEC') {
        return state - action.payload
    }
    return state 
} 

// Store - хранилище состояний приложения 
const store = createStore(reducer, 0); 

store.subscribe(() => {
    document.write(`store changed! state: ${store.getState()} <br/>`)
}) 

// Создание действий. 
// Действия — это структура, которая передает данные из вашего приложения в хранилище. 
// По соглашению, действия должны иметь строковое поле type, которое указывает на тип исполняемого действия. 

store.dispatch( {type: 'INC', payload: 1} ) 
store.dispatch( {type: 'INC', payload: 10} )
store.dispatch( {type: 'INC', payload: 15} )
store.dispatch( {type: 'DEC', payload: 1} ) 
store.dispatch( {type: 'DEC', payload: 6} )