import React from 'react';
import ReactDOM from 'react-dom'; 
import AddItem from './addItemHandler.jsx';

 export default class Table extends React.Component { 
	constructor(props) {
		super(props); 
		
		this.state = {
			taskDone: this.props.taskDone
		}
	}
	
    render() {
        return (
		<div>
		<h1>ToDo List</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Due</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {this.props.tasks.map((task, i) => {
					
                    return (
                        <tr key={i}>
                            <td>{task.name}</td>
                            <td>{task.description}</td>   
                            <td>{task.due}</td>
                            <td>{this.state.taskDone[i] ? 'yes' : 'no'}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
		</div>
    )}
} 
