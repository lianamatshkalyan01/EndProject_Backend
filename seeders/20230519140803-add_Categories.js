'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkInsert('Categories', [ 
      { 
      name: 'Herbs',
      img: 'uploads/categories/Herbs.png',
      createdAt: new Date(), 
      updatedAt: new Date(), 
    }, 
    { 
      name: 'Optics',
      img: 'uploads/categories/Optics.png', 
      createdAt: new Date(), 
      updatedAt: new Date(), 
    }, 
    { 
      name: 'VitaminC',
      img: 'uploads/categories/Vitaminpng.png',
      createdAt: new Date(), 
      updatedAt: new Date(), 
    },
    { 
      name: 'MotherChild',
      img: 'uploads/MotherChild.png',
      createdAt: new Date(), 
      updatedAt: new Date(), 
    },
    { 
      name: 'Medical Supplies',
      img: 'uploads/categories/Medical.png',
      createdAt: new Date(), 
      updatedAt: new Date(), 
    },
  ], {}); 
  },

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkDelete('Categories', null, {}); 
  } };
