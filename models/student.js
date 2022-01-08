// Import database
const db = require("../config/database");

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      // query ambil data
      const sql = "SELECT * FROM students";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static create(student) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, student, (err, results) => {
        resolve(student);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        const [student] = results;
        resolve(student);
      });
    });
  }

  static update(id, data, student) {
    new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    return this.find(id);
  }

  static delete(id) {
    new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// Export model
module.exports = Student;
