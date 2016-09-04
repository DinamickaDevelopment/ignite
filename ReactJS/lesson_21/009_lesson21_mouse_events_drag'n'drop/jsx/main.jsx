var React = require('react'); 
var ReactDOM = require('react-dom'); 

        // Для работы с drag and drop в ReactJS прдусмотрены следующие события: 
        //  onDrag - курсор двигается при перетаскивании элемента или выбранного текса с помощью мыши
        //  onDragEnd -  пользователь отпускает курсор мыши в процессе перетаскивания 
        //  onDragEnter - перетаскиваемый элемент достигает конечного элемента 
        //  onDragLeave -  перетаскиваемый элемент выходит за пределы конечного элемента 
        //  onDragOver -  курсор мыши наведен на элемент при перетаскивании 
        //  onDragStart - начало переноса элемента или выбранного текста с помощью мыши
        //  onDrop -  происходит drop элемента 
        
        var Demo = React.createClass({

            dragStartHandler: function(e) {
                e.target.style.backgroundColor = 'blue';
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', e.target.id); 
                return true;
            }, 
            
            dragOverHandler: function(e) { 
      
                e.preventDefault();   
            }, 

            dropHandler: function(e) {
                e.preventDefault();
                var data = e.dataTransfer.getData("text/plain");
                e.target.appendChild(document.getElementById(data)); 
               
                console.log('drop!'); 
            }, 

            render: function() {
                var bricks = []; 
                for (var i = 0; i < 10; i++) {
                    bricks.push(<div key={i} id={i} onDragStart={this.dragStartHandler} className="brick" draggable="true" ></div>);
                } 

                return (
                <div>
                    <div>{bricks}</div>
                    <div className="container" onDragOver={this.dragOverHandler} onDrop={this.dropHandler}><h2>Drag bricks here</h2></div>
                </div> 
            )}
        })

        var container = document.getElementById('example');
        ReactDOM.render(<Demo />, container);