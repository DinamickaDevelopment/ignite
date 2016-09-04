var React = require('react'); 
var ReactDOM = require('react-dom'); 

        var DemoComponent = React.createClass({
            render: function() {
                    return (
                        <div>
                             <h2>{this.props.name}</h2> 
							 {/*this.props.children - доступ ко вложенным элементам компонента. Это могут быть теги, текстовые узлы и React компоненты */}
                             <div>{this.props.children}</div>
                        </div>
            )}
        }) 
         
        var ChildComponent = React.createClass({
            render: function() {
                return (
                <div>
                    <input type="text" placeholder="Child React component" />
                </div>
            )}
        })

        var container = document.getElementById('example'); 

        ReactDOM.render(
        <div> 
            {/*текст в качестве дочернего элемента React компонента*/}
            <DemoComponent name="Component 1">Some text</DemoComponent> 
            {/*html в качестве дочернего элемента React компонента*/}
            <DemoComponent name="Component 2"><div className="test"></div></DemoComponent> 
            {/*React компонент в качестве дочернего элемента компонента*/}
            <DemoComponent name="Component 3"><ChildComponent /></DemoComponent>
        </div>
        , container); 
