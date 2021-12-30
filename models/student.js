// Import database
const db = require("../config/database");

class Student {
    static all() {
        return new Promise ((resolve, reject) => {
        // query ambil data
            const sql = "SELECT * FROM students";
            db.query(sql, (err,results) => {
                resolve(results);
            });
        });
    }

    static create(student) {
        return new Promise ((resolve, reject) => {
            const sql = 'INSERT INTO students SET ?';
            db.query(sql, student, (err, results) => {
                resolve(student)
            });
        });
    }
}

// Export model
module.exports = Student;