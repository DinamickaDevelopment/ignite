import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher' 

class AppStore extends EventEmitter {
    constructor() {
        super() 

        this.itemCount = 3; 
        this.items = this.makeItems(this.itemCount); 
    } 

    // генерация массива items на основе переданных в функцию данных
    makeItems(count) {
        var items = []; 

        for (var i = 0; i < count; i++) {
            items.push('Test Value');     
        } 

        this.items = items; 

    } 

    handleActions(action) {
        switch (action.type) {
            case 'MAKE_ITEMS': {
                // обновление массива this.items
                this.makeItems(action.num) 
                // генерация события items_ready (сообщение об обновлении items)
                this.emit('items_ready'); 
            }
        }
    }
} 

const appStore = new AppStore; 
dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore; 