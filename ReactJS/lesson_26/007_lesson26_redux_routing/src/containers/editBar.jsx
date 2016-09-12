var React = require('react');    

var bindActionCreators = require('redux').bindActionCreators;  
var connect = require('react-redux').connect;  
var actions = require('../actions/actions'); 

class EditBar extends React.Component {
    
    render() {
       
        let getUserData = () => { 

            function getGender() {
        
                var checkedOption = document.querySelector('input[name="gender"]:checked') 

                if (checkedOption) {
                    switch (checkedOption.value) {
                        case 'male': {
                            return 'Male'
                            break;
                        }
                        case 'female': {
                            return 'Female' 
                            break; 
                        } 
                    }
                } else {
                    return 'not specified'
                }
            }

        var gender = getGender(); 

        var newUser = {
            id: `${Date.now()}`,
            name: document.getElementById('input').value,  
            gender: gender
  
        } 

        return newUser; 
    }

        return (<div className="form-group panel well"> 
                   <div className="input-group">
                            <label> User name </label>
                            <input id="input" type="text" className="form-control input-md" placeholder="name"/>
                            <span className="input-group-btn"> 
                                <button className="btn-md btn-warning btn" onClick={() => this.props.createUser(getUserData())}>Add user!</button> 
                            </span> 
                  </div>   
                 <div className="form-group">
                        <label> Male &nbsp; <input type="radio" name="gender" value="male"/></label>
                        <label> Female &nbsp; <input type="radio" name="gender" value="female"/> </label>
                  </div>
             </div>
    )}
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
} 
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createUser: actions.createUser
    }, dispatch)
} 

module.exports = connect(mapStateToProps, matchDispatchToProps)(EditBar); 