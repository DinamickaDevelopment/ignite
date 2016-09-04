﻿import React from 'react' 
import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux' 
import * as actions from '../actions/actions'  

import { Link } from 'react-router'

class Feedback extends React.Component {
    render() {
        return(
        <div>
        <div className="panel well"> 
            <Link to="/"><button className="btn btn-sm btn-warning">Back to users</button></Link>

                <h2>Leave us a message if you like our app!</h2> 
                <div className="form-group"></div>
                <input id="msg" placeholder="Entet message text" className="input-md form-control"/>
               
                <button className="btn btn-md btn-warning"
                    onClick = {() => this.props.sendMsg(document.getElementById('msg').value)}>
                    Submit
                </button>
            </div> 
        <ul>
            {this.props.messages.map((msg, i) => {
                return <li key={'msg' + i}>{msg}</li>
            })}
        </ul>
        </div>
   )}
} 

function mapStateToProps(state) {
    return {
        messages: state.messages.text
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        sendMsg: actions.sendMsg
    }, dispatch)
} 

export default connect(mapStateToProps, matchDispatchToProps)(Feedback)