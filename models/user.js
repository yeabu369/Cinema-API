'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Role, Ticket, MovieCard, Schedule }) {
      // define association here
      this.belongsToMany(Role, {
        through: 'UserRole'
      });

      this.hasMany(MovieCard, {
        foreignKey: 'Creator'
      });

      this.hasMany(Ticket, {
        foreignKey: 'UserId'
      });

      this.hasMany(Schedule, {
        foreignKey: 'createdBy'
      });
    }
  };

  User.init({
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;

};