import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super() 
        this.text = ''; 
    } 
    setText(text) {
        this.text = text;
    } 
    getText() {
        return this.text
    }

    // обработчик actions
    handleActions(action) {
        switch (action.type) {
            case "LOAD_START": {
                console.log('load start'); 
                this.emit('loadStart'); 
                break; 
            } 
            case "LOAD_END": {
                this.setText(action.data); 
                console.log('load end'); 
                this.emit('loadEnd'); 
				break; 
            }
        }
    }    
} 

const appStore = new AppStore; 
// зарегистрировать обработчик actions в диспетчере 
dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 