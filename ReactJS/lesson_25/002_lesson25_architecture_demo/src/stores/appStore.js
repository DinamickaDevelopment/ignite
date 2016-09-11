import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

// flux Stores / Хранилища — контейнеры для состояния приложения и логики в обработчиках, зарегистрированных в Диспетчере

class AppStore extends EventEmitter {
    constructor() {
        super() 
        this.initialCount = 0
        this.count = 0
    } 

    getInitialCount() {
        return this.initialCount
    }

    countClicks() {

        this.count++ 
        return this.count
    } 

	// обработчик actions 
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
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this  
dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore; 