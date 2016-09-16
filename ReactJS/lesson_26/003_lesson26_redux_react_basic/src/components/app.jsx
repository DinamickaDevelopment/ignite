var React = require('react');  

class App extends React.Component {

    render() {
        return (
            <div className="panell well">
                <button className="btn-md btn btn-warning"
                        onClick={this.props.greet}>
    Click Me!
</button>
<p>{this.props.value}</p>
</div>
        )
    }
}

module.exports = App;