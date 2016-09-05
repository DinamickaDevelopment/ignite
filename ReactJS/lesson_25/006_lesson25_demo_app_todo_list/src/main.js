import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'; 

import App from './pages/app.jsx' 
import Edit from './pages/edit.jsx'

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/">
        <IndexRoute component={App} />
        <Route path="edit" component={Edit}/>
    </Route>
</Router>, document.getElementById('app'))