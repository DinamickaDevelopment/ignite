import React from 'react' 
import ReactDOM from 'react-dom' 

import { Provider } from 'react-redux' 
import { createStore, combineReducers } from 'redux' 

import demoReducer from './reducers/demoReducer'
import App from './components/app.jsx' 

let allreducers = combineReducers({
    demo: demoReducer
})
const store = createStore(allreducers, window.devToolsExtension && window.devToolsExtension()) 

window.store = store
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
) 
