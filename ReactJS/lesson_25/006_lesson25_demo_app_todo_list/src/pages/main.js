import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'; 
import './css/main.css'

import App from './app.jsx' 
import Edit from './edit.jsx'

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/">
        <IndexRoute component={App} />
        <Route path="edit" component={Edit}/>
    </Route>
</Router>, document.getElementById('app'))