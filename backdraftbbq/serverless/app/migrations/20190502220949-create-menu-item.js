'use strict';

const menuItemEnum = require('../utils/enum').MenuItemEnum;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MenuItems', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      price: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.ENUM(...menuItemEnum),
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MenuItems');
  }
};