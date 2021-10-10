const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL passworrd
        password: '',
        database: 'technology_employees'
    },
    console.log('Connected to the technology_employees database.')
);

module.exports = db;