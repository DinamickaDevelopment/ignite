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

    // обработчик событий
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
// зарегистрировать обработчик событий
dispatcher.register(styleStore.handleActions.bind(styleStore)); 

module.exports = styleStore; 