import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super() 
        this.items = [{name: 'Item1', id: 1}, { name: 'Item2', id: 2}, 
            { name: 'Item3', id: 3}, { name: 'Item4', id: 4}, { name: 'Item5', id: 5}]
    } 

    getAll() {
        return this.items
    }

    // создать элемент
    createItem(item) {
        this.items.push(item)
    }

    // удалить элемент
    removeItem(id) {
        
        var newData = [];
        for ( var i = 0; i < this.items.length; i++ ) {

            if ( this.items[i].id == id ) {
                console.log('deleted item id' + this.items[i].id)
                continue;
            } 
            newData.push(this.items[i])
        } 

        this.items = newData; 
    }
    
    // обработать actions 
    handleActions(action) {
        switch (action.type) {
            case 'CREATE_ITEM': {
            
                this.createItem(action.item)
                this.emit('change')
                break; 
            }
            case 'DELETE_ITEM': {
            
                this.removeItem(action.id)
                this.emit('change')
                break; 
            }
        }
    } 
} 

const appStore = new AppStore; 
dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore; 