'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class MovieGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  MovieGenre.init({
    MovieId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Movie',
        key: 'id'
      }
    },
    GenreId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Genre',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'MovieGenre',
  });

  return MovieGenre;

};