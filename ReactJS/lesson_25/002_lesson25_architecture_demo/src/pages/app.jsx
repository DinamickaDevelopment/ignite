var React = require('react'); 

var appStore = require('../Stores/appStore'); 
var appActions = require('../Actions/appActions'); 

// flux Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства

class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            counter: appStore.getInitialCount()
        }
        this.clickHandler = this.clickHandler.bind(this) 
    } 

    componentWillMount() { 
        // создание обработчика flux actions / Действий
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

module.exports = App; 