var React = require('react'); 
var ReactDOM = require('react-dom'); 

        var Demo = React.createClass({
            render: function() {
                return (
                <div>
                    {/* Контролируемый компонент - компонент, с указанным свойством value. 
                    Для изменения его значения необходим обработчик события onChange */}
                   Controlled component: <input value='Hello' className="input-lg"/> 
                    {/* Неконтролируемый компонент - компонент без указанного свойства value */}
                   Uncontrolled component:  <input defaultValue="Hello!" type="text" className="input-lg"/> 
                </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo/>, container); 