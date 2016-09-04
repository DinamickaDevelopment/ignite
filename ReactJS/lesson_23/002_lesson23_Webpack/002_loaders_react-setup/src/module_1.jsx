
import React from 'react';
import ReactDOM from 'react-dom';
 
class First extends React.Component {
  render() {
    return <h1>First Module</h1>
  }
}

ReactDOM.render(<First/>, document.getElementById('first'));