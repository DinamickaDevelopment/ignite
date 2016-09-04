var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // В ReactJS по умолчанию события обрабатываются на этапе всплытия(bubbling phase)
        // Для обработки события на этапе перехвата(capturing phase) добавьте Capture к названию React события. Например: onClickCapture вместо onClick 
        var Demo = React.createClass({

            clickHandler: function(e) {
                alert('Click!'); 
            }, 

            clickCaptureHandler: function(e) {
                alert('clickCapture!');
            }, 
         
            render: function() {
                return (
                    <button className="btn btn-lg btn-primary" onClick={this.clickHandler} onClickCapture={this.clickCaptureHandler}>Click me!</button>
            )}
        })

        var container = document.getElementById('example'); 
        ReactDOM.render(<Demo/>, container); 