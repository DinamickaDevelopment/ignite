var React = require('react'); 
var ReactDOM = require('react-dom'); 

        function Demo(props) {

        // в ReactJS существует возможность передавать свойства компонента с помощью деструктуризации  
		// Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, 
		// при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.
        
		var {prop1, ...other} = props; 

        return (

        <div className="panel well">
            <h2>prop1: {props.prop1 ? 'true' : 'false'}</h2>
            <button {...other}>Click me!</button>
        </div>

        )}


        var container = document.getElementById('example');
        ReactDOM.render(<Demo prop1={true} onClick={function() {alert('Hello world!')}}></Demo>, container); 
