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
      this.belongsTo(Hall);
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
    }
  }, {
    sequelize,
    modelName: 'Row',
  });

  return Row;

};