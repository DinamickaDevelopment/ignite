import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'; 

import View1 from './views/view1.jsx'; 
import View2 from './views/view2.jsx'; 

class App extends React.Component {
    render() {
        return (
        <div>
            <div id="container" className="panel well">
                <h1>React Routing Demo!</h1>
                     <ul>
                          <li><Link to="/view1"><button className="btn btn-lg btn-success">View 1</button></Link></li>
                          <li><Link to="/view2"><button className="btn btn-lg btn-success">View 2</button></Link></li>
                    </ul>
            </div>  
            <div className="panel">{this.props.children}</div>
        </div>
   )}
} 

class Home extends React.Component {
    render() {
        return (
            <h3>This is the homepage</h3>        
    )}
}

// конфигурацию маршрутизации можно также представлять 
// в виде обычного JS объекта
const routes = {
    path: '/', 
    component: App, 
    indexRoute: { component: Home }, 
    childRoutes: [
        { path: 'view1', component: View1 }, 
        { path: 'view2', component: View2 }
    ]
} 

ReactDOM.render(<Router routes={routes} />,document.getElementById('app'))

