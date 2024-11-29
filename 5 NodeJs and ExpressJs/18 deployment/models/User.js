const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName : {type: String, required: true},
  lastName : {type: String, required: true},
  email : {type: String, required: true, unique: true},
  password : {type: String, required: true},
  userType : {type: String, required: true, enum : ['guest', 'host']},
  favouriteHomes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home',
  }],
  otp: String,
  otpExpiry: Date,
});


module.exports = mongoose.model("User", userSchema);