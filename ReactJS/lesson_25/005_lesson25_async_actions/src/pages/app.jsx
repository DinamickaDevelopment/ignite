﻿import React from 'react'

import appStore from '../Stores/appStore'
import * as appActions from '../Actions/appActions'

export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            text: 'no text...'
        }
        this.clickHandler = this.clickHandler.bind(this); 
    } 
    
    clickHandler() {
        appActions.loadText(); 
    }

    componentWillMount() {
        // обработчик события начала загрузки
        appStore.on('loadStart', () => {
            this.setState({ text: 'loading...' })
        }) 
        // обработчик события завершения загрузки
        appStore.on('loadEnd', () => {
            this.setState({ text: appStore.getText() })
        })
    }

    render() {
        return (
            <div className="panel well">
                <button className="btn-lg btn-warning btn" onClick={this.clickHandler}>Show text</button>
                <h2>{this.state.text}</h2>
            </div>
    )}
}
