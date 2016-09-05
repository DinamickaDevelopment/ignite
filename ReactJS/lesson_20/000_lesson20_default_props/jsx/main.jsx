var React = require('react'); 
var ReactDOM = require('react-dom'); 

        var Demo = React.createClass({ 
        // с помощью функции getDefaultProps можно указать значения props по умолчанию 
        // они будут использованы, если компоненту не будут переданы свойства 
              getDefaultProps: function() {
                return {
                    name: 'Vasya'
                }
            }, 

            render: function() {
                return (<h1>Hello, {this.props.name}</h1>)
            }
        })
        
        var container = document.getElementById('example');
        ReactDOM.render(<Demo/>, container); 