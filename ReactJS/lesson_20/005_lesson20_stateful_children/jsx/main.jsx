var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // ststeful children - дочерние React компоненты, у которых есть свое сосотояние (state)
        var List = React.createClass({
              render: function() {
                      return (<div>{this.props.children}</div>)   
             }
        })

        var ListElement = React.createClass({
               getInitialState: function() {
                return {
                    val1: 1, 
                    val2: 2, 
                    val3: 3, 
					colors: ['black', 'black', 'black']
                }
              }, 
			  hideList: function(e) {  
			  
				  var arr = this.state.colors; 
				  arr = arr.map(function(elem, index){
						if (index == e.target.id) {
							elem = 'red'; 
						}
						
						return elem; 
				  }); 
				  
				  this.setState({colors: arr})	
			  	
			  },

              render: function() {
                return (
                <ul onClick={this.hideList}>
                    <li id="0" style={{"color": this.state.colors[0], "fontSize":30 }}>{this.state.val1}</li>
                    <li id="1" style={{"color": this.state.colors[1]}}>{this.state.val2}</li>
                    <li id="2" style={{"color": this.state.colors[2]}}>{this.state.val3}</li>
                </ul>
                
            )}
        })

        var container = document.getElementById('example'); 
        ReactDOM.render(<List><ListElement/></List>, container); 