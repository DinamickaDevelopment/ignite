var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // использование mixin компонентов позволяет разным компонентам использовать общий функционал
        var SetIntervalMixin = {

            set: function() {
                alert("mixin"); 
            },   

         componentWillMount: function () {
             this.intervals = [];
         },
         setInterval: function() {
                this.intervals.push(setInterval.apply(null, arguments));
             },
         componentWillUnmount: function () {
                 alert("componentWillUnmount")
                 this.intervals.forEach(clearInterval);
         },
        
        };

        var TickTock = React.createClass({ 
                   
            getDefaultProps: function () {
                return { customValue: "Value_Prop" };
            },

            mixins: [SetIntervalMixin], // использовать mixin
            
            //set: function () {
            //    alert("TickTock");
            //},

            getInitialState: function () {
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
                    <div>
                      <p>
                        React has been running for {this.state.seconds} seconds.
                        
                      </p>
                       <p onClick={this.set}> Click </p>
                  </div>
                    )} 
        });

        var container = document.getElementById('example');
        ReactDOM.render(<TickTock />, container); 

        //setTimeout(unmount, 5000);

        //function unmount() {
        //    ReactDOM.unmountComponentAtNode(document.getElementById("example"))
        //}
