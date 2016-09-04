var React = require('react');
var ReactDOM = require('react-dom');

        var Greeting = React.createClass({
            render: function() {
                // доступ к свойствам компонента осуществляется через this.props
                return (<h1>Hello, {this.props.name}!</h1>)
            }
        });

        var container = document.getElementById('example');

        ReactDOM.render(<Greeting name="Vasya" />, container); 