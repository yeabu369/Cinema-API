'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Role, Ticket, MovieCard }) {
      // define association here
      this.belongsToMany(Role, {
        through: 'UserRole'
      });

      this.hasMany(MovieCard, {
        foreignKey: 'Creator'
      });

      this.hasMany(Ticket);
    }
  };

  User.init({
    FullName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;

};