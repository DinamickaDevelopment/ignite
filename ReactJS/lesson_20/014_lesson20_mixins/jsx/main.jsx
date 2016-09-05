var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // использование mixin компонентов позволяет разным компонентам использовать общий функционал
        var SetIntervalMixin = {
         componentWillMount: function() {
                this.intervals = [];
             },
         setInterval: function() {
                this.intervals.push(setInterval.apply(null, arguments));
             },
         componentWillUnmount: function() {
                 this.intervals.forEach(clearInterval);
             }
        };

        var TickTock = React.createClass({ 
        
            mixins: [SetIntervalMixin], // использовать mixin
            getInitialState: function() {
                return {seconds: 0};
            },
            componentDidMount: function() {
                this.setInterval(this.tick, 1000); // вызвать mixin метод
            },
            tick: function() {
                this.setState({seconds: this.state.seconds + 1});
            },
            render: function() {
                 return (
                    <p>
                        React has been running for {this.state.seconds} seconds.
                    </p>
                )} 
        });

        var container = document.getElementById('example');
        ReactDOM.render(<TickTock />, container); 