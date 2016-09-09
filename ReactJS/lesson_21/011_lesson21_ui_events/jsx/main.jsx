var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // Для отслеживания прокрутки страницы в ReactJS используется событие onScroll 
        var Demo = React.createClass({ 

            scrollHandler: function(e) {
                var output = document.getElementById('output'); 
                output.innerHTML = 'px scrolled: ' + document.getElementsByClassName('container')[0].scrollTop
            }, 

            render: function() {

                var {prop1, ...others} = this.props;

                return (
                        <div className="container" onScroll={this.scrollHandler}>
                            <div  {...others} onClick={ function () { alert("Hello2") } }  className="scroll"></div>
                            <div className="info" id="output"></div>
                        </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo prop1="1" prop2="2" onClick={function () { alert("Hello1") }}  />, container);