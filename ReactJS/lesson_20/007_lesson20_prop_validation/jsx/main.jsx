var React = require('react'); 
var ReactDOM = require('react-dom'); 


   // React.PropTypes экспортирует широкий спектр валидаторов, которые могут быть использованы, чтобы убедиться, что данные, которые вы получаете допустимые. 
   // Когда недопустимое значение передается в свойство(prop), будет показано предупреждение в консоли JavaScript.



        window.items = [1,2,3,4,5,6,7,8,9,10]; 

        var Demo = React.createClass({

            propTypes: {
                // Вы можете декларировать эти свойства, которые являются JS примитивами. По умолчанию они опциональны
                //optionalArray: React.PropTypes.array,
                //optionalBool: React.PropTypes.bool,
                //optionalFunc: React.PropTypes.func,
                //optionalNumber: React.PropTypes.number,
                //optionalObject: React.PropTypes.object,
                //optionalString: React.PropTypes.string,

                // Все, что может бать отрендерено: numbers, strings, elements или array содержит эти типы.
                //optionalNode: React.PropTypes.node,

                // React элемент.
                //optionalElement: React.PropTypes.element,

                // Вы также можете определить это свойство как экземпляр класса. Для этого используется JS instanceof оператор.
                //optionalMessage: React.PropTypes.instanceOf(Message),

                // Вы можете гарантировать что ваше свойство перечисляемое.
                //optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

                // Объект может быть одним из множества типов
                //optionalUnion: React.PropTypes.oneOfType([
                //React.PropTypes.string,
                //React.PropTypes.number,
                //React.PropTypes.instanceOf(Message)
 
                listItems: React.PropTypes.array, 
                displayTitle: React.PropTypes.bool

            }, 
            
            render: function() {
                return ( 
                <div>
                    <h1>{this.props.title ? 'List Title' : null}</h1>
                    <ul> 
                        {this.props.listItems.map(function(prop, index){
                        return <li key={index}>{prop}</li>
                        })}
                    </ul>
                </div>

            )}
        })

        var container = document.getElementById('example'); 
        ReactDOM.render(<Demo listItems={window.items} title={true}/>, container); 

        //ReactDOM.render(<Demo listItems={{prop1: true}} />, container); ==> ошибка! 