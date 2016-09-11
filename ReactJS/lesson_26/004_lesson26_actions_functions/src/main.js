import React from 'react' 
import ReactDOM from 'react-dom' 

import { Provider } from 'react-redux' 
import { createStore } from 'redux' 

import countReducer from './reducers/countReducer'
import App from './components/app.jsx' 

let store = createStore(countReducer) 

ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)