// соединение с бд 
var pool = require('./db_handler');
var mysql = require('mysql');
var path = require('path');

module.exports = {
    // згрузка всех элементов
    loadItems: function (req, res) {

        // подключение к бд 
        pool.getConnection(function (err, connection) {

            if (err) console.log(err)

            connection.query('SELECT * FROM `items`', function (err, rows) {
                res.json(rows);
                connection.release();
            });
        });

    },
    // создание элемента 
    createItem: function (req, res) {

        // подключение к бд 
        pool.getConnection(function (err, connection) {
            if (err) console.log(err)

            var sql = 'INSERT INTO `items`(name, description, completed) VALUES (?, ?, ?)';
            var inserts = ["Test Item", "Test Description", 0];
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {

                console.log('test item created');
                res.send('test item created');
                connection.release();
            });
        })
    },
    // обновление элемента (редактирование) 
    updateItem: function (req, res) {
        pool.getConnection(function (err, connection) {
            if (err) console.log(err)

            var data = req.body;

            var sql = 'UPDATE `items` SET name="newName", description="newDescription", completed=1 WHERE id=?';
            var inserts = req.params.id; 
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {

                console.log('item by id ' + req.params.id + ' updated');
                res.send('item by id ' + req.params.id + ' updated');
                connection.release();
            })
        })
    },
    // удаление элемента 
    removeItem: function (req, res) {

        pool.getConnection(function (err, connection) {
            if (err) console.log(err)

            var sql = 'DELETE FROM `items` WHERE id=?';
            var inserts = req.params.id;
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {

                console.log('item by id ' + req.params.id + ' deleted');
                res.send('item by id ' + req.params.id + ' deleted');
                connection.release();
            })
        })
    }
}