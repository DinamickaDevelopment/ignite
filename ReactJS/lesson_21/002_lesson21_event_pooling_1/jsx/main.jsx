var React = require('react'); 
var ReactDOM = require('react-dom'); 

     // В данном примере рассматривается пул событий React JS (т.е. многократное использование одного объекта события) 
	 // В React JS по умоляанию все события используются многократно (т.е. после исопльзования событие сразу же возвращается в пул и может быть использовано еще раз). 
	
        var Demo = React.createClass({

            clickHandler: function(event) {

               alert('See console for info');

               console.log(event.type); // => "click"

               var eventType = event.type; // => "click"

				    // попытка асинхронного чтения свойства события будет неудачной 
                    setTimeout(function() {
				
                        console.log('async event type: ' + event.type); // => null; в консоли будет показано предупреждение
                        console.log('sync event type: ' + eventType); // => "click" 
				
                    }, 0);

                
            }, 
 
            render: function() {
               return (
                <button onClick={this.clickHandler}>Click!</button>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo />, container); 