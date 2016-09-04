import React from 'react'; 
import { Link } from 'react-router'  

// импорт хранилища данных (store)
import TodoStore from '../stores/toDoStore'

// импорт React-компонентов
import Table from './table.jsx' 
import List from './list.jsx'

// импорт всех экспортируемых значений из toDoActions под именем TodoActins
import * as TodoActions from '../actions/toDoActions'

export default class App extends React.Component {
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
        return (<div className="panel">
            <div className="panel well">
                <h2>Tasks</h2>
            <label>Table mode &nbsp; <input type="checkbox" checked={this.state.tableMode} onChange={this.changeHandler}/></label>
            <div className="margin"><Link to="/edit"><button className="btn btn-sm btn-warning">Edit</button></Link></div>
            </div>
            {this.state.tableMode ? <Table showDetails={false} items={this.state.tasks}/> : <List showDetails={false} items={this.state.tasks}/>}    
        </div>
    )}
}
