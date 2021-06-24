'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      Taken: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      Type: {
        type: DataTypes.STRING
      },
      RowId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Row',
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
    await queryInterface.dropTable('Seats');
  }
};