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