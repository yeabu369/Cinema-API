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
      this.hasMany(Ticket, {
        foreignKey: 'ScheduleId'
      });
    }
  };

  Schedule.init({
    HallId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'halls',
        key: 'id'
      }
    },
    MovieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'movies',
        key: 'id'
      }
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
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Schedule',
  });

  return Schedule;
};