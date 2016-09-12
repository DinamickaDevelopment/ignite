import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super() 
        this.count = 0;
        this.text = ''; 
    } 


    countClicks() {

        this.count++ 
        return this.count
    }  

    setText(text) {
        this.text = text;
    } 

    getText() {
        return this.text
    }

    handleActions(action) {
        switch (action.type) {
            case "COUNT": { 
                this.emit('countChange'); 
                console.log(this.count); 
                break; 
            }
            case "SHOW_TEXT": {
                console.log('output shown!'); 
                this.setText(action.text); 
                this.emit('textChange'); 
                break; 
            }
        }
    } 

   
} 

const appStore = new AppStore; 
dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 