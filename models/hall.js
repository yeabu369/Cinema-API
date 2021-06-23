'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Hall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Row }) {
      // define association here
      this.hasMany(Row);
    }
  };

  Hall.init({
    AvailableSeats: {
      type: DataTypes.INTEGER
    },
    Capacity: {
      type: DataTypes.INTEGER
    },
    IsFull: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Type: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Hall',
  });

  return Hall;

};