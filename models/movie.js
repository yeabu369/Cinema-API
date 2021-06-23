'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Genre }) {
      // define association here
      this.belongsToMany(Genre, {
        through: 'MovieGenre',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };

  Movie.init({
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DurationInMin: {
      type: DataTypes.INTEGER
    },
    DebutsAt: {
      type: DataTypes.DATE
    },
    ExpiresAt: {
      type: DataTypes.DATE
    },
    Synopsis: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Movie',
  });

  return Movie;
  
};