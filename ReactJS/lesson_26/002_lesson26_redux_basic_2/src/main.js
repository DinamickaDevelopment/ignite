import { applyMiddleware, combineReducers, createStore } from 'redux' 

import userReducer from  './userReducer' 
import msgReducer from './msgReducer' 

// Комбинация редьюсеров.  
// Редьюсеры, переданные в качестве свойств объекта в функцию combineReducers 
// будут доступны приложению под именем state.*имя_свойства*. Например, state.user и т.д. 
const reducers = combineReducers({
    user: userReducer,
    messages: msgReducer
});  

// обработка actions с помощью middleware
function logger ({getState}) {
    return   (next) => (action) => {

        const console = window.console;
        const prevState = getState();
        const returnValue = next(action);
        const nextState = getState();
        const actionType = String(action.type);
        const message = `action ${actionType}`;
        console.log(`%c prev state`, `color: #9E9E9E`, prevState);
        console.log(`%c action`, `color: #03A9F4`, action);
        console.log(`%c next state`, `color: #4CAF50`, nextState);
        return returnValue;      
    } 
} 

    const store = createStore(reducers, applyMiddleware(logger) ); 

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


