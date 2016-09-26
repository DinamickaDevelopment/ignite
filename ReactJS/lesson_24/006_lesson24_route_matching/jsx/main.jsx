var React = require('react');
var ReactDOM = require('react-dom');

// импорт необходимых для настройки маршрутизации объектов из модуля react-router
var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

// импорт компонентов, переключаемых при маршрутизации(views)
var View1 = require('./views/view1.jsx');
var View2 = require('./views/view2.jsx');

// В данном примере рассмотрены правила сопоставления URL и текущего пути роутера

class App extends React.Component {
    render() {
        return (
        <div>
            <div id="container" className="panel well">
                <h1>React Routing Demo!</h1>
                     <ul>

                         {/*

			:paramName - соответствует сегменту URL до следующего символа /, ?, или #, называется параметром.
			() - заключенная в скобки часть URL не обязательна
			* - соответствует всем символам(non-greedy) до следующего символа в паттерне, или до конца URL, если таковых нет.
			** - соответствует всем символам (greedy) до следующего сиимвола /, ?, или #

        */}
                          <li><Link to="/services/service/1"><button className="btn btn-lg btn-success">View 1</button></Link></li>
                          <li><Link to="/view2/some1/some1/path.m"><button className="btn btn-lg btn-success">View 2</button></Link></li>
                     </ul>
            </div>
            <div className="panel">{this.props.children}</div>
        </div>
   )
    }
}

class Home extends React.Component {
    render() {
        return (
            <h3>This is the homepage</h3>
    )
    }
}

// маршрутизация
ReactDOM.render(<Router history={hashHistory}>

    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path='services' >
                <Route path="service/:id" component={View1} />
            </Route>
        </Route>
    </Router>

    <Route path="/view2/some1/some1/*.m" component={View2} />

</Router>, document.getElementById('app'));
