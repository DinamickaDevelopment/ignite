var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // Для отслеживания прокрутки страницы в ReactJS используется событие onScroll 
        var Demo = React.createClass({ 

            scrollHandler: function(e) {
                var ouptut = document.getElementById('ouput'); 
                output.innerHTML = 'px scrolled: ' + document.getElementsByClassName('container')[0].scrollTop
            }, 

            render: function() {
                return (
            <div className="container" onScroll={this.scrollHandler}>
                <div className="scroll"></div>
                    <div className="info" id="output"></div>
            </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo />, container);