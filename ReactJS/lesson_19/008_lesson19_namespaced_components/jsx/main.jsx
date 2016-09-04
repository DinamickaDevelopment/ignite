var React = require('react'); 
var ReactDOM = require('react-dom'); 

   
        // компоненты именного пространства позволяют использовать один компонент с другими компонентами в качестве атрибутов. 
        var Panel = React.createClass({
            render() {
                return (<div className="panel well">
                            <Panel.Message></Panel.Message>
                       </div>)
            }
        }); 

        Panel.Message = React.createClass({
            render() {
                return <h1>Hello from namespaced component!</h1>
            }
        }); 
      
       var container = document.getElementById('example'); 
       
       ReactDOM.render(<Panel.Message/>, container); 
