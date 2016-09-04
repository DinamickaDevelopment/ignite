var React = require('react'); 
var ReactDOM = require('react-dom'); 

   // SyntheticEvent - кросс-браузерная обертка вокруг родного события браузера. 
   // Она имеет такой же интерфейс, как и родное событие браузера, включая stopPropagation() и preventDefault(), 
   // за исключением того, что SyntheticEvent работает во всех браузерах одинаково. 

   // В версии ReactJS v.014 и выше return false не отменяет событие и не останавливает его распространение. Для этого следует использовать методы 
   // stopPropagation и preventDefault; 
   
           var Demo = React.createClass({ 

            clickHandler: function(e) {
                alert('bubbles: ' + e.bubbles + '\n\r' + 
                'cancelable: ' + e.cancelable + '\n\r' + 
                'currentTarget: ' + e.currentTarget + '\n\r' + 
                'defaultPrevented: ' + e.defaultPrevented + '\n\r' + 
                'eventPhase: ' + e.eventPhase+ '\n\r' + 
                'isTrusted: ' + e.isTrusted + '\n\r' + 
                'nativeEvent: ' + e.nativeEvent + '\n\r' + 
                'isDefaultPrevented: ' + e.isDefaultPrevented() + '\n\r' + 
                'isPropagationStopped: ' + e.isPropagationStopped() + '\n\r' + 
                'target: ' + e.target + '\n\r' + 
                'timeStamp: ' + e.timeStamp + '\n\r' + 
                'type: ' + e.type  
                )
            },
            render: function() {
                return (
                <button onClick={this.clickHandler}>Click!</button>
            )}
        }); 

        var container = document.getElementById('example'); 
        ReactDOM.render(<Demo/>, container); 