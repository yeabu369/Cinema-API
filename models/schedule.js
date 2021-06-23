'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ticket }) {
      // define association here
      this.hasMany(Ticket);
    }
  };

  Schedule.init({
    HallId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MovieId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Starts: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Ends: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EntryPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Schedule',
  });

  return Schedule;
};