import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Lucas',
      surname: 'Vinicius',
      email: 'lucas@gmail.com',
      age: 21,
      weight: 110,
      height: 1.85,
    });
    res.json(newStudent);
  }
}

export default new StudentController();
