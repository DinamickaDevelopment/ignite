
import React from 'react';
import ReactDOM from 'react-dom';
 
class Second extends React.Component {
  render() {
    return <h1>Second module</h1>
  }
}
 
ReactDOM.render(<Second/>, document.getElementById('second'));