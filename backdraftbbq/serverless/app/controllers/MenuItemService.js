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
 * id String The id of the menu item to delete
 * no response value expected for this operation
 **/
exports.deleteMenuitem = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit a new menu item
 *
 * body MenuItem The menu item details
 * id String The id of the menu item to edit
 * returns MenuItem
 **/
exports.editMenuItem = function(body,id) {
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
 * Get a menu item
 *
 * id String The id of the menu item to retrieve
 * returns MenuItem
 **/
exports.getMenuItem = function(id) {
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
 * Get all menu items
 *
 * returns List
 **/
exports.getMenuItems = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

