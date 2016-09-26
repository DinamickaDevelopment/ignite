var mysql = require('mysql');

module.exports = {

    tableRows: '',
    // выбор всех элементов и отображение в виде таблицы 
    getAllItems: function (connection) {
        var self = this; 
        var query = connection.query('SELECT * FROM `items`', function (err, rows) {
            if (err) console.log(err) 

            // генерация рядов таблицы на основе полученных данных  
            var table_rows = rows.map((row) => {
                return (` <tr>
                            <td>${row.name} </td>
                            <td>${row.description}</td>
                            <td>${row.completed ? 'yes' : 'no'}</td>
                        </tr> `)
            })

            self.tableRows = table_rows.join(' ');

        });
        return query;
    }
}