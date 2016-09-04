var React = require('react'); 
var ReactDOM = require('react-dom'); 


        var options = [{label: 'Item 1', value: 1}, {label: 'Item 2', value: 2}, {label: 'Item 3', value: 3}]; 

        var Demo = React.createClass({
        
            getInitialState: function() {
                return {
                    checked: true, 
                    selectedVal: 3, 
                    radioVal: 'radio 1', 
                    inputVal: '...'            

                }
            },  
           
            // обработчики событий изменения значения комнонентов формы
            handleInputValChange: function(e) {
               this.setState({inputVal: e.target.value})
            },    

            handleCheck: function() {
               this.setState({checked: !this.state.checked})  
            }, 
            
            handleValChange: function(e) {
                this.setState({selectedVal: e.target.value})
            }, 
            
            handleRadioValChange: function(e) {
                this.setState({radioVal: e.target.value})
            },

            render: function() {
                return (
                    <div>
                        
                        <form href="#" name="myForm" className="form-control container well">
                            <h1>FORM</h1>
                            Input<input onChange={this.handleInputValChange} className="input-lg form-control" type="text" placeholder="..."/>
                            <p>input value: {this.state.inputVal}</p>

                            <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}/>Checkbox 
                            <p>checked: {this.state.checked ? 'true' : 'false'}</p> 

                            Select<select className="input-lg form-control" value={this.state.selectedVal} onChange={this.handleValChange}>
                                {options.map(function(item){
                                    return <option key={item.value} value={item.value}>{item.label}</option>
                                })}
                            </select>
                            <p>selected option: {this.state.selectedVal}</p> 

                            <input checked={this.state.radioVal === 'radio 1'} onChange={this.handleRadioValChange} type="radio" value="radio 1" name="radiobtn"/>radio 1 <br />
                            <input checked={this.state.radioVal === 'radio 2'} onChange={this.handleRadioValChange} type="radio" value="radio 2" name="radiobtn"/>radio 2 <br />
                            <p>selected radiobutton: {this.state.radioVal}</p>

                         </form>
                    </div>
                )}
        })


        var container = document.getElementById('example');
        ReactDOM.render(<Demo/>, container); 