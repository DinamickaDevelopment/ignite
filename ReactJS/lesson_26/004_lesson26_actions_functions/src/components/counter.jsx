var React = require('react'); 
var bindActionCreators =  require('redux').bindActionCreators; 
var connect = require('react-redux').connect; 

var actions = require('../actions/index'); 

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
module.exports = connect(mapStateToProps, matchDispatchToProps)(Counter); 