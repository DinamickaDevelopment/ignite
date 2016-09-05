import React from 'react' 
import ReactDOM from 'react-dom' 

import { Provider } from 'react-redux' 
import { createStore, combineReducers, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'

import usersReducer from './reducers/usersReducer'
import App from './containers/app.jsx' 

import { fetchUsers } from './actions/async'


let allreducers = combineReducers({
    users: usersReducer
})

const middleware = applyMiddleware(thunk); 
const store = createStore(allreducers, middleware) 

// инициализация асинхронной загрузки данных
store.dispatch(fetchUsers())
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)