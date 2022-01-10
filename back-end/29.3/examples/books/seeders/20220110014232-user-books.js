'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserBooks',
      [
        { user_id: 1, book_id: 1 },
        { user_id: 1, book_id: 3 },
        { user_id: 2, book_id: 1 },
        { user_id: 2, book_id: 2 },
        { user_id: 3, book_id: 1 },
        { user_id: 3, book_id: 2 },
        { user_id: 3, book_id: 3 },
      ],
      {},
    );

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserBooks', null, {});
  }
};
