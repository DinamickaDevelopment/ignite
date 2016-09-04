var React = require('react');
var ReactDOM = require('react-dom');

        var Greeting = React.createClass({

            propTypes: {
                name: React.PropTypes.string,
                color: React.PropTypes.string.isRequired
            },

            getDefaultProps: function() {
                return {
                    name: 'Vasya'
                }
            },

            // свойства React компонента могут испольоваться как в качестве атруибута, так и в качестве содержимого тега
            render: function() {
                return (<h1 style={{"color": this.props.color}}>Hello, {this.props.name}!</h1>)
            }
        });

        var container = document.getElementById('example');

        ReactDOM.render(<Greeting color="red" />, container); 