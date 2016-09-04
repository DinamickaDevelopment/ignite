var React = require('react'); 
var ReactDOM = require('react-dom'); 

        var items= ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']; 

        var Demo = React.createClass({ 

        // принцип делегации событий - назначение обработчика событий родительскому элементу
        // и отслеживание элемента, на котором произошло событие, с помощью event.target  
            clickHandler: function(e) {
                e.target.style.color = 'red'; 
                e.target.style.fontWeight = 'bold'; 
            }, 

            render: function() {
                return (
            <div className="panel well">
				<h2>Click on list elements</h2>
                <ul onClick={this.clickHandler}>
                    {items.map(function(item) {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo />, container);