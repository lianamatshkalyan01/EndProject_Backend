'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkInsert('Users', [ 
      { 
      first_name: 'John', 
      last_name: 'Doe', 
      email: 'john.doe@example.com', 
      password:'',
      role:'user',
      is_verified:0,
      createdAt: new Date(), 
      updatedAt: new Date(), 
    }, 
    { 
      firstName: 'Jane', 
      lastName: 'Doe', 
      email: 'jane.doe@example.com', 
      createdAt: new Date(), 
      updatedAt: new Date(), 
    }, ], {}); 
  },

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkDelete('Users', null, {}); 
  } };
