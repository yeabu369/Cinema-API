'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Rows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
    await queryInterface.dropTable('Rows');
  }
};