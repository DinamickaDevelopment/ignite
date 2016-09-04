import React from 'react'; 

export default class View extends React.Component {
    render() {
        return ( 
            <div className="panel test">{this.props.children}</div>
        )}
}