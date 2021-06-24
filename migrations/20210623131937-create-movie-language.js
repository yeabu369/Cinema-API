'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MovieLanguages', {
      MoviedId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'movies',
          key: 'id'
        },
        allowNull: false
      },
      LanguageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'languages',
          key: 'id'
        },
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
    await queryInterface.dropTable('MovieLanguages');
  }
};