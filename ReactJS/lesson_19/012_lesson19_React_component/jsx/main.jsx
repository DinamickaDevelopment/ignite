var React = require('react'); 
var ReactDOM = require('react-dom'); 

         var MyComponent = React.createClass({
            render: function() {
                return (
                      <div><h1>Hi!</h1></div>
                )}
         });

        // По заглавным и строчным буквам JSX определяет, что перед ним - React класс или HTML тэг.
         var app = <MyComponent/>; 
         var container = document.getElementById('example'); 

        ReactDOM.render(app, container);