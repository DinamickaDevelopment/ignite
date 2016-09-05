import React from 'react' 
import ReactDOM from 'react-dom' 

import { Provider } from 'react-redux' 
import { createStore, combineReducers } from 'redux' 

import countReducer from './reducers/countReducer'
import App from './components/app.jsx' 

let allreducers = combineReducers({
        counter: countReducer
})

let store = createStore(allreducers) 

ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)