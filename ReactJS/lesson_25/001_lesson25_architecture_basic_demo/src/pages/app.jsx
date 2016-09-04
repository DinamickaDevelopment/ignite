import React from 'react'

import appStore from '../Stores/appStore'
import * as appActions from '../Actions/appActions'

export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            counter: appStore.getInitialCount()
        }
        this.clickHandler = this.clickHandler.bind(this) 
    } 

    componentWillMount() { 
        // создание обработчика flux событий
        appStore.on('countChange', () => {
            this.setState({ counter: appStore.countClicks() })
            }
        )
    }

    clickHandler() { 
     
        appActions.count(); 
    }

    render() {
        return (
            <div className="panel well">
                <button className="btn-lg btn-warning btn" onClick={this.clickHandler}>Click me!</button>
                <h1>{this.state.counter}</h1>
            </div>
    )}
}
