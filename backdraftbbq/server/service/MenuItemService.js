'use strict';


/**
 * Adds a new menu item
 *
 * body MenuItem The menu item details
 * returns MenuItem
 **/
exports.addMenuItem = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete the specified menu item
 *
 * id Integer The id of the menu item to delete
 * no response value expected for this operation
 **/
exports.deleteMenuitem = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all menu items
 *
 * returns List
 **/
exports.getMenuItems = function() {
  return new Promise(function(resolve, reject) {
    var examples = [{title: "burger", price: 1.75},{title: "fish", price: 2.0},{title: "fries", price: 10.75},];
    if (Object.keys(examples).length > 0) {
      resolve(examples);
    } else {
      resolve();
    }
  });
}

