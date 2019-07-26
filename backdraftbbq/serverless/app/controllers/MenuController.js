'use strict';

var utils = require('../utils/writer.js');
var MenuItem = require('../service/MenuItemService');

module.exports.addMenuItem = function addMenuItem (req, res, next) {
  var body = req.swagger.params['body'].value;
  MenuItem.addMenuItem(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMenuitem = function deleteMenuitem (req, res, next) {
  var id = req.swagger.params['id'].value;
  MenuItem.deleteMenuitem(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMenuItems = function getMenuItems (req, res, next) {
  MenuItem.getMenuItems()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
