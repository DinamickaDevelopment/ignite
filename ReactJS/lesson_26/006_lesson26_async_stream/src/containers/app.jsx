var React = require('react'); 

var bindActionCreators = require('redux').bindActionCreators;  
var connect = require('react-redux').connect;  

var ItemTable = require('../components/itemTable.jsx');  
var EditBar = require('./editBar.jsx'); 

var actions = require('../actions/actions');  
var asyncActions = require('../actions/async'); 


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
  
      return( <div>
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

module.exports = connect(mapStateToProps, matchDispatchToProps)(App); 