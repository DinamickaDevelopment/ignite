var mysql = require('mysql'); 
var pool = require('./connection_pool');

var queries = require('./queries'); 

module.exports = {

    loadEditPage: function (req, res) {

        // подключение к бд
        pool.getConnection(function (err, connection) {

            // запрос к бд 
            var query = queries.findItemById(req.params.id, connection);

            query.on('end', function () {
                var row = queries.selectedRow;

                res.render('edit_item_page', {
                    id: row.id,
                    name: row.name,
                    description: row.description,
                    completed: row.completed
                });

                // завершение соединения 
                connection.release(); 
            }); 
        })

    }, 

    changeItem: function (req, res) {

        // подключение к бд
        pool.getConnection(function (err, connection) {
            // запрос к бд 
            var query = queries.updateItem(req.body, connection);

            query.on('end', function () {
                res.end();
                // завершение соединения 
                connection.release();

            });
        });
    }
}

