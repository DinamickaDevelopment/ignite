var React = require('react'); 
var ReactDOM = require('react-dom'); 

    // Когда вы впервые используете класс компонента, методы вызываются в следующем порядке:

        // getDefaultProps
        // getInitialState
        // componentWillMount
        // render
        // componentDidMount

    // При всех последующих использованиях компонента вызываются те же методы, исключая метод getDefaultProps;    
         
    // Если состояние приложения изменилось и ваш компонент изменен, вызовутся следующие методы именно в этом порядке:

        // componentWillRecieveProps
        // shouldComponentUpdate
        // componentWillUpdate
        // render
        // componentDidUpdate    

        var Demo = React.createClass({
            getDefaultProps: function() {
                return {
                    title: 'Count'
                }
            }, 

            getInitialState: function() {
                alert('get Initial State!'); 
                return {
                    tick: 1 
                }
            }, 
        
            _tick: function() {
                this.setState({tick: this.state.tick + 1}) 
            }, 
        
            componentWillMount: function() {
                alert('component is about to mount!'); 
                this.setState({tick: this.state.tick + 5}); 
            },    

            render: function() {
                return (
                <div className="panel well">
                    <h2>{this.props.title}: {this.state.tick}</h2>
                </div>
            )}, 
            
            componentDidMount() {
                alert('component did mount!'); 
                this._tick(); 
            }, 

            componentWillReceiveProps: function() {
                alert('component will receive props!'); 
            }, 

            shouldComponentUpdate: function() {
                return true 
            }, 

            componentWillUpdate: function() {
                alert('component will update!'); 
            }, 

            componentDidUpdate: function() {
                alert('component did update!'); 
            }

        }) 

    

        var container = document.getElementById('example'); 
        ReactDOM.render(<Demo/>, container); 

        ReactDOM.render(
        <Demo title="New Title" />, container); 