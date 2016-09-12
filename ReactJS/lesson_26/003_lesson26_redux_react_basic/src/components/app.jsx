var React = require('react');  

var bindActionCreators = require('redux').bindActionCreators; 
var connect = require('react-redux').connect; 
var actions = require('../actions/actions'); 

class App extends React.Component {
    render() {
    return (
            <div className="panell well">
                <button className="btn-md btn btn-warning"
                onClick={() => this.props.greet()}>Click Me!</button>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
} 

// привязка state к компоненту App
function mapStateToProps(state) {
    console.log(state)
    return {
        text: state
    }
} 

// привязка actions к компоненту App
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        greet: actions.showText
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App) 