var React = require('react'); 
var ReactDOM = require('react-dom'); 

	    // state(состояние) React компонента - свойства, за изменениями которых React будет следить и в случае их изменений 
		// проводить манипуляции с виртуальным DOM и заново рендерить все изменившиеся элементы. 
		
		// Для того, чтобы задать состояние компонента при его инициализации, используется функция getInitialState
		// Для изменения состояние компонента после его инициализации используется метод setState

        var Demo = React.createClass({ 

                getInitialState: function() {
                    return {
                     counter: 1, 
                    } 
                }, 

                count: function() {
                    this.setState({counter: this.state.counter + 1}); 
                },

                render: function() {
                    
                    if (!this.timer) {
                        this.timer = setInterval(this.count, 500); 
                    }

                    return (
                        <div><h1>{this.state.counter}</h1></div>
                    )
                }
        })

        var container = document.getElementById('example'); 

        ReactDOM.render(<Demo/>, container); 