import React from 'react' 
import * as appActions from '../Actions/appActions'
import appStore from '../stores/appStore'

import List from './list.jsx' 

// flux Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства 
// В данном примере компонент App получает state от хранилища(store) и передает его в качестве props дочернему компоненту List 

export default class App extends React.Component { 
    constructor() {
        super() 

        this.state = {
            items: []
        }

    }

    clickHandler() {
        // передача данных в actions 
        var itemCount = document.getElementById('inp').value; 
        appActions.makeItems(itemCount); 
    } 

    componentWillMount() { 
        var self = this;  
        // обработчик события items_ready из appStore
        appStore.on('items_ready', function() { 
            // this в данном контексте относится к appStore 
            self.setState({ items: this.items })

        })
    }

    render() {
        return <div>
            <h2>Enter a number: </h2>
            <input id="inp" className="input-lg" type="text" />
            <div>
                 <button className="btn btn-lg btn-danger" onClick={this.clickHandler} >Apply</button>
            </div>
            <List items={this.state.items} />
        </div>
    }
} 
 
