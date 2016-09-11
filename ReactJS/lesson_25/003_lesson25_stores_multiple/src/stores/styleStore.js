import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class StyleStore extends EventEmitter {
    constructor() {
        super() 
        this.cls = 'one'
    } 

    changeStyle(cls) {
        if (cls == 'one') {
            this.cls = 'two' 
            return this.cls
        } 
        else {
            this.cls = 'one' 
            return this.cls
        }
    }
    // обрабочик actions
    handleActions(action) {
        switch (action.type) {
            case "CHANGE_STYLE": { 
                this.emit('styleChange')
                console.log('style changed!'); 
				break; 
            }
        }
    } 
} 

const styleStore = new StyleStore; 
// регистрация обработчика actions 
dispatcher.register(styleStore.handleActions.bind(styleStore)); 

export default styleStore; 