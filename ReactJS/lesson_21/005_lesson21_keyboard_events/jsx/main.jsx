var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // onKeyDown - клавиша нажата
        // onKeyUp - клавиша отпущена
        // onKeyPress - клавиша нажата(только символьные клавиши)
        
         var Demo = React.createClass({ 

            getInitialState: function() {
                return {
                    keyDownProps: '...', 
                    keyUpProps: '...', 
                    keyPressProps: '...'
                }
            }, 

            keyDownHandler: function(e) {
                        this.setState({keyDownProps:
                            'altKey: ' + e.altKey + '\n\r' +
                            'charCode: ' + e.charCode + '\n\r' +
                            'ctrlKey: ' + e.ctrlKey + '\n\r' +
                            'getModifierState(key): ' + e.getModifierState(e.key) + '\n\r' +
                            'key: ' + e.key + '\n\r' +
                            'keyCode: ' + e.keyCode + '\n\r' +
                            'metaKey: ' + e.metaKey + '\n\r' +
                            'repeat: ' + e.repeat + '\n\r' +
                            'shiftKey: ' + e.shiftKey + '\n\r' +
                            'which: ' + e.which})
            }, 
            keyUpHandler: function(e) {
                        this.setState({keyUpProps:
                            'altKey: ' + e.altKey + '\n\r' +
                            'charCode: ' + e.charCode + '\n\r' +
                            'ctrlKey: ' + e.ctrlKey + '\n\r' +
                            'getModifierState(key): ' + e.getModifierState(e.key) + '\n\r' +
                            'key: ' + e.key + '\n\r' +
                            'keyCode: ' + e.keyCode + '\n\r' +
                            'metaKey: ' + e.metaKey + '\n\r' +
                            'repeat: ' + e.repeat + '\n\r' +
                            'shiftKey: ' + e.shiftKey + '\n\r' +
                            'which: ' + e.which})
            }, 
            keyPressHandler: function(e) {
                        this.setState({keyPressProps:
                            'altKey: ' + e.altKey + '\n\r' +
                            'charCode: ' + e.charCode + '\n\r' +
                            'ctrlKey: ' + e.ctrlKey + '\n\r' +
                            'getModifierState(key): ' + e.getModifierState(e.key) + '\n\r' +
                            'key: ' + e.key + '\n\r' +
                            'keyCode: ' + e.keyCode + '\n\r' +
                            'metaKey: ' + e.metaKey + '\n\r' +
                            'repeat: ' + e.repeat + '\n\r' +
                            'shiftKey: ' + e.shiftKey + '\n\r' +
                            'which: ' + e.which})
            }, 

            render: function() {
                return ( 
                <div>
                        <div>
                            <div className="demo"><h2>KeyDown</h2> <br/><textarea value={this.state.keyDownProps}></textarea></div>
                            <div className="demo"><h2>KeyUp</h2><br /><textarea value={this.state.keyUpProps}></textarea></div>
                            <div className="demo"><h2>KeyPress</h2><br /><textarea value={this.state.keyPressProps}></textarea></div>
                        </div> 
                        <div>
                            <input className="input-lg form-control" placeholder="Enter text!"  
                                                                     onKeyDown={this.keyDownHandler}
                                                                     onKeyUp={this.keyUpHandler}   
                                                                     onKeyPress={this.keyPressHandler}/>
                        </div>
                </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo/>, container);