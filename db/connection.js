const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL passworrd
        password: '',
        database: ''
    },
    console.log('Connected to the <db name> database.')
);

module.exports = db;