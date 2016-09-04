import { applyMiddleware, combineReducers, createStore } from 'redux' 

import userReducer from  './userReducer' 
import msgReducer from './msgReducer' 

// комбинация reducers 
// они будут доступны всему приложению под именами свойств объекта, 
// переданного в качестве аргумента функции combineReducers 
const reducers = combineReducers({
    user: userReducer,
    messages: msgReducer
});  

// обработка actions с помощью middleware
const logger = (store) => (next) => (action) => {
    console.log('action fired', action); 
    next(action); 
} 

const middleware = applyMiddleware(logger); 

const store = createStore(reducers, middleware); 

store.subscribe(() => {
    document.write(`<h2>store changed!</h2>`) 
    // доступ к свойствам store через метод getState 
    document.write(`user name: ${store.getState().user.name} <br/>`)
    document.write(`user age: ${store.getState().user.age} <br/>`)
    document.write(`messages: ${store.getState().messages} <hr/>`)
}) 

// actions 
store.dispatch({ type: 'CHANGE_NAME', payload: 'Jane' }) 
store.dispatch({ type: 'CHANGE_AGE', payload: 25 }) 
store.dispatch({ type: 'NEW_MSG', payload: 'This is a demo message!' }) 


