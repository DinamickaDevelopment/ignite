import { EventEmitter } from 'events'; 
import dispatcher from '../dispatcher'

class ToDoStore extends EventEmitter {
    constructor() {
        super() 
        this.tableMode = false 
        this.tasks = [
                {
                    id: `${Date.now()}`, 
                    name: 'Buy newspaper', 
                    complete: false
                    
                }, 
                {
                    id: `${Date.now()}` + 1, 
                    name: 'Watch TV', 
                    complete: true
                }
            ] 
    } 

    getMode() {
        return this.tableMode
    } 

    createItem(item) {
        this.tasks.push({
            id: `${Date.now()}`, 
            name: item.name, 
            complete: item.complete
        })
    } 

	// удалить элемент
    removeItem(id) {
        
        var newData = [];
        for ( var i = 0; i < this.tasks.length; i++ ) {
          
            if ( this.tasks[i].id === id ) {
                console.log('deleted item id' + this.tasks[i].id)
                continue;
            } 
            newData.push(this.tasks[i])
        } 
        this.tasks = newData; 
    }

    // получить все элементы 
    getAll() {  return this.tasks  } 

	// вернуть элемент с указанным id 
    getTaskById(id) { 

        for ( var i = 0; i < this.tasks.length; i++ ) {
            if ( this.tasks[i].id == id ) { 
                return {
                    id: this.tasks[i].id, 
                    name: this.tasks[i].name, 
                    complete: this.tasks[i].complete
                }
            } 
        }
    } 

	// редактировать элемент 
    editTaskEnd(item) {
        for ( var i = 0; i < this.tasks.length; i++ ) {
            if ( this.tasks[i].id == item.id ) { 
                this.tasks[i].name = item.name, 
                this.tasks[i].complete = item.complete
            }
        } 
    }

	// обработка actions
    handleActions(action) {
        switch(action.type) {
            case "CREATE_ITEM": {
                console.log('Item created') 

                this.emit('CHANGE')
                this.createItem(action.item); 
                break;
            }
            case "CHANGE_MODE": {
                console.log('mode changed!') 
                
                this.tableMode = !this.tableMode; 
                this.emit('CHANGE_MODE'); 
                break; 
            } 
            case "REMOVE_ITEM": {
                console.log('Item removed')
                this.emit('CHANGE'); 
                this.removeItem(action.id); 
                break;          
            } 
            case "EDIT_START": {
                console.log("Edit start")
                this.getTaskById(action.id); 
                break; 
            }
            case "EDIT_END": {
                console.log("Edit end") 
                this.emit('CHANGE')
                this.editTaskEnd(action.item); 
                break; 
            }
        }

    }
} 

const todoStore = new ToDoStore; 
dispatcher.register(todoStore.handleActions.bind(todoStore)); 

module.exports = todoStore; 