import React from 'react'

import appStore from '../Stores/appStore'
import styleStore from '../Stores/styleStore'
import * as appActions from '../Actions/appActions'

export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            counter: appStore.count, 
            cls: styleStore.cls
        }
        this.countHandler = this.countHandler.bind(this); 
        this.styleChangeHandler = this.styleChangeHandler.bind(this);  
    } 

    componentWillMount() {
        // создание обработчиков событий flux 
        appStore.on('countChange', () => {
            this.setState({ counter: appStore.countClicks() })
        }) 

        styleStore.on('styleChange', () => {
            this.setState({ cls: styleStore.changeStyle(this.state.cls) })
        })
    }

    countHandler() { 
        appActions.count(); 
    } 

    styleChangeHandler() {
        appActions.changeStyle(); 
    }

    render() {
        return (
            <div className={this.state.cls}>
                <div className="panel well">
                    <button className="btn-lg btn-warning btn" onClick={this.countHandler}>Click me!</button>
                    <h1>{this.state.counter}</h1>
                </div>
                <button className="btn-md btn-info btn" onClick={this.styleChangeHandler}>Change Style!</button>
        </div>
    )}
}
