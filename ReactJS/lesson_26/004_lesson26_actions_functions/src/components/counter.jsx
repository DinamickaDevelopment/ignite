import React from 'react'; 
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 

import * as actions from '../actions/index'

class Counter extends React.Component {

    render() {   
        return (
            <div>
                <button className="btn-md btn-warning btn" onClick={() => this.props.inc(this.props.counter)}>+</button>
                <button className="btn-md btn-warning btn" onClick={() => this.props.dec(this.props.counter)}>-</button> 
                <h2>{this.props.counter}</h2>
            </div>
    )} 
}

//функция для привязки состояния приложения к props (свойствам компонента)
 function mapStateToProps(state) {
    return {
       counter: state
   }
 } 

 //функция для привязки actions к props (свойствам компонента)
 function matchDispatchToProps(dispatch) {
     return bindActionCreators({
         inc: actions.increment, 
         dec: actions.decrement
     } , dispatch )
 }

 // привязка actions и state к React компоненту 
export default connect(mapStateToProps, matchDispatchToProps)(Counter); 