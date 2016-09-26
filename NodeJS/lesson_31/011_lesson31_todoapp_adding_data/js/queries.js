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
    },

    insertItem: function (data, connection) {
        // форматирование запроса
        var sql = 'INSERT INTO `items` (name, description, completed) VALUES (?, ?, ?)'
        var inserts = [data.name, data.description, data.completed];
        var sql = mysql.format(sql, inserts);

        // запрос к бд 
        return query = connection.query(sql, function (err, rows) {
            if (err) {
                console.log(err);
                return;
            }

            console.log('item inserted into database!');
        })
    }

}