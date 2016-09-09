var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // onFocus - фокус на элементе 
        // onBlur - элемент теряет фокус 

        var Demo = React.createClass({

            focusHandler: function(e) { 
                alert('focus!'); 
                e.target.style.backgroundColor = 'red'; 
            }, 

            blurHandler: function(e) { 
                alert('blur!'); 
                e.target.style.backgroundColor = 'transparent'; 
            }, 

            render: function() {
                return (
                <div>
                    <div className="form-group">
                        <label>Input Field: <br/>
                            <input className="input-lg form-control" type="text" onFocus={this.focusHandler} onBlur={this.blurHandler}/>
                        </label>
                    </div>
                    <button onFocus={ this.focusHandler } onBlur={this.blurHandler} className="demo">Click!</button>
                </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo  />, container);




