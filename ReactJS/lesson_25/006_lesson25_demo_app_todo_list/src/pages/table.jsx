import React from 'react'; 

// импорт всех экспортируемых значений из toDoActions под именем TodoActins
import * as TodoActions from '../actions/toDoActions'

export default class Table extends React.Component {
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