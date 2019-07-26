"use strict";

const models = require("../models");
const uuid = require("uuid");

/**
 * Adds a new menu item
 *
 * body MenuItem The menu item details
 * returns MenuItem
 **/
exports.addMenuItem = function(body) {
  return new Promise(function(resolve, reject) {
    models.MenuItem.create({
      id: uuid.v4(),
      title: body.title,
      price: body.price,
      category: body.category,
      createdAt: new Date(),
      updatedAt: new Date()
    })
      .then(item => resolve(item))
      .catch(err => reject(err));
  });
};

/**
 * Delete the specified menu item
 *
 * id Integer The id of the menu item to delete
 * no response value expected for this operation
 **/
exports.deleteMenuitem = function(id) {
  return new Promise(function(resolve, reject) {
    models.MenuItem.findByPk(id)
      .then(item => {
        if (!item) {
          reject();
        } else {
          item
            .destroy()
            .then(result => {
              if (result > 0) {
                resolve();
              } else {
                reject();
              }
            })
            .catch(err => reject(err));
        }
      })
      .catch(err => reject(err));
  });
};

/**
 * Edit a new menu item
 *
 * body MenuItem The menu item details
 * id String The id of the menu item to edit
 * returns MenuItem
 **/
exports.editMenuItem = function(body, id) {
  return new Promise(function(resolve, reject) {
    models.MenuItem.update(
      {
        title: body.title,
        price: body.price,
        category: body.category
      },
      {
        where: {
          id: id
        }
      }
    )
      .then(affected => {
        if (affected.length === 0) {
          reject();
        } else {
          resolve();
        }
      })
      .catch(err => reject(err));
  });
};

/**
 * Get a menu item
 *
 * id String The id of the menu item to retrieve
 * returns MenuItem
 **/
exports.getMenuItem = function(id) {
  return new Promise(function(resolve, reject) {
    models.MenuItem.findByPk(id)
      .then(menuItem => {
        if (!menuItem) {
          reject();
        } else {
          resolve({
            id: menuItem.id,
            title: menuItem.title,
            price: menuItem.price,
            category: menuItem.category
          });
        }
      })
      .catch(err => reject(err));
  });
};

/**
 * Get all menu items
 *
 * returns List
 **/
exports.getMenuItems = function() {
  return new Promise(function(resolve, reject) {
    models.MenuItem.findAll()
      .then(results => {
        const menuItems = results.map(item => {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category
          };
        });
        resolve(menuItems);
      })
      .catch(err => reject(err));
  });
};
