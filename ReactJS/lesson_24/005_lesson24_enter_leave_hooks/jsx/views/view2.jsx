var React = require('react'); 
// импорт объекта withRouter из модуля react-router  
var withRouter = require('react-router').withRouter; 

const View2 = withRouter(class View2 extends React.Component {

    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    } 

	// функция routerWillLeave сработает перед уходом роутера с текущего пути 
    routerWillLeave(nextLocation) {
        // если вернуть false, переход по ссылке будет отменен

        // показать пользоваетлю сообщение 
            return 'Are you sure you want to leave?'
    }
    
    render() {
        return(
                <h3>This is view 2!</h3>
      )}
}) 

module.exports = View2; 