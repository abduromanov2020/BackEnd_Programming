// TODO 3: Import data students dari folder data/students.js
const student = require('../data/students');
// code here

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    // code here
    const data = {
      message: "Menampilkkan semua students",
      data: student,
    };

    res.json(data);
  }

  store(req, res) {
    const { nama } = req.body;

    student.push(nama);

    // TODO 5: Tambahkan data students
    // code here
    const data = {
      message: `Menambahkan data student: ${nama}`,
      data: student,
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    student[id] = nama;

    // TODO 6: Update data students
    // code here
    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: student,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    student.splice(id,1);

    // TODO 7: Hapus data students
    // code here
    const data = {
      message: `Menghapus student id ${id}`,
      data: student,
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
