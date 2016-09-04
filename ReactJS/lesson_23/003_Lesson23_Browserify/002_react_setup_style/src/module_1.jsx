import React from 'react';
import ReactDOM from 'react-dom';
 
class First extends React.Component {
  render() {
    return <h2>First Module</h2>
  }
}

ReactDOM.render(<First/>, document.getElementById('first'));