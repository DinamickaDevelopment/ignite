import React from "react"; 
import ReactDOM from "react-dom"; 
import Table from './table.jsx'; 

var data = {
	tasks: [{ name: 'Finish project', description: 'Very important!', due: '28/02/23'},
				{ name: 'Walk dog', description: 'Need to wake up early!', due: '01/10/20'},
				{ name: 'Something important', description: 'Boring task', due: '03/01/19'},
				{ name: 'Learn a language', description: 'A lot of work', due: '02/02/17'},
				{ name: 'Another task', description: 'Stuff to do', due: '05/08/10'}], 
	completed: [false, true, false, false, true]
}; 



export class AddItem extends React.Component {
	constructor(props) {
		super(props); 
		this.clickHandler = this.clickHandler.bind(this); 
		this.state = {
			tasks: data.tasks, 
			completed: data.completed
		} 

	} 
	
		
	clickHandler(e) { 

		var newItem = {
			name: document.getElementById('name').value, 
			description: document.getElementById('desc').value, 
			due: document.getElementById('due').value, 
		}; 
		var completedVal = document.getElementById('check').checked;  
		
		this.setState({tasks: data.tasks.push(newItem)}); 
		this.setState({completed: data.completed.push(completedVal)}); 
	}
		
    render() { 

		
        return (
            <div className="panel">
			<Table tasks={data.tasks} taskDone={this.state.completed}/>
			<h2>Add Task</h2>
              <div className="form-group"><label> Name<input id="name" type="text" className="input-lg form-control"/></label></div>
              <div className="form-group"><label> Description<input id="desc" type="text" className="input-lg form-control"/></label></div>
              <div className="form-group"><label> Due<input id="due" type="text" className="input-lg form-control"/></label></div>
              <div className="form-group"><label> Completed &nbsp; <input id="check" type="checkbox"/></label></div>
              <div className="form-group"><input type="button" value="Add Task!" onClick={this.clickHandler} className="btn-lg btn btn-info"/></div>
            </div>
            
   )}
}  

ReactDOM.render(<AddItem></AddItem>, document.getElementById('add_task_container')); 
export default data; 
