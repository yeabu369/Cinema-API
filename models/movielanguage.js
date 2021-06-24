'use strict';

const { Model } = require('sequelize');

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
    MoviedId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movies',
        key: 'id'
      },
      allowNull: false
    },
    LanguageId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'languages',
        key: 'id'
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MovieLanguage',
  });

  return MovieLanguage;
};