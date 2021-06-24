'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MovieGenres', {
      MovieId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'movies',
          key: 'id'
        },
        allowNull: false
      },
      GenreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
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
    await queryInterface.dropTable('MovieGenres');
  }
};