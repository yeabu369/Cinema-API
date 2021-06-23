'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class MovieCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  MovieCard.init({
    MovieId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Poster: {
      type: DataTypes.STRING
    },
    Creator: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MovieCard',
  });

  return MovieCard;

};