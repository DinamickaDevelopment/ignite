import React from 'react' 
import ReactDOM from 'react-dom' 

import { Provider } from 'react-redux' 
import { createStore } from 'redux' 

import demoReducer from './reducers/demoReducer'
import App from './components/app.jsx' 

const store = createStore(demoReducer);  

window.store = store
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
) 
