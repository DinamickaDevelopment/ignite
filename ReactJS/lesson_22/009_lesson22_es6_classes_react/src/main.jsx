var React = require('react'); 
var ReactDOM = require('react-dom'); 

class Counter extends React.Component { 
		
    // props и state определяются через constructor
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount}; 
				 
        // для того, чтобы ключевое слово this можно было использовать в качестве ссылки на текущий React класс, 
        // следует использовать метод bind в конструкторе класса 
        this.tick = this.tick.bind(this);
    } 
		 
    tick() { 
        this.setState({count: this.state.count + 1});   
    }
    render() {
        return (
            <div onClick={this.tick}>
    Clicks: {this.state.count}
</div>
);
    }
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 }; 
        
var container = document.getElementById('example'); 
ReactDOM.render(<Counter/>, container);