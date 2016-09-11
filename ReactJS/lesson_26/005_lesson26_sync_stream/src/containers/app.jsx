import React from 'react' 

// импорт зависимостей для установки связви между React компонентом, actions и состоянием приложения(state)
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'

import ItemTable from '../components/itemTable.jsx' 
import EditBar from './editBar.jsx'
import * as actions from '../actions/actions' 

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

export default connect(mapStateToProps, matchDispatchToProps)(App)