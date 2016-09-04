var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // создание React класса 
        var Demo = React.createClass({
            render: function () {
        // пользовательские атрибуты используются с префиксом data для html тэгов и без него для пользовательских элементов
                return (
                        <div>       
                                <h2 id="someId" data-custom-attr="custom attr1"></h2>
                                <custom-tag id="someId2" custom-attribute="custom attr2"></custom-tag>
                        </div>
                )
            }
        })

        var container = document.getElementById('example');  
        ReactDOM.render(<Demo/>, container); 

        var h2 = document.getElementById('someId');
        h2.innerHTML = h2.dataset.customAttr;

        var customTag = document.getElementById('someId2');
        customTag.innerHTML = customTag.getAttribute('custom-attribute');
        