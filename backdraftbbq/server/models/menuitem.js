'use strict';
const menuItemEnum = require('../util/enum').MenuItemEnum;

module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('MenuItem', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
    price: DataTypes.STRING,
    title: DataTypes.STRING,
    category: DataTypes.ENUM(...menuItemEnum)
  }, {});
  MenuItem.associate = function(models) {
    // associations can be defined here
  };
  return MenuItem;
};