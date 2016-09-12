var React = require('react'); 
var ReactDOM = require('react-dom'); 

// импорт необходимых для настройки маршрутизации объектов из модуля react-router
var router = require('react-router'); 

var Router = router.Router; 
var Route = router.Route; 
var Link = router.Link; 
var hashHistory = router.hashHistory; 

// В данном примере рассмотрено использование query параметров с react-router 

class User extends React.Component { 
    constructor(props) {
        super(props)
        console.log(this.props); 
    }
    render() { 
    // доступ к query параметрам 	
    let location = this.props.location
    let age = location.query && location.query.showAge ? '33' : 'no data'

    return (
      <div className="panel output">
        <h3>User id: {this.props.params.userID}</h3>
        <p>age: {age}</p>
    </div>
  )}
}

class App extends React.Component { 

    render() { 
        return (
              <div className="panel panel-primary">
                <ul>
                  <li><Link to="/user/bob" activeClassName="active"><h2>Bob</h2></Link></li>
                  <li><Link to={{ pathname: '/user/bob', query: { showAge: true } }} activeClassName="active"><h2>Bob With Query Params</h2></Link></li>
                  <li><Link to="/user/sally" activeClassName="active"><h2>Sally</h2></Link></li>
                </ul>
                  {this.props.children}
            </div>
      )}
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="user/:userID" component={User} />
    </Route>
  </Router>
), document.getElementById('app'))