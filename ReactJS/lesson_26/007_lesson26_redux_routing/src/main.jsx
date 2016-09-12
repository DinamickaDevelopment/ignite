// react
var React = require('react');
var ReactDOM = require('react-dom'); 

// redux
var Provider = require('react-redux').Provider; 

var redux = require('redux');  
var createStore =  redux.createStore; 
var combineReducers = redux.combineReducers; 

// reducers
var usersReducer = require('./reducers/usersReducer'); 
var msgReducer = require('./reducers/msgReducer'); 

// React компоненты приложения 
var App = require('./containers/app.jsx'); 
var Feedback = require('./containers/feedback.jsx'); 

// импорт зависимостей для настройки маршрутизации 
var router = require('react-router'); 

var Router = router.Router; 
var Route = router.Route; 
var Link = router.Link; 
var IndexRoute = router.IndexRoute; 
var hashHistory = router.hashHistory; 

// combineReducers
let allreducers = combineReducers({
    users: usersReducer, 
    messages: msgReducer
})

// store 
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