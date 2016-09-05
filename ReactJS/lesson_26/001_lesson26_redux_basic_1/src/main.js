import { createStore } from 'redux' 

// reducer, который будет обрабатывать actions
const reducer = function(state, action) {
    if (action.type === 'INC') {
        return state + action.payload
    } 
    if (action.type === 'DEC') {
        return state - action.payload
    }
    return state 
} 

// store - хранилище состояний приложения 
const store = createStore(reducer, 0); 

store.subscribe(() => {
    document.write(`store changed! state: ${store.getState()} <br/>`)
}) 

// создание actions
store.dispatch( {type: 'INC', payload: 1} ) 
store.dispatch( {type: 'INC', payload: 10} )
store.dispatch( {type: 'INC', payload: 15} )
store.dispatch( {type: 'DEC', payload: 1} ) 
store.dispatch( {type: 'DEC', payload: 6} )