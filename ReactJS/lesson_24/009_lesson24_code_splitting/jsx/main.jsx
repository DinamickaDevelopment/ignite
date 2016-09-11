import React from "react"
import ReactDOM from 'react-dom' 

// импорт необходимых для настройки маршрутизации объектов из модуля react-router
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router' 

// импорт компонента домашней страницы 
import Home from './views/home.jsx' 

// В данном примере рассмотрена асинхронная загрузка компонентов маршрутизации(см. также конфигурационный файл webpack) 

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="panel panel-primary well">
                    <h2>Code Splitting Demo!</h2>
                    <ul>
                          <li><Link to="/view1"><button className="btn btn-lg btn-success">View 1</button></Link></li>
                          <li><Link to="/view2"><button className="btn btn-lg btn-success">View 2</button></Link></li>
                    </ul>

                </div>
                <div className="panel output">
                    {this.props.children}    
                </div>
            </div>
    )}
}

  // использование getComponent вместо Component позволяет асинхронно загружать компоненты 
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route 
        path="view1"   
            getComponent={(location, callback) => {
                  require.ensure([], function (require) {
					  var view1 = require('./views/view1.jsx').default; 
                      callback(null, view1);
                  });
            }}
        />
        <Route 
            path="view2"
            getComponent={(location, callback) => {
                 require.ensure([], function (require) {
					 var view2 = require('./views/view2.jsx').default; 
                     callback(null, view2);
                 });
            }}   
    />
    </Route>
</Router>
, document.getElementById('app'))