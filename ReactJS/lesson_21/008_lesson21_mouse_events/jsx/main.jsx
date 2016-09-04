var React = require('react'); 
var ReactDOM = require('react-dom'); 

var Demo = React.createClass({
    getInitialState: function() {
        return {
            cls: 'cls1'
        }
    },

    mouseDownHandler: function() {
        alert('mousedown event'); 
    },
    mouseOverHandler: function (e) {
        this.setState({ cls: 'cls2' });
    },
    mouseOutHandler: function(e) {
        this.setState({ cls: 'cls1' });
    },
    render: function () {
        return <div className={this.state.cls} onMouseDown={this.mouseDownHandler}
                    onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></div>
    }
})

var container = document.getElementById('example');
ReactDOM.render(<Demo />, container);