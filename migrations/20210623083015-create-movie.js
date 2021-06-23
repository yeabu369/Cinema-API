'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      DurationInHours: {
        type: Sequelize.INTEGER
      },
      Type: {
        type: Sequelize.STRING
      },
      DebutsAt: {
        type: Sequelize.DATE
      },
      ExpiresAt: {
        type: Sequelize.DATE
      },
      Synopsis: {
        type: Sequelize.TEXT
      },
      Likes: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Movies');
  }
};