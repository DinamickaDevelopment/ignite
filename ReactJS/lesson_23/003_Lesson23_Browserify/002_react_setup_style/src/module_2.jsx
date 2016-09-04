import React from 'react';
import ReactDOM from 'react-dom';
 
class Second extends React.Component {
  render() {
    return <h2>Second Module</h2>
  }
}

ReactDOM.render(<Second/>, document.getElementById('second'));