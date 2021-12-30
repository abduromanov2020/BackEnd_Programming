const Student = require("../models/student");

class StudentController {
    async index(req,res) {
        const students = await Student.all();

        const data = {
            message: 'menampilkan data',
            data: students
        }
        res.json(data)
    }
    async store(req,res) {
        const students = await Student.create(req.body);

        const data = {
            message: 'Menambahkan Data',
            data: students
        }
        res.json(data);
    }
    update(req,res) {
        const { id } = req.params;
        const { nama } = req.body;

        student[id] = nama

        const data = {
            message: 'Mengedit Data Student',
            data: student
        }
        res.json(data);
    }
    destroy(req,res) {
        const {id} = req.params;

        student.splice(id,1);

        const data = {
            message: 'Menghapus Data Students',
            data: student
        }

        res.json(data)
    }
}

const object = new StudentController();

module.exports = object