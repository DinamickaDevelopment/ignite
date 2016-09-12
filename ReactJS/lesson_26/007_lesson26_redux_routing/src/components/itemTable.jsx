var React = require('react'); 

class ItemTable extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentWillReceiveProps() {
        console.log('update'); 
    }

    render() {

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                   </tr>
                </thead>
                <tbody>
                   {this.props.items.map((item, i) => {
                       return(
                               <tr key={i}>
                                    <td><span data-id={item.id} onClick={this.props.handler}  className="glyphicon glyphicon-remove"></span> &nbsp;
                                        {item.name}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
    )} 
}

module.exports = ItemTable; 
