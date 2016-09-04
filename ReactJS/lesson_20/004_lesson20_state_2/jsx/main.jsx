var React = require('react'); 
var ReactDOM = require('react-dom'); 


        var CheckBox = React.createClass({ 

           // функция getInitialState позволяет указать состояние(state) элемента - его динамические свойства, 
           // которые, в отличие от props, могут быть изменены непосредственно  
            getInitialState: function() {
                return {
                    checked: true 
                }
            }, 

            handler: function() { 
                // функция setState позволяет менять значение state
                this.setState({checked: !this.state.checked})
            }, 

            render: function() {
                var msg; 

                if ( this.state.checked ) {
                    msg = 'checked'; 
                } 
                else {
                    msg = 'unchecked'; 
                } 

                return (
                    <div>
                        <input type="checkbox" onChange={this.handler} defaultChecked ={this.state.checked}/> 
                        <h3>Checkbox is {msg}</h3>
                    </div>
                )}
        
        })

        var container = document.getElementById('example'); 

        ReactDOM.render(<CheckBox/>, container); 