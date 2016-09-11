import React from 'react' 
import ReactDOM from 'react-dom'

import { Dispatcher } from 'flux' 
import { EventEmitter } from 'events' 

// Компоненты flux архитектуры: 

//Dispatcher / Диспетчер — принимает Действия и рассылает нагрузку зарегистрированным обработчикам 

var dispatcher = new Dispatcher; 
 
//Actions / Действия — хелперы, упрощающие передачу данных Диспетчеру

function emitClick() {
    dispatcher.dispatch({
        type: 'CLICK'
    })
}

//Stores / Хранилища — контейнеры для состояния приложения и бизнес-логики в обработчиках, зарегистрированных в Диспетчере

class AppStore extends EventEmitter {

    handleActions(action) {

        switch(action.type) {
            case 'CLICK': { 
                console.log(this); 

                this.emit('showText'); 
 
                break; 
            }
        }
    }
} 

const appStore = new AppStore; 
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this  
dispatcher.register(appStore.handleActions.bind(appStore)); 

//Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства 

class App extends React.Component { 
    constructor() {
        super() 
        this.state = {
            showText: false 
        } 

    }

    clickHandler() {
        emitClick(); 
    } 

    componentDidMount() {

        var self = this; 
        appStore.on('showText', function() {

            self.setState({ showText: !self.state.showText }); 
            console.log('showText action'); 
        })
    }
    render() {
        return (
            <div>
              <button onClick={this.clickHandler} className='btn btn-success btn-lg'>Click!</button>
              <h1>{this.state.showText ? this.props.text : '...'}</h1>
            </div>
        )
      
    }
} 

var container = document.getElementById('example'); 
ReactDOM.render(<App text="Hello from Flux!" />, container); 