'use strict';

var utils = require('../utils/writer.js');
var Gallery = require('../service/GalleryService');

module.exports.addGalleryImage = function addGalleryImage (req, res, next) {
  var body = req.swagger.params['body'].value;
  Gallery.addGalleryImage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGalleryImage = function deleteGalleryImage (req, res, next) {
  var id = req.swagger.params['id'].value;
  Gallery.deleteGalleryImage(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGalleryImages = function getGalleryImages (req, res, next) {
  Gallery.getGalleryImages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
