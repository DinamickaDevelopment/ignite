var mysql = require('mysql'); 
var pool = require('./connection_pool');
var path = require('path'); 

var queries = require('./queries');


module.exports = {
    loadAddPage: function(req, res) {
        res.render(path.join(__dirname, '../pages/add_item_page')); 
    }, 
    addRow: function (req, res) {
        
        // подключение к бд 
        pool.getConnection(function (err, connection) {
            var query = queries.insertItem(req.body, connection);
            query.on('end', function () {
                res.end(); 
                // завершение соединения 
                connection.release();
            })
        })
    }
}