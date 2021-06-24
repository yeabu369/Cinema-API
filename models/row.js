'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Row extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Seat, Hall }) {
      // define association here
      this.hasMany(Seat);
    }
  };

  Row.init({
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TotalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'halls',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Row',
  });

  return Row;

};