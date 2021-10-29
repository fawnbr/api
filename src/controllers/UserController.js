import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      await User.create(req.body);
      return res.status(200).json({ msg: 'User created successfully' });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Missing id parameter'] });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ['User does not exist'] });
      }
      const updatedUser = await user.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Missing id parameter'] });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({ errors: ['User does not exist'] });
      }
      await user.destroy();
      return res.status(200).json({ msg: 'User deleted successfully' });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();