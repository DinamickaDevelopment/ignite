var React = require('react'); 
var ReactDOM = require('react-dom'); 

        var props = {
            prop1: 1, 
            prop2: 2, 
            prop3: 3
        }

        var PropsDemo = React.createClass({
             render: function() {
                return (
            <ul>
                <li>{this.props.prop1}</li>
                <li>{this.props.prop2}</li>
                <li>{this.props.prop3}</li>
            </ul>
            )}
        })

        var container = document.getElementById('example');  
        // spread атрибуты передаются компоненту в качестве свойств с помощью такой записи: 
        ReactDOM.render(<PropsDemo {...props} />, container); 
