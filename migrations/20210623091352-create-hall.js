'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Halls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      AvailableSeats: {
        type: DataTypes.INTEGER
      },
      Capacity: {
        type: DataTypes.INTEGER
      },
      IsFull: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      Type: {
        type: DataTypes.STRING
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
    await queryInterface.dropTable('Halls');
  }
};