var React = require('react'); 

var appStore = require('../Stores/appStore'); 
var appActions = require('../Actions/appActions'); 

var List = require('./list.jsx'); 


class App extends React.Component{
    constructor() {
        super()        
        this.state = {
            items: appStore.getAll()
        }
        this.clickHandler = this.clickHandler.bind(this); 
        this.removeItemHandler =  this.removeItemHandler.bind(this); 
    } 
    
    clickHandler() {
        // создать новый объект item 
        var newItem = {
            name: document.getElementById('input').value, 
            id: `${Date.now()}`
        } 

        // передать его actions в качестве параметра 
        appActions.createItem(newItem); 
    }

    componentWillMount() { 
        // обновить view при удалении или добавлении элемента 
        appStore.on('change', () => {
            this.setState({ items: appStore.getAll() })
        }) 
    } 

    removeItemHandler(e) {
        appActions.removeItem(e.target.dataset.id)
    }

    render() { 

        var boundHandler = this.removeItemHandler.bind(this); 
        return (
            <div className="panel well">
            <div className="input-group">
                <label> Item name </label>
                    <input id="input" type="text" className="form-control input-md"/>  
                   <span className="input-group-btn"> <button className="btn-md btn-warning btn" onClick={this.clickHandler}>Add item!</button> </span>
  
            </div>
                  {/*передача параметров дочернему компоненту*/}
                  <List items={this.state.items} handler={boundHandler}/>
            </div>
    )}
}

module.exports = App; 
