'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schedules');
  }
};