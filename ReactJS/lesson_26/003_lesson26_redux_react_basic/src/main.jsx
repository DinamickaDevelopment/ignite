var React = require('react');
var ReactDOM = require('react-dom');

var createStore = require('redux').createStore;

var demoReducer = require('./reducers/demoReducer');
const store = createStore(demoReducer);

var App = require('./components/app.jsx');

var rendering = () => {
    
    ReactDOM.render(
                   <App value={store.getState()} 
                        greet={
                               () => store.dispatch({
                                   type: 'COUNT'                                   
                               })
                   } />,
      document.getElementById('root')
 )
}

store.subscribe(rendering);
rendering();


