var mysql = require('mysql');

module.exports = {
    // проверка имени пользователя 
    checkUsername: function (username) {
        var connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'session_test'
        });

        connection.connect(function (err) { if (err) console.log(err) });

        var sql = 'SELECT * FROM `users` WHERE username=?';
        var inserts = username;
        sql = mysql.format(sql, inserts);

        var query = connection.query(sql); 
        return query; 
    }
}