var React = require('react'); 

var appStore = require('../Stores/appStore'); 
var appActions = require('../Actions/appActions');  

class List extends React.Component{
    constructor(props) {
        super(props)
    } 

    render() {
        return(
                <ul>
                    {this.props.items.map((item) => {
                        {/* Присвоить каждому li индивидуальный ключ */}
                        return (
                            <li key={item.id}>{item.name} &nbsp; 
                            <span 
                                data-id={item.id} 
                                onClick={this.props.handler} className="glyphicon glyphicon-remove">
                            </span>
                            </li>
                        )
                    })}
                </ul>
     )}
}

module.exports = List; 