import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Field name must be between 3 and 255 characters',
          },
        },
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Field surname must be between 3 and 255 characters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Age must be an integer value',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Weight must be an integer or float value',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Height must be an integer or float value',
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'student_id' });
  }
}
