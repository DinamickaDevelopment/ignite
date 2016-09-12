var React = require('react'); 

// импорт действий toDoActions 
var TodoActions = require('../actions/toDoActions'); 

class Table extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() { 
        return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Completed</th>
                </tr>
            </thead>   
            <tbody> 
			{/* создание таблицы на основе значений props */}
                {this.props.items.map((item) => {
                    return (
                            <tr key={item.id}>
                                <td>
                                    <div className={this.props.showDetails ? 'show' : 'hide'}>
                                        <span className="glyphicon glyphicon-remove" data-id={item.id} onClick={this.props.removeHandler}></span>
                                        <span className="glyphicon glyphicon-pencil" data-id={item.id} onClick={this.props.clickHandler}></span> 
                                    </div>
                                        {item.name}
                                </td>
                                <td> {item.complete ? 'yes' : 'no'}</td>
                            </tr>
                        )}
                     )}
            </tbody>
        </table>
    )}
}

module.exports = Table; 