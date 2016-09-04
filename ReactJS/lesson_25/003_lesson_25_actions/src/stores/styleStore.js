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

    handleActions(action) {
        switch (action.type) {
            case "CHANGE_STYLE": { 
                this.emit('styleChange')
                console.log('style changed!'); 

            }
        }
    } 

   
} 

const styleStore = new StyleStore; 
dispatcher.register(styleStore.handleActions.bind(styleStore)); 

export default styleStore; 