// TODO 3: SETUP CONFIG DATABASE

// Import Mysql
const mysql = require("mysql");

// Import dotenv
require("dotenv").config();

// Array Destructing
const { DB_HOST, DB_USER, DB_DATABASE, DB_PASSWORD } = process.env;

// Connection
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  database: DB_DATABASE,
  password: DB_PASSWORD,
});

// Connect to Database
db.connect((err) => {
  if (err) {
    console.log(`Koneksi erro ${err}`);
    return;
  }

  console.log(`koneksi berhasil`);
  return;
});

// export db
module.exports = db;
