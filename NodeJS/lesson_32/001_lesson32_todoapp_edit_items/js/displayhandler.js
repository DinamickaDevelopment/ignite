var mysql = require('mysql');
var pool = require('./connection_pool'); 

var queries = require('./queries'); 

module.exports = {
    displayItems: function(req, res) {
        pool.getConnection(function (err, connection) { 
            
            // установить режим загрузки данных(для редактирования или для просмотра)
            if (req.url == '/') {
                var options = {edit: false} 
            } else {
                var options = {edit: true} 
            } 

            var query = queries.getAllItems(options, connection); 

            query.on('end', function() { 
                if (req.url == '/') {
                    res.render('index', { data:  queries.tableRows, buttons: false });
                } else {
                    res.render('index', { data: queries.tableRows, buttons: true });
                }

                connection.release(); 
            })

        })
    }
}