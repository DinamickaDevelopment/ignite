import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super() 
        this.count = 0
    } 

    countClicks() {

        this.count++ 
        return this.count
    } 
    //обработчик actions
    handleActions(action) {
        switch (action.type) {
            case "COUNT": { 
                this.emit('countChange')
                console.log(this.count); 
				break; 
            }
        }
    } 
} 

const appStore = new AppStore; 
// регистрация обработчика actions 
dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 