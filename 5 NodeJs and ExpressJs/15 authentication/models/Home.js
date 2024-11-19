const mongoose = require('mongoose');
const Favourite = require('./Favourite');

const homeSchema = new mongoose.Schema({
  houseName : {type: String, required: true},
  price: {type: Number, required: true},
  location: {type: String, required: true},
  rating: {type: Number, required: true},
  photoUrl: String,
  description: String
});

homeSchema.pre('findOneAndDelete', (next) => {
  const homeId = this.getQuery()["_id"];
  console.log(homeId);
  Favourite.deleteOne({homeId}).then(() => {
    console.log("deleted successfully");
    next();
  }).catch(err => {
    console.log("Error while deleting Favourite: ", err);
  });
});

module.exports = mongoose.model("Home", homeSchema);