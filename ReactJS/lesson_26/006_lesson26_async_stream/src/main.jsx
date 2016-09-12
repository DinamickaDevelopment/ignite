var React = require('react');  
var ReactDOM = require('react-dom');  

var Provider = require('react-redux').Provider;

var redux = require('redux'); 
var createStore = redux.createStore;
var combineReducers = redux.combineReducers;
var applyMiddleware = redux.applyMiddleware; 

// redux-thunk - middleware-функция, позволяющая создавать actionCreators, которые возвращают функцию вместо action. 
var thunk = require('redux-thunk').default; 

var usersReducer = require('./reducers/usersReducer'); 
var App = require('./containers/app.jsx');  

var fetchUsers = require('./actions/async').fetchUsers; 

const middleware = applyMiddleware(thunk); 
const store = createStore(usersReducer, middleware) 

// инициализация асинхронной загрузки данных
store.dispatch(fetchUsers())
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)