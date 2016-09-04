var React = require('react'); 
var ReactDOM = require('react-dom'); 

        var Demo = React.createClass({ 
            // функция getInitialState позволяет указать состояние (state) элемента - его динамические свойства,
            // которые, в отличие от props, могут быть изменены непосредственно  
                getInitialState: function() {
                    return {
                     counter: 1, 
                    } 
                }, 

                count: function() {
                    this.setState({counter: this.state.counter + 1}); 
                },

                render: function() {
                    
                    if (!this.timer) {
                        this.timer = setInterval(this.count, 500); 
                    }

                    return (
                        <div><h1>{this.state.counter}</h1></div>
                    )
                }
        })

        var container = document.getElementById('example'); 

        ReactDOM.render(<Demo/>, container); 