'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Seat.init({
    Taken: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Type: {
      type: DataTypes.STRING,
    },
    RowId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'rows',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });

  return Seat;
  
};