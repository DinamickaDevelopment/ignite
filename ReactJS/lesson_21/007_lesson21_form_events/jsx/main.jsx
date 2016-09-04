var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // В ReactJS существуют такие события форм: 
        // onChange - изменение значения элемента формы 
        // onInput - изменение значения поля ввода 
        // onSubmit - отправка формы 

        var Demo = React.createClass({ 

             getInitialState: function() {
                return {
                    checked: false, 
                    inputError: '', 
                    checkboxError: ''
                }
            },  

             handleCheck: function() {
                this.setState({checked: !this.state.checked}) 

                if (this.state.checked == false) { 
                      this.setState({checkboxError: ''}); 
                }
            }, 
            handleInputValChange: function(e) { 
                var testVal = /^[0-9]/;
                this.setState({inputVal: e.target.value}) 

                if (document.getElementsByTagName('input')[0].value.search(testVal) != -1) {
                    this.setState({inputError: ''}); 
                }

            }, 
            validateForm: function(e) {
                var testVal = /^[0-9]{1,10}$/; 
                var errCount = 0; 

                if (document.getElementsByTagName('input')[0].value.search(testVal) == -1) {
                    e.preventDefault(); 
                    errCount++; 
                    this.setState({inputError: 'only 1 to 10 numbers allowed!'}); 
                } 
                else {
                     this.setState({inputError: ''}); 
                } 

                if (this.state.checked == false) {
                     e.preventDefault();    
                     errCount++;     
                     this.setState({checkboxError: 'check it!'}); 
                } 
                else {
                     this.setState({checkboxError: ''}); 
                } 
                
                if(errCount == 0) {
                    alert('Data Sent!'); 
                }
            }, 


            render: function() {
                return ( 
             <div className="container well">
                <form action="#" name="myForm" onSubmit={this.validateForm}> 
                    Enter numbers:<input onInput={this.handleInputValChange} className="input-lg form-control" type="text" />
                    <p>input value: {this.state.inputVal}</p> 
                    <p className="error">{this.state.inputError}</p>

                    <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck} />Checkbox
                    <p>checked: {this.state.checked ? 'true' : 'false'}</p> 
                    <p className="error">{this.state.checkboxError}</p>

                    <input type="submit" value="Send data!"/>
                </form>
            </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo />, container); 