// TODO 5: SETUP MODEL

// Import Config
const db = require("../config/TODO-3");

class Patients {
  // Method All
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  //   Method Create
  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, results) => {
        resolve(data);
      });
    });
  }

  //   Method Find
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        const [student] = results;
        resolve(student);
      });
    });
  }

  //   Method Update
  static update(id, data) {
    new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE ID = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    return this.find(id);
  }

  //   Method Delete
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  //   Method Search
  static search(data) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE name LIKE ?";
      db.query(sql, `%${data}%`, (err, results) => {
        resolve(results);
      });
    });
  }

  //   Method findByStatus
  static findByStatus(data) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = ?";
      db.query(sql, data, (err, results) => {
        resolve(results);
      });
    });
  }
}

// Export classes
module.exports = Patients;
