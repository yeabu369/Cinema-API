'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie }) {
      // define association here
      this.belongsToMany(Movie, {
        through: 'MovieGenre'
      });
    }
  };
  Language.init({
    Code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Language',
  });
  return Language;
};