var React = require('react');  
var ReactDOM = require('react-dom');  

var Provider = require('react-redux').Provider;  
var createStore = require('redux').createStore;  

var countReducer = require('./reducers/countReducer'); 
var App = require('./components/app.jsx'); 

let store = createStore(countReducer) 

ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)
