'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MovieLanguage.init({
    MoviedId: DataTypes.INTEGER,
    LanguageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieLanguage',
  });
  return MovieLanguage;
};