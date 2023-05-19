'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      pack_quantity: {
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING
      },
      dosage: {
        type: Sequelize.STRING
      },
      composition: {
        type: Sequelize.STRING
      },
      side_effect: {
        type: Sequelize.STRING
      },
      instruction: {
        type: Sequelize.STRING
      },
      storage_condition: {
        type: Sequelize.STRING
      },
      undercategories_id: {
        type: Sequelize.INTEGER,
        references:{model:'UnderCategories', key:'id'}
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};