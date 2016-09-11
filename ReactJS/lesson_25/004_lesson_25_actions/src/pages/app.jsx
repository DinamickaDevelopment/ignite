import React from 'react'

import appStore from '../Stores/appStore'
import styleStore from '../Stores/styleStore'
import * as appActions from '../Actions/appActions'

export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            counter: appStore.count, 
            cls: styleStore.cls, 
            text: 'dummy text!'
        }
        this.countHandler = this.countHandler.bind(this); 
        this.styleChangeHandler = this.styleChangeHandler.bind(this);  
        this.showTextHandler = this.showTextHandler.bind(this); 
    } 

    componentWillMount() { 
        // создание обработчиков событий 
        appStore.on('countChange', () => {
            this.setState({ counter: appStore.countClicks() })
        }) 

        appStore.on('textChange', () => {
            this.setState({ text: appStore.getText() })
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
    showTextHandler() { 
        // передача параметров в actions 
        appActions.showText(document.getElementById('input').value); 
    }

    render() {
        return (
            <div>
                <div className="panel well">
                    <button className="btn-lg btn-warning btn" onClick={this.countHandler}>Click me!</button>
                    <h1>{this.state.counter}</h1>
                </div>
                <div className={this.state.cls}>
                    <button className="btn-md btn-info btn" onClick={this.styleChangeHandler}>Change Style!</button>
                </div>
                <div className="panel">
                    <div className="input-group">
                        <input type="text" id="input" className="input-md form-control" />
                         <button className="btn-md btn-success btn" onClick={this.showTextHandler} >Show Text!</button>
                    </div> 
               </div>
               <h2>{this.state.text}</h2>
        </div>
    )}
}
