import React from 'react' 
import ReactDOM from 'react-dom' 

import { Provider } from 'react-redux' 
import { createStore } from 'redux' 

import usersReducer from './reducers/usersReducer'
import App from './containers/app.jsx' 

const store = createStore(usersReducer) 

window.store = store; 
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)