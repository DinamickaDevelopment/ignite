var React = require('react'); 
var ReactDOM = require('react-dom'); 


        // компоненты именного пространства определяются как свойства родительского компонента. 
		// Например, компонент Panel.Message является компонентом именного пространства компонента Panel. 
		
        var Panel = React.createClass({
            render() {
                return (<div className="panel well">
                            {this.props.children}
                       </div>)
            }
        }); 

        Panel.Message = React.createClass({
            render() {
                return <h1>{this.props.text}</h1>
            }
        }); 
		
		var App = React.createClass({
			render: function(){
				return(
					<Panel>
						<Panel.Message text="Hello from namespaced component 1!" />
						<Panel.Message text="Hello from namespaced component 2!" />
					</Panel>
				)
			}
		}); 

       var container = document.getElementById('example'); 
       
       ReactDOM.render(<App/>, container); 
