const Student = require("../models/student");

class StudentController {
  async index(req, res) {
    const students = await Student.all();

    const data = {
      message: "menampilkan data",
      data: students,
    };
    res.status(200).json(data);
  }
  async store(req, res) {
    const students = await Student.create(req.body);

    const data = {
      message: "Menambahkan Data",
      data: students,
    };
    res.status(201).json(data);
  }
  async update(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      const StudentUpdated = await Student.update(id, req.body, student);

      const data = {
        message: "Mengedit Data",
        data: StudentUpdated,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Data tidak ditemukan",
      };
      res.status(404).json(data);
    }
  }
  async destroy(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);

      const data = {
        message: "Data Berhasil dihapus",
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Data tidak ditemukan",
      };
      res.status(404).json(data);
    }
  }
  async show(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      const data = {
        message: "Data Ditemukan",
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Data tidak ditemukan",
      };
      res.status(404).json(data);
    }
  }
}

const object = new StudentController();

module.exports = object;
