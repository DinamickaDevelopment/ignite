var React = require('react');  

class List extends React.Component {
    render() {
        return <ul>
                {this.props.items.map((item, index) => {
                    return <li key={index}> {item} {index + 1}</li>        
                })
            }
            </ul>
    }
}

module.exports = List; 