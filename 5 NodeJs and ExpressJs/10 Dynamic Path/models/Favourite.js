const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path-util');

const favouriteFilePath = path.join(rootDir, 'data', 'favourite.json');

module.exports = class Favourite {

  static fetchAll(callback) {
    fs.readFile(favouriteFilePath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    })
  }

  static addToFavourites(homeId, callback) {
    Favourite.fetchAll(favouriteIds => {
      favouriteIds.push(homeId);
      fs.writeFile(favouriteFilePath, JSON.stringify(favouriteIds), callback);
    });
  }
}