var React = require('react');
var ReactDOM = require('react-dom');


var elem = React.createElement('h1', null, 'Hello World8!');

// Функция render принимает два аргумента: виртуальный элемент и реальный узел DOM. 
// React берёт виртуальный элемент и добавляет его в указанный узел. 
ReactDOM.render(elem, document.getElementById('example'));
