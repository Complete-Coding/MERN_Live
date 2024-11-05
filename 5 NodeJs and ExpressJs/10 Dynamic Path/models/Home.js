const fs = require('fs');
const path = require('path');
const rootDir = require('./../util/path-util');
const Favourite = require('./Favourite');

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
      if (this.id) { // edit case
        registeredHomes = registeredHomes.map(home => home.id !== this.id ? home : this);
      } else { // new case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
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

  static findById(homeId, callback) {
    Home.fetchAll(homes => {
      const home = homes.find(home => home.id === homeId);
      callback(home);
    })
  }

  static deleteById(homeId, callback) {
    Home.fetchAll(homes => {
      const newHomes = homes.filter(home => home.id !== homeId);
      fs.writeFile(homeFilePath, JSON.stringify(newHomes), error => {
        if (error) {
          callback(error);
          return;
        }
        Favourite.deleteById(homeId, callback);
      });
    })
  }
}