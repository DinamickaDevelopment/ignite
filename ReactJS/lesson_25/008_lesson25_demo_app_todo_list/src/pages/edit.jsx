var React = require('react'); 
var Link = require('react-router').Link; 
var TodoStore = require('../stores/toDoStore');

// импорт React-компонентов
var List = require('./list.jsx');
var Table = require('./table.jsx');

// импорт действий toDoActions 
var TodoActions = require('../actions/toDoActions'); 

class Edit extends React.Component{
    constructor() {
        super()
        this.state = {
            tasks: TodoStore.getAll(), 
            tableMode: TodoStore.getMode(), 
            currentId: '', 
            editHeadings: false

        } 

        //привязка контекста 
        this.changeMode =  this.changeMode.bind(this);
        this.changeHandler = this.changeHandler.bind(this) ;
        this.createItem = this.createItem.bind(this);
        this.editStartHandler =  this.editStartHandler.bind(this); 
        this.updateTasks = this.updateTasks.bind(this) ;
        this.removeItemHandler = this.removeItemHandler.bind(this);
    }

    createItem() { 

        if (this.state.currentId == '') {
     
            var newItem = {
                id: `${Date.now()}`, 
                name: document.getElementById('taskName').value, 
                complete: document.getElementById('complete').checked
            }
            // передача параметров в actions 
            TodoActions.createItem(newItem);  
            document.getElementById('taskName').value = ''
            document.getElementById('complete').checked = '' 
        } 
        else {


            // передача параметров в actions 
            var editedItem = {
                id: this.state.currentId, 
                name: document.getElementById('taskName').value, 
                complete: document.getElementById('complete').checked
            } 

            // очистка полей ввода 
            TodoActions.editEnd(editedItem); 
            this.setState({ currentId: '' })
            document.getElementById('taskName').value = ''
            document.getElementById('complete').checked = '' 

            this.setState({ editHeadings: false })
        } 


    }

    changeHandler() {
        // создание действия changeMode, которое отправит событие CHANGE_MODE в Store
        TodoActions.changeMode(); 
    } 

    updateTasks() {
        this.setState({ tasks: TodoStore.getAll() })
    }

    changeMode() {
        this.setState({
            tableMode: TodoStore.tableMode
        })
    } 

    removeItemHandler(e) {
        TodoActions.removeItem(e.target.dataset.id)
    } 

    editStartHandler(e) {

        this.setState({ editHeadings: true })

        var task = TodoStore.getTaskById(e.target.dataset.id);  
        
        this.setState({ currentId: e.target.dataset.id }) 
        document.getElementById('taskName').value = task.name; 
        document.getElementById('complete').checked = task.complete; 
    }

    componentWillMount() {
		// назначение обработчиков событий
        TodoStore.on("REMOVE_ITEM", this.removeItemHandler);
        TodoStore.on("CHANGE", this.updateTasks);
        TodoStore.on("CHANGE_MODE", this.changeMode);
        TodoStore.on("EDIT_START", this.editStartHandler);
    }
    componentWillUnmount() { 
	// удаление обработчиков событий
        TodoStore.removeListener("REMOVE_ITEM", this.removeItemHandler);
        TodoStore.removeListener("CHANGE", this.updateTasks); 
        TodoStore.removeListener("CHANGE_MODE", this.changeMode); 
        TodoStore.removeListener("EDIT_START", this.changeMode); 
    }
    render() { 

	   // привязка функций, которые будут переданы дочерним компонентам, к данному компоненту
        var boundEditStartHandler = this.editStartHandler.bind(this); 
        var boundRemoveItemHandler =  this.removeItemHandler.bind(this);
        return( 

         <div className="panel"> 
            <div className="panel well">
                <h2>Tasks</h2>    
                <label>Table mode &nbsp; 
                    <input type="checkbox" checked={this.state.tableMode} onChange={this.changeHandler}/>
                </label>
                <div className="margin">
                    <Link to="/">
                        <button className="btn btn-sm btn-warning">Back</button>
                    </Link>
                </div>
                {   
                    TodoStore.tableMode 

                   ? <Table 
                    items={TodoStore.getAll()} 
                    showDetails={true}
                    clickHandler={boundEditStartHandler} 
                    removeHandler={boundRemoveItemHandler}/> 
                            
                  : <List items={TodoStore.getAll()} 
                    showDetails={true}
                    removeHandler={boundRemoveItemHandler}
                    clickHandler={this.editStartHandler}/>
                  
                }
        </div>
        <div className="panel panel-primary">
            <div>{ this.state.editHeadings ? <h3>Editing Task!</h3>  :  <h3>Add item</h3> 

                }
            </div>
            <div className="form-group">
                <label>Task: &nbsp; <input id="taskName" type="text" className="input-lg form-control" /></label>
            </div>
             <div className="form-group">
                <label>Completed: &nbsp; <input id="complete" type="checkbox"/></label>
            </div> 
            <button id="btn" className="btn btn-sm btn-warning" onClick={this.createItem}>Apply</button>
        </div>
        </div>

    )}
}

module.exports = Edit; 