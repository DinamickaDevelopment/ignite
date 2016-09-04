var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // Для отслеживания события выделения в ReactJS используется событие onSelect 
        var selectedText; 

        var Demo = React.createClass({ 

            getInitialState: function() {
                return {
                    text: '', 
                    inputVal: 'Some Text!', 
                    selectedText: ''
                }  
            },
            selectHandler: function(e) {
                this.setState({selectedText: this.state.inputVal}); 
            }, 
			changeHandler: function(e) {
				this.setState({inputVal: e.target.value}); 
			}, 
			
            render: function() {
                return (
                
            <div className="container">
                <h2>Selected value: {this.state.selectedText}</h2>
                    <input id="inp" className="input-lg form-control" value={this.state.inputVal} onSelect={this.selectHandler} onChange={this.changeHandler}/>
            </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo/>, container);