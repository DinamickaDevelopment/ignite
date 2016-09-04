import React from 'react'; 
import ReactDOM from 'react-dom'; 

var data = [{name: 'name',description: 'имя проекта'}, {name: 'version', description: 'версия проекта'}, 
                {name: 'description', description: 'описание проекта'}, {name: 'entry point', description: 'стартовый файл приложения'}, 
                {name: 'git repository', description: 'путь к git репозиторию '}, {name: 'keywords', description: 'список ключевых слов(для поиска пакета с помощью npm search)'}, 
                {name: 'author', description: 'автор'}, {name: 'license', description: 'тип лицензии'}, {name:'dependencies', description: 'зависимости проэкта'}, 
                {name: 'devDependencies', description: 'зависимости проэкта на стадии разработки'}]; 

class Table extends React.Component {

    render() {
                return (
                <div>
                    <h2>Package.JSON</h2>
                    <table className="table table-striped"> 
                        <thead>
                            <tr>
                                <th>Поле</th>
                                <th>Описание</th>
                            </tr>
                        </thead>
                        <tbody>
                             {this.props.options.map((item, index) => {
              
                                 return  (<tr key={index}>
                                          <td>{item.name}</td>
                                          <td>{item.description}</td>
                                   </tr>) 
                             })}
                        </tbody>
                  </table> 
            </div>
     )}
}

ReactDOM.render(<Table options={data}/>, document.getElementById('example')); 