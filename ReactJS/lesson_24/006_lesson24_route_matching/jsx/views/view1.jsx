var React = require('react'); 

class View1 extends React.Component {
    render() {
        return(
            <div>
                <h2>id : {this.props.params.id}</h2>
                <h3>This is view 1!</h3>
            </div>  
      )}
}

module.exports = View1; 