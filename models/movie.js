'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Movie.init({
    Title: DataTypes.STRING,
    DurationInHours: DataTypes.INTEGER,
    Type: DataTypes.STRING,
    DebutsAt: DataTypes.DATE,
    ExpiresAt: DataTypes.DATE,
    Synopsis: DataTypes.TEXT,
    Likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });

  return Movie;
  
};