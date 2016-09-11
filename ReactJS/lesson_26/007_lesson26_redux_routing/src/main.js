import React from 'react' 
import ReactDOM from 'react-dom' 

import { Provider } from 'react-redux' 
import { createStore, combineReducers } from 'redux' 

import usersReducer from './reducers/usersReducer' 
import msgReducer from './reducers/msgReducer'

import App from './containers/app.jsx' 
import Feedback from './containers/feedback.jsx' 

// импорт зависимостей для настройки маршрутизации 
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router' 

// reducers
let allreducers = combineReducers({
    users: usersReducer, 
    messages: msgReducer
})

const store = createStore(allreducers) 

// конфигурация маршрутизации 
ReactDOM.render( 
      <Provider store={store}> 
        <Router history={hashHistory}>
                <Route path="/">
                   <IndexRoute component={App} />
                   <Route path="feedback" component={Feedback} />
                </Route>
           </Router>
      </Provider>, 
  document.getElementById('root')
)