import React from 'react' 
import ReactDOM from 'react-dom' 

import { Provider } from 'react-redux' 
import { createStore, combineReducers } from 'redux' 

import usersReducer from './reducers/usersReducer'
import App from './containers/app.jsx' 

let allreducers = combineReducers({
    users: usersReducer
})

const store = createStore(allreducers, window.devToolsExtension && window.devToolsExtension()) 

window.store = store; 
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)