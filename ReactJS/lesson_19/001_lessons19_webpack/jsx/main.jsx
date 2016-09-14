/*Создайте React компонент, который содержит checkbox и элемент div.
При клике по checkbox элементу div присваиваиваются новые стили
(выбор стиля призвольный). */
var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.createClass({
    getInitialState: function () {
        return{
            checked:true
        }
    },
    handler: function () {
        this.setState({checked: !this.state.checked})
    },
    render: function () {
        var checkState;
        if(this.state.checked){
            checkState = "styleTrue"
        }
        else{
            checkState = "styleFalse"
        }
        return(
            <div>
                <input type="checkbox" onChange={this.handler} defaultChecked ={this.state.checked}/>
                <div className = {checkState}></div>
            </div>
        )
}
});
var container = document.getElementById("example")
ReactDOM.render(<Component/>, container);