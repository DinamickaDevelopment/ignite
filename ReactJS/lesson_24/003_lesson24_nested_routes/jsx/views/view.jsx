var React = require('react'); 

class View extends React.Component {
    render() {
        return ( 
            <div className="panel test">{this.props.children}</div>
        )}
}

module.exports = View; 