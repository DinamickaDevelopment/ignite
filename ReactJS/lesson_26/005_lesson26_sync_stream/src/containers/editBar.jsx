import React from 'react'   

import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux' 
import * as actions from '../actions/actions' 

class EditBar extends React.Component {
    
    render() {
       
        // функция для создания нового пользователя 
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
                } 
                else {
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

        return (

        <div className="form-group panel well"> 
               <div className="input-group">
                        <label> User name </label>
                        <input id="input" type="text" className="form-control input-md" placeholder="name"/>
                        <span className="input-group-btn"> 
                            {/* создать нового пользователя при клике по кнопке */}
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

// связать состояние приложения и состояние компонента
function mapStateToProps(state) {
    return {
        users: state.users
    }
} 
// связать actions с компонентом 
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createUser: actions.createUser
    }, dispatch)
} 

export default connect(mapStateToProps, matchDispatchToProps)(EditBar) 