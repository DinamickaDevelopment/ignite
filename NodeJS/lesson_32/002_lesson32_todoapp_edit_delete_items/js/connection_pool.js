﻿var mysql = require('mysql');

// создать подключение к бд 
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dinamicka123',
    database: 'todos'
});

module.exports = pool; 