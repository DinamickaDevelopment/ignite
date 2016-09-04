var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // в данном примере показана передача props от родительского компонента к дочернему 

        var Parent = React.createClass({
            render: function() {
                return(
                    <div>
                        <h1>{this.props.prop1}</h1> 
                        <Child heading={this.props.prop2} />
                    </div>
            )}
        })
         
        var Child = React.createClass({
            render: function() {
                  return(
                    <h2>{this.props.heading}</h2>
            )}
        })

        var container = document.getElementById('example'); 
        ReactDOM.render(<Parent prop1='Parent Component' prop2="Child Component" ></Parent>, container); 