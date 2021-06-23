'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Row }) {
      // define association here
      this.belongsTo(Row);
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
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });

  return Seat;
  
};