var React = require('react'); 
var ReactDOM = require('react-dom'); 

		// Композиция(composition) - создаие компонента, состоящего из нескольких других компонентов 

        //форма
        var Form = React.createClass({
			getDefaultProps: function() {
				return {
					text1: 'enter some text', 
					text2: 'click!'
				}
			}, 
			
            render: function() {

                return (
                     <div className="cls panel well">  
                         <form action="#" name="myForm">
                             {/* отображение дочерних React компонентов */}
                                <InputField prop1={this.props.text1}/>
                                <Button prop2={this.props.text2}/>
                        </form> 
                    </div>
            )}
        }); 

        // поле ввода
        var InputField = React.createClass({ 

            render: function() { 
                return (
               <div> <label>Input Field <br /> <input className="input-lg" placeholder={this.props.prop1}/></label><br/> </div>         
            )}
        }); 

        // кнопка
        var Button = React.createClass({ 
		
        render: function() {
                return (         
                <input type="submit" className="btn-lg btn-success" value={this.props.prop2}/>
           )}
        }); 

        var container = document.getElementById('example'); 

        ReactDOM.render(<Form/>, container); 