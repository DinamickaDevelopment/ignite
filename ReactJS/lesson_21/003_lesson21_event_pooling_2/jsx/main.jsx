var React = require('react'); 
var ReactDOM = require('react-dom'); 

        var Demo = React.createClass({ 

            clickHandler: function(event) { 
				alert('See console for info'); 
			
                var eventType = event.type; // => "click"

                setTimeout(function() {
                console.log('async event type: ' + event.type); // => null
                console.log('sync event type: ' + eventType); // => "click"
                }, 0);

				event.persist(); // устранение события из пула; Событие будет доступно при асинхронном обращении к нему
				
                this.setState({eventType: event.type}); 
            }, 
 
            render: function() {
               return (
                <button onClick={this.clickHandler}>Click!</button>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo />, container); 