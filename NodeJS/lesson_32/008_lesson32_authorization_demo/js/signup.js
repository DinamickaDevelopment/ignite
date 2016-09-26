module.exports = {
	// добавить новго пользователя 
    addUser: function (newUser) {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'session_test'
        });

        connection.connect(function (err) { if (err) console.log(err) });

        var sql = 'INSERT INTO `users` (username, passwordHash) VALUES (?, ?)';
        var inserts = [newUser.username, newUser.passwordHash];
        var sql = mysql.format(sql, inserts); 

        return connection.query(sql);
        
    }

}
    
