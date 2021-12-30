// Import Mysql
const mysql = require("mysql");

// Import dotenv
require("dotenv").config();
const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;


// Buat Koneksi
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

// Konek ke database
db.connect(function(err) {
    if(err) {
        console.log(`Koneksi error ${err}`);
        return;
    } else {
        console.log(`koneksi berhasil`);
        return;
    }
});

// Export db
module.exports = db;