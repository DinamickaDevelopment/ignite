var mysql = require('mysql');
var pool = require('./connection_pool'); 

var queries = require('./queries'); 

module.exports = {
    displayItems: function(req, res) {
        pool.getConnection(function (err, connection) { 
           
            var query = queries.getAllItems(connection); 

            query.on('end', function() { 
      
                res.render('index', { data:  queries.tableRows, buttons: false });
                connection.release(); 
            })

        })
    }
}