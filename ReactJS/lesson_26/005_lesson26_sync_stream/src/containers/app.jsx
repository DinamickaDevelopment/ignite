var React = require('react');  

// импорт зависимостей для установки связви между React компонентом, actions и состоянием приложения(state)
var bindActionCreators = require('redux').bindActionCreators;  
var connect = require('react-redux').connect; 

var ItemTable = require('../components/itemTable.jsx'); 
var EditBar = require('./editBar.jsx'); 
var actions = require('../actions/actions'); 

class App extends React.Component {
    constructor() {
        super()
        this.clickHandler =  this.clickHandler.bind(this)
    } 

    clickHandler(e) { 
		// удалить пользователя по id 
        this.props.deleteUser(e.target.dataset.id); 
    }

    render() {

      let boundHandler = this.clickHandler.bind(this);
     
      return(    
       <div>
            <div className="panel well">
                <h2>Users List</h2>
           </div>
           <ItemTable items={this.props.users} handler={boundHandler}/>
           <EditBar />
       </div>    
    )
  }
} 

// связывание состояния приложения с React компонентом 
function mapStateToProps(state) {
    console.log(state)
    return {
        users: state
    }
}  

// связывание функции действия deleteUser со свойством React компонента deleteUser 
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteUser: actions.deleteUser
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App)