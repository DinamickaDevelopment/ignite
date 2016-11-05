var React = require('react'); 
var ReactDOM = require('react-dom'); 

//создание элемента div с классом cls1 
//для указания класса элемента в ReactJS используется атрибут className 
var elem = <div className="cls1"/>; 
ReactDOM.render(elem, document.getElementById('example1')); 

//создание элемента div с классом cls1 и дочерним элементом p
 var elem = <div className="cls1"><p>'Hello world'</p></div>;
ReactDOM.render(elem, document.getElementById('example2')); 