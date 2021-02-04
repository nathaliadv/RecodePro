const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '240691',
    database: 'FSEletro'
});

module.exports = connection;