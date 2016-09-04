var React = require('react'); 
var ReactDOM = require('react-dom'); 


        window.cls = 'panel well'; 

        window.val1 = 'Disabled button'; 
        window.val2 = 'Button!'; 

        window.disableBtn1 = true; 
        window.disableBtn2 = false; 

        var DemoComponent = React.createClass({
            render: function() {
                //использование выражения в качестве атрибута 
                return (<div className={window.cls}>
                    <DemoComponent.Btn1/>
                    <DemoComponent.Btn2/>
                </div>)
            }
        }); 

        DemoComponent.Btn1 = React.createClass({
            render() {
                return (
				    // использование тернарного оператора в выражении
                    <input type="button" disabled={true} value={window.disableBtn1 ? window.val1 : window.val2 }/>
                )
            }
        }); 

        DemoComponent.Btn2 = React.createClass({
            render() {
                 return (
               //использование булевого значения в выражении 
                <input type="button" disabled={false} value={window.disableBtn2 ? window.val1 : window.val2}/>
               )
            }
        });


        var container = document.getElementById('example');

        ReactDOM.render(<DemoComponent />, container); 