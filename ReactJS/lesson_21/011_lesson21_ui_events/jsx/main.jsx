var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // Для отслеживания прокрутки страницы в ReactJS используется событие onScroll 
        var Demo = React.createClass({ 

            scrollHandler: function(e) {
                var output = document.getElementById('output'); 
                output.innerHTML = 'px scrolled: ' + document.getElementsByClassName('container')[0].scrollTop;
                output.innerHTML = e.target.key;
            }, 

            render: function() {

                var {...others} = this.props;

                return (
                        <div className="container" onScroll={this.scrollHandler} >
                            <div  {...others} onClick={ function () { alert("Hello2") } }  className="scroll"  ></div>
                            <div className="info" id="output"></div>
                        </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo data-key="1" onClick={function () { alert("Hello1") }}  />, container);