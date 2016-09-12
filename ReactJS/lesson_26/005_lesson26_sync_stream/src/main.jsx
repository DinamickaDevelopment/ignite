var React = require('react');  
var ReactDOM = require('react-dom');  

var Provider = require('react-redux').Provider; 
var createStore = require('redux').createStore;  

var usersReducer = require('./reducers/usersReducer'); 
var App = require('./containers/app.jsx'); 

const store = createStore(usersReducer) 

window.store = store; 
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)
