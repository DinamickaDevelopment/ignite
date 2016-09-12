var React = require('react'); 
var Link = require('react-router').Link;   

// импорт хранилища данных (store)
var TodoStore = require('../stores/toDoStore'); 

// импорт React-компонентов
var Table = require('./table.jsx');  
var List = require('./list.jsx'); 

// импорт действий toDoActions 
var TodoActions = require('../actions/toDoActions'); 

class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            tasks: TodoStore.getAll(), 
            tableMode: TodoStore.getMode()
        } 
        this.changeMode =  this.changeMode.bind(this)
        this.changeHandler = this.changeHandler.bind(this) 
    } 

    changeHandler() {
        // создание действия changeMode, которое рассылает событие changeMode
        TodoActions.changeMode(); 
    }

     changeMode() {
         this.setState({
        // обновить данные из хранилища TodoStore
            tableMode: TodoStore.tableMode
        })
    }
     componentWillMount() {
         // назначение обработчика события changeMode TodoStore
        TodoStore.on("CHANGE_MODE", this.changeMode)
    }
     componentWillUnmount() {
         // удаленик обработчика события changeMode TodoStore
        TodoStore.removeListener("CHANGE_MODE", this.changeMode); 
    }
    render() {
        return(<div className="panel">
                    <div className="panel well">
                        <h2>Tasks</h2>
                            <label>Table mode &nbsp; <input type="checkbox" checked={this.state.tableMode} onChange={this.changeHandler}/></label>
                            <div className="margin"><Link to="/edit"><button className="btn btn-sm btn-warning">Edit</button></Link></div>
                    </div>
             {this.state.tableMode ? <Table showDetails={false} items={this.state.tasks}/> : <List showDetails={false} items={this.state.tasks}/> } 
        </div>  
    )}
} 

module.exports = App; 
