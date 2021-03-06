"use strict";

/**
 * Adds a new gallery image
 *
 * body Object The gallery image
 * returns GalleryImage
 **/
exports.addGalleryImage = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Delete the specified menu item
 *
 * id Integer The id of the gallery image to delete
 * no response value expected for this operation
 **/
exports.deleteGalleryImage = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Get all gallery iamges
 *
 * returns List
 **/
exports.getGalleryImages = function() {
  return new Promise(function(resolve, reject) {
    var examples = [
      { id: 1, url: "https://picsum.photos/200/300 " },
      { id: 2, url: "https://picsum.photos/200/300 " }
    ];

    if (Object.keys(examples).length > 0) {
      resolve(examples);
    } else {
      resolve();
    }
  });
};
