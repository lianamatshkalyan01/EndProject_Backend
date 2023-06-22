'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkInsert('UnderCategories', [ 
      { 
      name: 'Antiviral, antibacterila, antifungal',
      category_id: 2,
      createdAt: new Date(), 
      updatedAt: new Date(), 
    }, 
    { 
      name: 'Ear, nose and throat',
      category_id: 2,
      createdAt: new Date(), 
      updatedAt: new Date(), 
    }, 
    { 
      name: 'Hormonal drugs',
      category_id: 2,
      createdAt: new Date(), 
      updatedAt: new Date(), 
    }, 
    { 
      name: 'Nervous system',
      category_id: 2,
      createdAt: new Date(), 
      updatedAt: new Date(), 
    }, 
    { 
      name: 'Respiratory system',
      category_id: 2,
      createdAt: new Date(), 
      updatedAt: new Date(), 
    }, 
    { 
      name: 'Ophthalmology',
      category_id: 2,
      createdAt: new Date(), 
      updatedAt: new Date(), 
    },
  ], {}); 
  },

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkDelete('UnderCategories', null, {}); 
  } };
