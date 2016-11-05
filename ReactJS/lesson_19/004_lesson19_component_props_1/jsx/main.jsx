var React = require('react');
var ReactDOM = require('react-dom');

		// Значения, вставляемые в React компонент, называются props - свойства. 
		// Они передаются как атрибуты в JSX синтаксисе. 

        var Greeting = React.createClass({
            render: function() {
                // доступ к свойствам компонента осуществляется через this.props 
				// изменять свойства через this.props нельзя 
                return (<h1>Hello, {this.props.name}!</h1>)
            }
        });

        var container = document.getElementById('example');

        ReactDOM.render(<Greeting name="Vasya" />, container); 