'use strict';

const uuid = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MenuItems',
	  [
		  {
			id: uuid.v4(),
			title: 'Mozzarella Sticks',
			price: null,
			category: "appetizers",
			createdAt: new Date(),
			updatedAt: new Date(),
		  },
		  {
			id: uuid.v4(),
			title: 'Backdraft Fries',
			price: null,
			category: "sides",
			createdAt: new Date(),
			updatedAt: new Date(),
		  },
		  {
			id: uuid.v4(),
			title: 'Hot Dog',
			price: null,
			category: "baskets",
			createdAt: new Date(),
			updatedAt: new Date(),
		  },
		  {
			id: uuid.v4(),
			title: 'Hamburger Steak',
			price: null,
			category: "entrees",
			createdAt: new Date(),
			updatedAt: new Date(),
		  },
		  {
			id: uuid.v4(),
			title: 'Pepsi products',
			price: null,
			category: "beverages",
			createdAt: new Date(),
			updatedAt: new Date(),
		  },
		  {
			id: uuid.v4(),
			title: 'Egg, Pancake, and Bacon',
			price: null,
			category: "breakfast",
			createdAt: new Date(),
			updatedAt: new Date(),
		  },
		  {
			id: uuid.v4(),
			title: 'Chicken Tender',
			price: null,
			category: "kids",
			createdAt: new Date(),
			updatedAt: new Date(),
		  },
		  {
			id: uuid.v4(),
			title: 'Corn Dog',
			price: null,
			category: "kids",
			createdAt: new Date(),
			updatedAt: new Date(),
		  },
		  {
			id: uuid.v4(),
			title: 'Onion Rings',
			price: null,
			category: "sides",
			createdAt: new Date(),
			updatedAt: new Date(),
		  },
	  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('MenuItems', null, {});
  }
};
