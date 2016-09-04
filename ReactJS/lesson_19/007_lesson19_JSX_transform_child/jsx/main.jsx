var React = require('react'); 
var ReactDOM = require('react-dom'); 

   
        //JSX позволяет указать дочерние узлы используя XML синтаксис

        var app = <nav><header>Hello!</header></nav>; 
        var container = document.getElementById('example'); 

        ReactDOM.render(app, container); 
