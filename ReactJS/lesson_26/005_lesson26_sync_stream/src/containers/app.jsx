import React from 'react' 
import '../components/css/main.css' 

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

function mapStateToProps(state) {
    console.log(state.users)
    return {
        users: state.users
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteUser: actions.deleteUser
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)