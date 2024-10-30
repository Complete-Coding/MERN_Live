const fs = require('fs');
const path = require('path');
const rootDir = require('./../util/path-util');

const homeFilePath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save(callback) {
    Home.fetchAll(registeredHomes => {
      registeredHomes.push(this);

      fs.writeFile(homeFilePath, JSON.stringify(registeredHomes), callback);
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeFilePath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    })
  }
}