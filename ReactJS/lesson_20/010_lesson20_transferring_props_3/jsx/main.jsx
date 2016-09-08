var React = require('react'); 
var ReactDOM = require('react-dom'); 

        function Demo(props) {

        // в ReactJS существует возможность передавать свойства компонента с помощью деструктуризации
        var {prop1, title, ...other} = props;

        return (
        
            <div className="panel well">
                <h1>{title}</h1> 
     
                <h2>prop1: {props.prop1 ? 'true' : 'false'}</h2>
                {/* props, которые не были использованы, будут переданы элементу button через ...other */}
                <button  {...other}  prop1={prop1} title={title}>Click me!</button>
            </div>

        )}


        var container = document.getElementById('example');
        ReactDOM.render(
        <Demo prop1={true} title="Title!" onClick={function() {alert('Hello world!')}}></Demo>, container); // последовательность!!! 