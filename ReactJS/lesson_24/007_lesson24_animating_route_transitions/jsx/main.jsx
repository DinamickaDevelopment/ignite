import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

import {View1} from '../views/view1.jsx'
import {View2} from '../views/view2.jsx'

import '../css/main.css'
import '../css/animation.css' 

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() { 
        // свойства анмации  
        const animProps = {
            transitionName:"example", 
            transitionEnterTimeout: 500, 
            transitionLeaveTimeout: 300, 
            component: 'div', 
            transitionAppear: true,
            transitionAppearTimeout: 300
        } 

        return (
        <div>
            <div id="container" className="panel well">
                <h1>React Routing Demo!</h1>
                     <ul>
                          <li><Link to="/view1"><button className="btn btn-lg btn-success">View 1</button></Link></li>
                          <li><Link to="/view2"><button className="btn btn-lg btn-success">View 2</button></Link></li>
                    </ul>
            </div>  
            <div className="panel"> 
                     {/* использование ReactCSSTransitionGroup для запуска анимации */}
                     <ReactCSSTransitionGroup {...animProps}>
                            {React.cloneElement(this.props.children, {
                                key: Math.random()
                            })}
                     </ReactCSSTransitionGroup>
                </div>
        </div>
   )}
} 

class Home extends React.Component {
    render() {
        return (
            <h3>This is the homepage</h3>        
    )}
}

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>

        <IndexRoute component={Home}/>
                <Route key="1" path="view1" component={View1} />
                <Route key="2" path="view2" component={View2} /> 
    </Route>
    </Router>, document.getElementById('app')); 

