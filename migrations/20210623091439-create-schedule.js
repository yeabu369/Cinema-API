'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Schedules');
  }
};